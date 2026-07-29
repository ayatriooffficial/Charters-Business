import { notFound } from "next/navigation";

import { getProgrammeBySlug, getAllProgrammeSlugs, courseSeoMetadata } from "@/lib/server/programmes";
import type { Viewport } from "next";
import ProgramHero from "@/components/programmes/ProgramHero";
import ProgramInfo from "@/components/programmes/ProgramInfo";
import ProgrammeBelowFoldSections from "@/components/programmes/ProgrammeBelowFoldSections";
import ScrollIntentPopup from "@/components/programmes/ScrollIntentPopup";

import {
  generateCourseSchema,
  generateProgrammeWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateAdmissionHowToSchema,
  organizationReferenceSchema,
  websiteReferenceSchema,
  combineSchemas,
} from "@/lib/schema";


export async function generateStaticParams() {
  const slugs = getAllProgrammeSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};



export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const programme = getProgrammeBySlug(decodedSlug);

  if (!programme) {
    return {
      title: "Programme Not Found",
    };
  }

  const seo = courseSeoMetadata[programme.slug as keyof typeof courseSeoMetadata];
  const title = seo?.title || `${programme.card.title} - Charters' Union`;
  const description = seo?.description || programme.card.description;
  const pageUrl = `https://chartersunion.com/${programme.slug}`;

  let imageUrl = programme.card.image;
  if (!imageUrl.startsWith("http://") && !imageUrl.startsWith("https://")) {
    imageUrl = `https://chartersunion.com${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
  }

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: seo?.keywords || [],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Charters' Union",
      type: "website",
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

export default async function ProgrammePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const programme = getProgrammeBySlug(decodedSlug);

  if (!programme) {
    notFound();
  }

  // Generate Structured Data for SEO
  const courseSchema = generateCourseSchema(programme);
  const webPageSchema = generateProgrammeWebPageSchema(programme);

  // Generate Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://chartersunion.com" },
    { name: "Programmes", url: "https://chartersunion.com/#programmes" },
    {
      name: programme.card.title,
      url: `https://chartersunion.com/${programme.slug}`,
    },
  ]);

  const allFaqs = programme.faq.categories.flatMap((category) =>
    category.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    })),
  );
  const faqSchema = generateFAQSchema(allFaqs);
  const howToSchema = generateAdmissionHowToSchema(programme.card.title);

  const consolidatedSchema = combineSchemas(
    organizationReferenceSchema,
    websiteReferenceSchema,
    webPageSchema,
    courseSchema,
    breadcrumbSchema,
    faqSchema,
    howToSchema,
  );

  return (
    <>
      {/* Consolidated Page Schema */}
      <script
        id={`programme-page-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
      />
      {/* Hero Section */}
      <ProgramHero data={programme.hero} assets={programme.assets} slug={programme.slug} />

      {/* Other Sections */}
      <ProgramInfo data={programme.programInfo} />
      <ProgrammeBelowFoldSections programme={programme} />

      {/* Exit-intent Scroll Popup */}
      <ScrollIntentPopup />
    </>
  );
}
