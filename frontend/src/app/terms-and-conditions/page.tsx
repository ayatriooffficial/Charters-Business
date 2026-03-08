import TermsAndConditionsContent from "@/components/terms/TermsAndConditionsContent";

import { organizationSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Charters Business",
  description:
    "Terms and conditions for using Charters Business website. Learn about our policies, user agreements, and legal information.",
};

export default function TermsAndConditionsPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://chartersbusiness.com" },
    {
      name: "Terms and Conditions",
      url: "https://chartersbusiness.com/terms-and-conditions",
    },
  ]);

  return (
    <>
      {/* Organization Schema */}
      {/* Organization Schema */}
      <script
        id="terms-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        id="terms-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main role="main" className="space-y-0">
        <TermsAndConditionsContent />
      </main>
    </>
  );
}
