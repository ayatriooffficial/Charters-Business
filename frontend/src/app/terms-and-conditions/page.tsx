import TermsAndConditionsContent from "@/components/terms/TermsAndConditionsContent";

import { generateStandardPageSchemas } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Charters' Union",
  description:
    "Terms and conditions for using Charters' Union website. Learn about our policies, user agreements, and legal information.",
  alternates: {
    canonical: "https://chartersunion.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Charters' Union",
    description:
      "Terms and conditions for using Charters' Union website. Learn about our policies, user agreements, and legal information.",
    url: "https://chartersunion.com/terms-and-conditions",
    siteName: "Charters' Union",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp",
        width: 1200,
        height: 630,
        alt: "Charters' Union Terms and Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Charters' Union",
    description:
      "Terms and conditions for using Charters' Union website. Learn about our policies, user agreements, and legal information.",
    images: [
      "https://res.cloudinary.com/ducgcl4dg/image/upload/f_jpg,w_1200,h_630,c_fill/v1768578300/background_bvoits.webp",
    ],
  },
};

export default function TermsAndConditionsPage() {
  const consolidatedSchema = generateStandardPageSchemas({
    path: "/terms-and-conditions",
    name: "Terms and Conditions | Charters' Union",
    description:
      "Terms and conditions for using Charters' Union website. Learn about our policies, user agreements, and legal information.",
    breadcrumbItems: [
      { name: "Home", url: "https://chartersunion.com" },
      {
        name: "Terms and Conditions",
        url: "https://chartersunion.com/terms-and-conditions",
      },
    ],
  });

  return (
    <>
      {/* Consolidated Page Schema */}
      <script
        id="terms-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
      />

      <div className="space-y-0">
        <TermsAndConditionsContent />
      </div>
    </>
  );
}
