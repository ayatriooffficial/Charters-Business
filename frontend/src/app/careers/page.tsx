import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Subnav from "@/components/careers/Subnav";
import StatsSection from "@/components/careers/StatsSection";
import PlacementStories from "@/components/careers/PlacementStories";
import CareerTransitions from "@/components/careers/CareerTransitions";
import CareerAdvisoryTeam from "@/components/careers/CareerAdvisoryTeam";
import CareerGuidance from "@/components/careers/CareerGuidance";
import { generateBreadcrumbSchema } from "@/lib/schema";
import SectionWrapper from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "Careers | Accelerate Your Career Growth",
  description:
    "Benefit from an exceptional track record of graduates' success with measurable outcomes and expert guidance.",
  keywords: [
    "careers",
    "career growth",
    "placements",
    "outcomes",
    "programs",
    "salary statistics",
  ],
  openGraph: {
    title: "Careers | Accelerate Your Career Growth",
    description:
      "Benefit from an exceptional track record of graduates' success with measurable outcomes and expert guidance.",
    type: "website",
    url: "https://chartersbusiness.com/careers",
    siteName: "Charter's Union",
    images: [
      {
        url: "https://images.mastersunion.link/uploads/26122024/mahakgroup.webp",
        width: 1200,
        height: 630,
        alt: "Fireside chat about career growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Accelerate Your Career Growth",
    description:
      "Benefit from an exceptional track record of graduates' success with measurable outcomes and expert guidance.",
    images: ["https://images.mastersunion.link/uploads/26122024/mahakgroup.webp"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://chartersbusiness.com/careers" },
};

type Stat = { value: string; label: string; detail: string };

const HERO_HEADING = "Accelerate Your Career Growth";
const HERO_TAGLINE =
  "Benefit from an exceptional track record of our graduates' success";

const HERO_STATS: Stat[] = [
  {
    value: "79",
    label: "Startups",
    detail: "formed as part of Masters' Union Venture Initiation Program",
  },
  {
    value: "₹ 3.3 Cr",
    label: "Combined revenue",
    detail: "of all Dropshipping teams in Term 1 (Cohort 2024)",
  },
];

const HERO_CTA = {
  label: "Download Placement Report",
  href: "#download-report",
};

const HERO_IMAGE = {
  src: "https://images.mastersunion.link/uploads/26122024/mahakgroup.webp",
  alt: "Fireside chat about career growth",
};

export default function CareersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://chartersbusiness.com" },
    { name: "Careers", url: "https://chartersbusiness.com/careers" },
  ]);

  const careersSchemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://chartersbusiness.com/careers#webpage",
        url: "https://chartersbusiness.com/careers",
        name: "Careers | Accelerate Your Career Growth",
        description:
          "Benefit from an exceptional track record of graduates' success with measurable outcomes and expert guidance.",
        isPartOf: { "@id": "https://chartersbusiness.com/#website" },
        about: { "@id": "https://chartersbusiness.com/#organization" },
        breadcrumb: { "@id": "https://chartersbusiness.com/careers#breadcrumb" },
        mainEntity: { "@id": "https://chartersbusiness.com/careers#career-outcomes" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://chartersbusiness.com/careers#breadcrumb",
        itemListElement: breadcrumbSchema.itemListElement,
      },
      {
        "@type": "ItemList",
        "@id": "https://chartersbusiness.com/careers#career-outcomes",
        name: "Career Outcomes",
        itemListOrder: "https://schema.org/ItemListUnordered",
        numberOfItems: HERO_STATS.length,
        itemListElement: HERO_STATS.map((stat, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Thing",
            name: `${stat.value} ${stat.label}`.trim(),
            description: stat.detail,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* JSON-LD schema — beforeInteractive so crawlers see it on first parse */}
      <Script
        id="careers-schema-graph"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchemaGraph) }}
      />

      <main
        aria-labelledby="careers-hero-title"
        className="bg-white text-gray-900 pt-[36px] sm:pt-[48px]"
      >
        {/* Hero */}
        <div className="mx-auto max-w-7xl px-4 sm:px-5 py-6 sm:py-10 md:py-14">
          <section className="flex flex-col gap-6 sm:gap-10 md:flex-row md:items-center">

            {/* Left: Text */}
            <div className="flex flex-1 flex-col justify-center">
              <h1
                id="careers-hero-title"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
              >
                {HERO_HEADING}
              </h1>

              <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm text-gray-600 md:text-base">
                {HERO_TAGLINE}
              </p>

              {/* Stats */}
              <div
                role="list"
                aria-label="Key outcomes"
                className="mt-6 sm:mt-8 flex w-full flex-col gap-6 sm:flex-row sm:gap-8 md:gap-10"
              >
                {HERO_STATS.map((stat, index) => (
                  <div key={stat.label} className="contents">
                    <div role="listitem" className="flex flex-1 flex-col gap-2">
                      <p className="text-3xl sm:text-4xl font-extrabold leading-none text-[#B30437]">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold">
                        {stat.label}{" "}
                        <span className="font-normal text-gray-600">
                          {stat.detail}
                        </span>
                      </p>
                    </div>

                    {/* Divider between stats — md+ only, not after last item */}
                    {index < HERO_STATS.length - 1 && (
                      <div
                        className="hidden md:block h-16 w-px bg-gray-300 self-center"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 sm:mt-10">
                <Link
                  href={HERO_CTA.href}
                  className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:border-gray-400"
                >
                  {HERO_CTA.label}
                  <svg
                    className="ml-2 h-4 w-4 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="w-full md:flex-1">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                <Image
                  src={HERO_IMAGE.src}
                  alt={HERO_IMAGE.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-opacity duration-300"
                />
              </div>
            </div>

          </section>
        </div>

        <section id="next" className="sr-only" aria-hidden="true" />
        <Subnav />

        <div className="max-w-[95rem] w-full md:w-[90%] mx-auto md:[box-shadow:inset_1px_0_0_#e5e7eb,inset_-1px_0_0_#e5e7eb]">
          <SectionWrapper className="no-top-corners">
            <StatsSection />
          </SectionWrapper>
          <SectionWrapper>
            <PlacementStories />
          </SectionWrapper>
          <SectionWrapper>
            <CareerTransitions />
          </SectionWrapper>
          <SectionWrapper>
            <CareerAdvisoryTeam />
          </SectionWrapper>
          <SectionWrapper>
            <CareerGuidance />
          </SectionWrapper>
        </div>
      </main>
    </>
  );
}