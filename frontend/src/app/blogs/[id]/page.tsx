import type { Metadata } from "next";
import BlogDetailPageClient from "./BlogDetailClient";
import { STATIC_BLOGS, slugify } from "@/data/staticBlogs";
import { getBlogById } from "@/lib/api";
import { generateBreadcrumbSchema, combineSchemas } from "@/lib/schema";

interface Props {
  params: Promise<{ id: string }>;
}

const SCHEMA_IMAGE = "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp";

interface BlogData {
  title: string;
  author: string;
  description: string;
  datePublished?: string;
  image?: string;
}

async function getBlogData(id: string): Promise<BlogData | null> {
  // 1. Check static
  const matchedStatic = STATIC_BLOGS.find((sb) => slugify(sb.title) === id);
  if (matchedStatic) {
    return {
      title: matchedStatic.title,
      author: matchedStatic.author || "Charters' Union",
      description: matchedStatic.content.substring(0, 155).replace(/[\r\n\t]+/g, " ").trim() + "...",
      datePublished: matchedStatic.releasedAt || undefined,
      image: SCHEMA_IMAGE,
    };
  }
  // 2. Fetch from DB
  try {
    const response = await getBlogById(id);
    if (response && response.success && response.data) {
      return {
        title: response.data.title,
        author: response.data.author || "Charters' Union",
        description: response.data.content.substring(0, 155).replace(/[\r\n\t]+/g, " ").trim() + "...",
        datePublished: response.data.releasedAt || response.data.createdAt,
        image: SCHEMA_IMAGE,
      };
    }
  } catch (error) {
    console.error("Error getting blog data:", error);
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlogData(id);

  const title = blog ? `${blog.title} | Charters' Union Blog` : "Blog Article | Charters' Union Blog";
  const description = blog ? blog.description : "Read the latest insights and updates from Charters' Union.";
  const canonicalUrl = `https://chartersbusiness.com/blogs/${id}`;
  const imageUrl = "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonicalUrl,
      siteName: "Charters' Union",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const blog = await getBlogData(id);

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://chartersbusiness.com" },
    { name: "Blogs", url: "https://chartersbusiness.com/blogs" },
    { name: blog ? blog.title : "Blog Article", url: `https://chartersbusiness.com/blogs/${id}` },
  ]);

  // Generate article schema
  const blogSchema = blog
    ? ({
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.description,
        "url": `https://chartersbusiness.com/blogs/${id}`,
        "image": blog.image,
        "datePublished": blog.datePublished,
        "author": {
          "@type": "Person",
          "name": blog.author,
        },
        "publisher": {
          "@type": "EducationalOrganization",
          "@id": "https://chartersbusiness.com/#organization",
          "name": "Charters' Union",
        },
      } as const)
    : null;

  const consolidatedSchema = combineSchemas(breadcrumbSchema, blogSchema);

  return (
    <>
      {/* Consolidated Page Schema */}
      <script
        id={`blog-page-schema-${id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
      />

      <BlogDetailPageClient params={params} />
    </>
  );
}
