import PrivacyPolicyContent from "@/components/privacy/PrivacyPolicyContent";

import { generateStandardPageSchemas } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Charters' Union",
  description:
    "Privacy policy for Charters' Union (A unit of Shanti Informatics). Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://chartersunion.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Charters' Union",
    description:
      "Privacy policy for Charters' Union (A unit of Shanti Informatics). Learn how we collect, use, and protect your personal information.",
    url: "https://chartersunion.com/privacy-policy",
    siteName: "Charters' Union",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp",
        width: 1200,
        height: 630,
        alt: "Charters' Union Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Charters' Union",
    description:
      "Privacy policy for Charters' Union (A unit of Shanti Informatics). Learn how we collect, use, and protect your personal information.",
    images: [
      "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp",
    ],
  },
};

export default function PrivacyPolicyPage() {
  const consolidatedSchema = generateStandardPageSchemas({
    path: "/privacy-policy",
    name: "Privacy Policy | Charters' Union",
    description:
      "Privacy policy for Charters' Union (A unit of Shanti Informatics). Learn how we collect, use, and protect your personal information.",
    breadcrumbItems: [
      { name: "Home", url: "https://chartersunion.com" },
      {
        name: "Privacy Policy",
        url: "https://chartersunion.com/privacy-policy",
      },
    ],
  });

  return (
    <>
      {/* Consolidated Page Schema */}
      <script
        id="privacy-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
      />

      <div className="space-y-0 mt-2">
        <PrivacyPolicyContent />
      </div>
    </>
  );
}
