import PrivacyPolicyContent from "@/components/privacy/PrivacyPolicyContent";

import { organizationSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Charters Business",
  description:
    "Privacy policy for Charters Business (A unit of Shanti Informatics). Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://chartersbusiness.com" },
    {
      name: "Privacy Policy",
      url: "https://chartersbusiness.com/privacy-policy",
    },
  ]);

  return (
    <>
      {/* Organization Schema */}
      {/* Organization Schema */}
      <script
        id="privacy-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        id="privacy-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main role="main" className="space-y-0 mt-2">
        <PrivacyPolicyContent />
      </main>
    </>
  );
}
