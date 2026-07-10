import type { Metadata } from "next";
import CareerPathPageClient from "./CareerPathClient";
import { generateBreadcrumbSchema, organizationReferenceSchema, combineSchemas } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Career Path Assessment & Report | Charters' Union",
  description:
    "Take our AI career path assessment to discover your strengths, explore customized program alignments, and receive a tailored growth plan.",
  alternates: {
    canonical: "https://chartersbusiness.com/career-path",
  },
  openGraph: {
    title: "AI Career Path Assessment & Report | Charters' Union",
    description:
      "Take our AI career path assessment to discover your strengths, explore customized program alignments, and receive a tailored growth plan.",
    url: "https://chartersbusiness.com/career-path",
    siteName: "Charters' Union",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp",
        width: 1200,
        height: 630,
        alt: "AI Career Path Assessment & Report | Charters' Union",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Career Path Assessment & Report | Charters' Union",
    description:
      "Take our AI career path assessment to discover your strengths, explore customized program alignments, and receive a tailored growth plan.",
    images: ["https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp"],
  },
};

export default function CareerPathPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://chartersbusiness.com" },
    { name: "Career Path", url: "https://chartersbusiness.com/career-path" },
  ]);

  // Define WebPage schema
  const careerPathPageSchema = {
    "@type": "WebPage",
    "@id": "https://chartersbusiness.com/career-path#webpage",
    url: "https://chartersbusiness.com/career-path",
    name: "AI Career Path Assessment & Report | Charters' Union",
    description: "Take our AI career path assessment to discover your strengths, explore customized program alignments, and receive a tailored growth plan.",
    inLanguage: "en-IN",
    isPartOf: {
      "@id": "https://chartersbusiness.com/#website",
    },
    about: {
      "@id": "https://chartersbusiness.com/#organization",
    },
  };

  const consolidatedSchema = combineSchemas(organizationReferenceSchema, breadcrumbSchema, careerPathPageSchema);

  return (
    <>
      {/* Consolidated Page Schema */}
      <script
        id="career-path-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
      />
      <CareerPathPageClient />
    </>
  );
}
