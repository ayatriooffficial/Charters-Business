import {
  combineSchemas,
  generateHomeProgrammesItemListSchema,
  generateHomeBlogsItemListSchema,
  generateLocalBusinessSchema,
  generateSiteNavigationSchema,
  homePageSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { programmes } from "@/lib/server/programmes";
import { STATIC_BLOGS } from "@/data/staticBlogs";
import { Metadata } from "next";

// Critical above-fold components — static imports so they SSR immediately
import ChartersUnionHero from "@/components/home/ChartersUnionHero";
import PlacementReport from "@/components/home/PlacementReport";

// Client Component that owns all ssr:false dynamic() calls
// (ssr:false is not permitted inside Server Components)
import BelowFoldSections from "@/components/home/BelowFoldSections";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    absolute: "Charters' Union: AI-Powered Job-Ready Training in Kolkata | Paid Internship",
  },
  description:
    "Kolkata's AI-first Job Ready training institute. 3 programs: Certified Business Accountant, Digital Growth & Marketing, Technology & Business Management. AICPA/ACCA/HBS/Google aligned. 4–6 month paid internship in 7 countries. Corporate English. AI interview coaching. Placement support for BCom, BSc, BBA, BA, Freshers. Book free democlass.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Charters' Union: Job-Ready Training Institute Kolkata | AI Curriculum | 100% Paid Internship 7 Countries | BCom BSc BBA BA Freshers",
    description:
      "Kolkata's AI-first 100% Job Guarantee training institute. 3 programs: Certified Business Accountant, Digital Growth & Marketing, Technology & Business Management. AICPA/ACCA/HBS/Google aligned. 4–6 month paid internship in 7 countries. Corporate English. AI interview coaching. Placement support. Book free democlass.",
    url: "https://chartersunion.com",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp",
        width: 1200,
        height: 630,
        alt: "Charters' Union AI-Ready Training Institute Kolkata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charters' Union: Job-Ready Training Institute Kolkata | AI Curriculum | Paid Internship 7 Countries | BCom BSc BBA BA Freshers",
    description:
      "Kolkata's AI-first job-ready training institute. 3 programs: Certified Business Accountant, Digital Growth & Marketing, Technology & Business Management. AICPA/ACCA/HBS/Google aligned. 4–6 month paid internship in 7 countries. Corporate English. AI interview coaching. Placement support. Book free democlass.",
    images: ["https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp"],
  },
};

export default function Home() {
  const siteNavigationSchema = generateSiteNavigationSchema([
    {
      name: "Home",
      url: "https://chartersunion.com/",
      description: "Kolkata's AI-first job-ready training institute. 3 programs: Certified Business Accountant, Digital Growth & Marketing, Technology & Business Management. AICPA/ACCA/HBS/Google aligned. 4–6 month paid internship in 7 countries. Corporate English. AI interview coaching. Placement support. Book free democlass.",
    },
    {
      name: "Programmes",
      url: "https://chartersunion.com/#programmes",
      description: "Explore our professional programmes",
    },
    {
      name: "Faculties",
      url: "https://chartersunion.com/faculties",
      description: "Meet our expert faculty members",
    },
    {
      name: "Careers",
      url: "https://chartersunion.com/careers",
      description: "Career opportunities at Charters' Union",
    },
    {
      name: "About",
      url: "https://chartersunion.com/#about",
      description: "Learn more about Charters' Union",
    },
    {
      name: "Blogs",
      url: "https://chartersunion.com/blogs",
      description: "Read our latest articles and news",
    },
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    name: "Charters' Union",
    address: {
      street: "Shantiniketan Building, 8 Camac St, Elgin",
      city: "Kolkata",
      state: "West Bengal",
      postalCode: "700017",
      country: "IN",
    },
  });

  // Combine all JSON-LD schemas into one graph script tag
  const consolidatedSchema = combineSchemas(
    organizationSchema,
    websiteSchema,
    homePageSchema,
    siteNavigationSchema,
    localBusinessSchema,
    generateHomeProgrammesItemListSchema(programmes),
    generateHomeBlogsItemListSchema(
      STATIC_BLOGS.slice(0, 4).map((blog: any) => ({
        title: blog.title,
        description: blog.excerpt,
        url: `https://chartersunion.com/blogs/${blog.id}`,
        image: blog.image,
        datePublished: blog.date,
      }))
    )
  );

  return (
    <>
      {/* SEO - JSON-LD Structured Data (combined into single script) */}
      <Script
        id="all-schemas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
      />

      {/* Above-fold: Server-rendered immediately */}
      <ChartersUnionHero />
      <PlacementReport />

      {/* Below-fold: Client Component handles all lazy + ssr:false loading */}
      <div className="md:border-x border-gray-200 max-w-[85rem] w-full md:w-[90%] mx-auto overflow-x-clip md:overflow-x-visible">
        <BelowFoldSections />
      </div>
    </>
  );
}