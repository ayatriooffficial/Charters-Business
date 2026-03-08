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

type Stat = { value: string; label: string; detail: string; gradient?: string };

const HERO_HEADING = "Accelerate Your Career Growth";
const HERO_TAGLINE =
  "Benefit from an exceptional track record of our graduates' success";

const HERO_STATS: Stat[] = [
  {
    value: "79",
    label: "Startups",
    detail: "formed as part of Masters’ Union Venture Initiation Program",
    gradient: "bg-[#B30437]",
  },
  {
    value: "₹ 3.3 Cr",
    label: "Combined revenue",
    detail: "of all Dropshipping teams in Term 1 (Cohort 2024)",
    gradient: "bg-[#B30437]",
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
  // Generate breadcrumb schema
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
        isPartOf: {
          "@id": "https://chartersbusiness.com/#website",
        },
        about: {
          "@id": "https://chartersbusiness.com/#organization",
        },
        breadcrumb: {
          "@id": "https://chartersbusiness.com/careers#breadcrumb",
        },
        mainEntity: {
          "@id": "https://chartersbusiness.com/careers#career-outcomes",
        },
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
      <Script
        id="careers-schema-graph"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchemaGraph) }}
      />
      <main
        aria-labelledby="careers-hero-title"
        className="bg-white text-gray-900 pt-12"
      >
        <div role="banner" className="w-full border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
            <section className="flex flex-col gap-10 md:flex-row md:items-center">
              <section className="flex flex-1 flex-col justify-center">
                <h1
                  id="careers-hero-title"
                  className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"
                >
                  {HERO_HEADING}
                </h1>

                <p className="mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
                  {HERO_TAGLINE}
                </p>

                <div
                  role="list"
                  aria-label="Key outcomes"
                  className="mt-8 flex w-full flex-col gap-8 md:flex-row md:items-start md:gap-10"
                >
                  {/* stat */}
                  <div
                    role="listitem"
                    className="flex min-w-0 flex-1 items-start gap-4 flex-col"
                  >
                    <p
                      className={[
                        "shrink-0 text-4xl font-extrabold leading-none text-transparent bg-clip-text",
                        HERO_STATS[0].gradient ?? "",
                      ].join(" ")}
                    >
                      {HERO_STATS[0].value}
                    </p>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">
                        {HERO_STATS[0].label} {HERO_STATS[0].detail}
                      </p>
                    </div>
                  </div>

                  <div
                    className="hidden h-16 w-px bg-gray-300 md:block"
                    aria-hidden="true"
                  />
                  <div
                    role="listitem"
                    className="flex min-w-0 flex-1 items-start gap-4 flex-col"
                  >
                    <p
                      className={[
                        "shrink-0 text-4xl font-extrabold leading-none text-transparent bg-clip-text",
                        HERO_STATS[1].gradient ?? "",
                      ].join(" ")}
                    >
                      {HERO_STATS[1].value}
                    </p>
                    <div className="min-w-0 flex-1 md:flex md:flex-wrap md:items-baseline md:gap-x-3 md:gap-y-1">
                      <p className="text-sm font-semibold md:order-1">
                        {HERO_STATS[1].label} {HERO_STATS[1].detail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <Link
                    href={HERO_CTA.href}
                    className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-4 text-sm font-semibold text-gray-900 shadow-sm hover:border-gray-400"
                  >
                    {HERO_CTA.label}
                    <svg
                      className="ml-2 h-4 w-4"
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
              </section>

              <section className="flex flex-1 flex-col justify-center">
                <div className="relative aspect-video w-full overflow-hidden border border-gray-200 bg-gray-100">
                  <Image
                    src={HERO_IMAGE.src}
                    alt={HERO_IMAGE.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </section>
            </section>
          </div>
        </div>

        <section id="next" className="sr-only" aria-hidden="true" />
        <Subnav />
        <StatsSection />
        <PlacementStories />
        <CareerTransitions />
        <CareerAdvisoryTeam />
        <CareerGuidance />
      </main>
    </>
  );
}
