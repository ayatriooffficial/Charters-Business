import { Metadata } from "next";

import ApplicationHero from "@/components/apply/ApplicationHero";
import ApplicationProcess from "@/components/apply/ApplicationProcess";
import ScholarshipsSection from "@/components/apply/ScholarshipsSection";
import { scholarshipBanner } from "@/data/applyPageData";
import { Suspense } from "react";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Apply Now - Charter Application | Charters Business",
  description:
    "Begin your Tetr Application. Join thousands of students worldwide and get up to 100% tuition fee scholarships. Apply for undergraduate and postgraduate programs.",
  keywords: [
    "charter application",
    "apply now",
    "business school admission",
    "scholarships",
    "undergraduate program",
    "postgraduate program",
    "charters business",
    "MBA application",
    "business education",
    "study abroad",
  ],
  openGraph: {
    title: "Apply Now - Tetr Application | Charters Business",
    description:
      "Begin your journey with Tetr. Apply now for undergraduate and postgraduate programs with scholarship opportunities up to 100%.",
    type: "website",
    url: "https://chartersbusiness.com/apply",
    images: [
      {
        url: "/images/og-apply.jpg",
        width: 1200,
        height: 630,
        alt: "Charters Business Application - Join Tetr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply Now - Tetr Application",
    description:
      "Begin your Tetr Application and unlock scholarship opportunities up to 100%.",
    images: ["/images/og-apply.jpg"],
  },
  alternates: {
    canonical: "https://chartersbusiness.com/apply",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ApplyPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://chartersbusiness.com" },
    { name: "Apply", url: "https://chartersbusiness.com/apply" },
  ]);

  return (
    <>
      {/* Breadcrumb Schema */}
      {/* Breadcrumb Schema */}
      <script
        id="apply-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <ApplicationHero />
        </Suspense>

        <div className="py-4 mt-4 sm:py-6 sm:mt-6" aria-label="Scholarship information">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 text-black text-center">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                {scholarshipBanner.text}{" "}
                <strong className="font-bold">
                  {scholarshipBanner.highlight}
                </strong>{" "}
                for undergraduate and postgraduate candidates.
              </p>
            </div>
          </div>
        </div>

        <ApplicationProcess />
        <ScholarshipsSection />
      </main>
    </>
  );
}
