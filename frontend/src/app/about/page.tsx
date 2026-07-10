import TetrLandingPage from "@/components/about/About";

import { organizationReferenceSchema, generateBreadcrumbSchema, combineSchemas } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Charters' Union",
  description:
    "Learn about Charters' Union and our mission to transform business education. Discover our world-class faculty, programs, and industry-ready leaders.",
  alternates: {
    canonical: "https://chartersunion.com/about",
  },
  openGraph: {
    title: "About Us | Charters' Union",
    description:
      "Learn about Charters' Union and our mission to transform business education. Discover our world-class faculty, programs, and industry-ready leaders.",
    url: "https://chartersunion.com/about",
    siteName: "Charters' Union",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp",
        width: 1200,
        height: 630,
        alt: "About Us | Charters' Union",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Charters' Union",
    description:
      "Learn about Charters' Union and our mission to transform business education. Discover our world-class faculty, programs, and industry-ready leaders.",
    images: ["https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp"],
  },
};

export default function AboutPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://chartersunion.com" },
    { name: "About", url: "https://chartersunion.com/about" },
  ]);

  // Define AboutPage schema
  const aboutPageSchema = {
    "@type": "AboutPage",
    "@id": "https://chartersunion.com/about#webpage",
    url: "https://chartersunion.com/about",
    name: "About Us | Charters' Union",
    description: "Learn about Charters' Union and our mission to transform business education. Discover our world-class faculty, programs, and industry-ready leaders.",
    inLanguage: "en-IN",
    isPartOf: {
      "@id": "https://chartersunion.com/#website",
    },
    about: {
      "@id": "https://chartersunion.com/#organization",
    },
  };

  // Combine into a single lightweight graph schema
  const consolidatedSchema = combineSchemas(organizationReferenceSchema, breadcrumbSchema, aboutPageSchema);

  return (
    <>
      {/* Consolidated Page Schema */}
      <script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
      />

      <TetrLandingPage />
    </>
  );
}
