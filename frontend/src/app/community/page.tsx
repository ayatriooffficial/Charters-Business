import CommunitySection from "@/components/community/CommunitySection";

import { organizationReferenceSchema, generateBreadcrumbSchema, combineSchemas } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Charters' Union",
  description:
    "Join the vibrant Charters' Union community. Connect with students, alumni, and industry professionals who share your passion for business excellence.",
  alternates: {
    canonical: "https://chartersunion.com/community",
  },
  openGraph: {
    title: "Community | Charters' Union",
    description:
      "Join the vibrant Charters' Union community. Connect with students, alumni, and industry professionals who share your passion for business excellence.",
    url: "https://chartersunion.com/community",
    siteName: "Charters' Union",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp",
        width: 1200,
        height: 630,
        alt: "Community | Charters' Union",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community | Charters' Union",
    description:
      "Join the vibrant Charters' Union community. Connect with students, alumni, and industry professionals who share your passion for business excellence.",
    images: ["https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp"],
  },
};

export default function CommunityPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://chartersunion.com" },
    { name: "Community", url: "https://chartersunion.com/community" },
  ]);

  // Define WebPage schema
  const communityPageSchema = {
    "@type": "WebPage",
    "@id": "https://chartersunion.com/community#webpage",
    url: "https://chartersunion.com/community",
    name: "Community | Charters' Union",
    description: "Join the vibrant Charters' Union community. Connect with students, alumni, and industry professionals who share your passion for business excellence.",
    inLanguage: "en-IN",
    isPartOf: {
      "@id": "https://chartersunion.com/#website",
    },
    about: {
      "@id": "https://chartersunion.com/#organization",
    },
  };

  // Combine into a single lightweight graph schema
  const consolidatedSchema = combineSchemas(organizationReferenceSchema, breadcrumbSchema, communityPageSchema);

  return (
    <>
      {/* Consolidated Page Schema */}
      <script
        id="community-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
      />

      <main role="main" className="space-y-0">
        <CommunitySection />
      </main>
    </>
  );
}
