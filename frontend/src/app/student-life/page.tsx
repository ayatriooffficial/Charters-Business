import { Metadata } from "next";

import ApplicationHero from "@/components/apply/ApplicationHero";
import ApplicationProcess from "@/components/apply/ApplicationProcess";
import ScholarshipsSection from "@/components/apply/ScholarshipsSection";
import { scholarshipBanner } from "@/data/applyPageData";
import { Suspense } from "react";
import { generateBreadcrumbSchema } from "@/lib/schema";
import SectionWrapper from "@/components/shared/SectionWrapper";
import PlacementStories from "@/components/careers/PlacementStories";
import LifeAtCharters from "@/components/student-life/LifeAtCharters";
import Footer from "@/components/shared/Footer";
import Diversity from "@/components/student-life/Diversity";

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
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://chartersbusiness.com" },
        { name: "Apply", url: "https://chartersbusiness.com/apply" },
    ]);

    return (
        <>
            <script
                id="apply-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <main className="min-h-screen overflow-x-hidden">
                <ApplicationHero />

                <div className="w-full md:border-x border-gray-200 md:mx-auto md:w-[90%] max-w-[95rem]">

                    {/* Scholarship Banner */}
                    <div
                        className="py-4 mt-4 sm:py-6 sm:mt-6 border-b border-gray-200"
                        aria-label="Scholarship information"
                    >
                        <div className="px-4 sm:px-6 lg:px-8">
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black text-center">
                                {scholarshipBanner.text}{" "}
                                <strong className="font-bold">{scholarshipBanner.highlight}</strong>{" "}
                                for undergraduate and postgraduate candidates.
                            </p>
                        </div>
                    </div>

                    <SectionWrapper className="no-top-corners">
                        <Diversity />
                    </SectionWrapper>
                    <SectionWrapper >
                        <LifeAtCharters />
                    </SectionWrapper>
                </div>
            </main>
        </>
    );
}
