import CommunitySection from "@/components/community/CommunitySection";

import { generateStandardPageSchemas } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Charters' Union",
  description:
    "Join the vibrant Charters' Union community. Connect with students, alumni, and industry professionals who share your passion for business excellence.",
  keywords: [
    "Charters Union community",
    "student community Kolkata",
    "alumni network",
    "business students community",
    "professional networking",
    "peer learning",
    "career networking",
  ],
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
  const consolidatedSchema = generateStandardPageSchemas({
    path: "/community",
    name: "Community | Charters' Union",
    description:
      "Join the vibrant Charters' Union community. Connect with students, alumni, and industry professionals who share your passion for business excellence.",
    breadcrumbItems: [
      { name: "Home", url: "https://chartersunion.com" },
      { name: "Community", url: "https://chartersunion.com/community" },
    ],
  });

  return (
    <>
      {/* Consolidated Page Schema */}
      <script
        id="community-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
      />

      <div className="space-y-0">
        <CommunitySection />
      </div>
    </>
  );
}
