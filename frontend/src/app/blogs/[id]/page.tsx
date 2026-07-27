import type { Metadata } from "next";
import BlogDetailPageClient from "./BlogDetailClient";
import { STATIC_BLOGS, slugify, DisplayBlog } from "@/data/staticBlogs";
import { getBlogById } from "@/lib/api";
import { generateBlogPostingSchema, generateStandardPageSchemas } from "@/lib/schema";

interface Props {
  params: Promise<{ id: string }>;
}

const SCHEMA_IMAGE = "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp";

async function fetchFullBlog(id: string): Promise<DisplayBlog | null> {
  // 1. Check static
  const matchedStatic = STATIC_BLOGS.find((sb) => slugify(sb.title) === id);
  if (matchedStatic) {
    return matchedStatic;
  }
  // 2. Fetch from DB
  try {
    const response = await getBlogById(id);
    if (response && response.success && response.data) {
      return {
        _id: response.data._id,
        title: response.data.title,
        author: response.data.author,
        readTime: response.data.readTime,
        category: response.data.category,
        content: response.data.content,
        tags: response.data.tags || [],
        releasedAt: response.data.releasedAt ? String(response.data.releasedAt) : response.data.createdAt,
      };
    }
  } catch (error) {
    console.error("Error getting full blog data:", error);
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = await fetchFullBlog(id);

  const title = blog ? `${blog.title} | Charters' Union Blog` : "Blog Article | Charters' Union Blog";
  const description = blog ? blog.content.substring(0, 155).replace(/[\r\n\t]+/g, " ").trim() + "..." : "Read the latest insights and updates from Charters' Union.";
  const canonicalUrl = `https://chartersunion.com/blogs/${id}`;
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
  const blog = await fetchFullBlog(id);

  const blogSchema = blog && blog.releasedAt
    ? generateBlogPostingSchema({
        title: blog.title,
        description: blog.content.substring(0, 155).replace(/[\r\n\t]+/g, " ").trim() + "...",
        url: `https://chartersunion.com/blogs/${id}`,
        image: SCHEMA_IMAGE,
        datePublished: blog.releasedAt,
        dateModified: blog.releasedAt,
        author: blog.author,
      })
    : null;

  const consolidatedSchema = generateStandardPageSchemas({
    path: `/blogs/${id}`,
    name: blog ? `${blog.title} | Charters' Union Blog` : "Blog Article | Charters' Union Blog",
    description: blog
      ? blog.content.substring(0, 155).replace(/[\r\n\t]+/g, " ").trim() + "..."
      : "Read the latest insights and updates from Charters' Union.",
    breadcrumbItems: [
      { name: "Home", url: "https://chartersunion.com" },
      { name: blog ? blog.title : "Blog Article", url: `https://chartersunion.com/blogs/${id}` },
    ],
    additionalSchemas: blogSchema ? [blogSchema] : [],
  });

  return (
    <>
      {/* Consolidated Page Schema */}
      <script
        id={`blog-page-schema-${id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
      />

      <BlogDetailPageClient id={id} initialBlog={blog} />
    </>
  );
}
