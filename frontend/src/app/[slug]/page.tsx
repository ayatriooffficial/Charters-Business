import { notFound } from "next/navigation";

import { getProgrammeBySlug, getAllProgrammeSlugs } from "@/lib/server/programmes";
import type { Viewport } from "next";
import ProgramHero from "@/components/programmes/ProgramHero";
import CurriculumSection from "@/components/programmes/CurriculumSection";
import WeekAtTetr from "@/components/programmes/WeekAtUnion";
import LearnApplyReflectRepeat from "@/components/programmes/LearnApplyReflectRepeat";
import ScholarshipsSection from "@/components/programmes/ScholarshipsSection";
import ProgramInfo from "@/components/programmes/ProgramInfo";
import AIDegreeProgram from "@/components/programmes/AIDegreeProgram";
import FAQ from "@/components/programmes/FAQ";
import TrackRecord from "@/components/programmes/TrackRecord";
import PricingTabs from "@/components/programmes/PricingTabs";
import {
  generateCourseSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
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
  const programme = getProgrammeBySlug(slug);

  if (!programme) {
    return {
      title: "Programme Not Found",
    };
  }

  const baseUrl = "https://chartersbusiness.com";
  const pageUrl = `${baseUrl}/${programme.slug}`;

  // Ensure image URL is absolute for OpenGraph
  let imageUrl = programme.card.image;
  if (!imageUrl.startsWith("http://") && !imageUrl.startsWith("https://")) {
    imageUrl = `${baseUrl}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
  }

  return {
    title: `${programme.card.title} - Charter's Union`,
    description: programme.card.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${programme.card.title} - Charter's Union`,
      description: programme.card.description,
      type: "website",
      url: pageUrl,
      siteName: "Charter's Union",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: programme.card.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${programme.card.title} - Charter's Union`,
      description: programme.card.description,
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
  const programme = getProgrammeBySlug(slug);

  if (!programme) {
    notFound();
  }

  // Generate Structured Data for SEO
  const courseSchema = generateCourseSchema(programme);

  // Generate Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://chartersbusiness.com" },
    { name: "Programmes", url: "https://chartersbusiness.com/#programmes" },
    {
      name: programme.card.title,
      url: `https://chartersbusiness.com/${programme.slug}`,
    },
  ]);

  // Generate FAQ Schema from programme FAQ data
  const allFaqs = programme.faq.categories.flatMap((category) =>
    category.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    })),
  );
  const faqSchema = generateFAQSchema(allFaqs);

  return (
    <>
      {/* SEO Structured Data - Course Schema */}

      <script
        id={`course-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        id={`breadcrumb-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* FAQ Schema */}
      <script
        id={`faq-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main role="main" className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <ProgramHero data={programme.hero} programmeSlug={slug} />
        {/* Other Sections */}
        <ProgramInfo data={programme.programInfo} />
        <TrackRecord data={programme.trackRecord} />

        <CurriculumSection />
        <AIDegreeProgram data={programme.degreeProgram} />
        <WeekAtTetr />
        <LearnApplyReflectRepeat data={programme.learnApply} />
        <PricingTabs />
        <ScholarshipsSection scholarships={programme.scholarships} />
        <FAQ data={programme.faq} />
      </main>
    </>
  );
}
