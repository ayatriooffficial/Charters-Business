import CommunitySection from "@/components/community/CommunitySection";

import { organizationSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Charters Business",
  description:
    "Join the vibrant Charters Business community. Connect with students, alumni, and industry professionals who share your passion for business excellence.",
  keywords: [
    "community",
    "alumni network",
    "student community",
    "business network",
    "charters business community",
    "professional network",
  ],
  openGraph: {
    title: "Community | Charters Business",
    description:
      "Join the vibrant Charters Business community of students, alumni, and industry professionals.",
    type: "website",
    url: "https://chartersbusiness.com/community",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community | Charters Business",
    description:
      "Join the vibrant Charters Business community of students, alumni, and industry professionals.",
  },
  alternates: {
    canonical: "https://chartersbusiness.com/community",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CommunityPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://chartersbusiness.com" },
    { name: "Community", url: "https://chartersbusiness.com/community" },
  ]);

  return (
    <>
      {/* Organization Schema */}
      {/* Organization Schema */}
      <script
        id="community-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        id="community-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main role="main" className="space-y-0">
        <CommunitySection />
      </main>
    </>
  );
}
