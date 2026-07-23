import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import Subnav from "@/components/careers/Subnav";
import CareersBelowFoldSections from "@/components/careers/CareersBelowFoldSections";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Careers & Placements | Charters' Union",
  description:
    "Benefit from Charters' Union's exceptional track record of graduates' success with measurable outcomes and expert career guidance.",
  keywords: [
    "careers at Charters Union",
    "placement support",
    "career outcomes",
    "job placements Kolkata",
    "graduate career success",
    "CareerPathx",
  ],
  alternates: {
    canonical: "https://chartersunion.com/careers",
  },
  openGraph: {
    title: "Careers & Placements | Charters' Union",
    description:
      "Benefit from Charters' Union's exceptional track record of graduates' success with measurable outcomes and expert career guidance.",
    url: "https://chartersunion.com/careers",
    siteName: "Charters' Union",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784325608/Young_Charters_are_at_top_company_gncn4o_q7ifkq.avif",
        width: 1200,
        height: 630,
        alt: "Careers & Placements | Charters' Union",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Placements | Charters' Union",
    description:
      "Benefit from Charters' Union's exceptional track record of graduates' success with measurable outcomes and expert career guidance.",
    images: ["https://res.cloudinary.com/ducgcl4dg/image/upload/v1784325608/Young_Charters_are_at_top_company_gncn4o_q7ifkq.avif"],
  },
};

type Stat = { value: string; label: string; detail: string; gradient?: string };


const HERO_STATS: Stat[] = [
  {
    value: "1279",
    label: "Top MNC & Startups",
    detail: "formed as part of Charters' Union CareerPathx Initiation Program",
    gradient: "bg-[#B30437]",
  },
  {
    value: "₹ 1.1 Cr",
    label: "Combined CTC",
    detail: "of all Accountant & Makerting teams in Term 1-2 (Cohort 2024-25)",
    gradient: "bg-[#B30437]",
  },
];

const HERO_CTA = {
  label: "Download Placement Report",
  href: "#download-report",
};
const HERO_IMAGE = {
  src: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784325608/Young_Charters_are_at_top_company_gncn4o_q7ifkq.avif",
  alt: "Fireside chat about career growth",
};

export default function CareersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://chartersunion.com" },
    { name: "Careers", url: "https://chartersunion.com/careers" },
  ]);
  const careersSchemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://chartersunion.com/careers#webpage",
        url: "https://chartersunion.com/careers",
        name: "Careers & Placements | Charters' Union",
        description:
          "Benefit from Charters' Union's exceptional track record of graduates' success with measurable outcomes and expert career guidance.",
        isPartOf: { "@id": "https://chartersunion.com/#website" },
        about: { "@id": "https://chartersunion.com/#organization" },
        breadcrumb: { "@id": "https://chartersunion.com/careers#breadcrumb" },
        mainEntity: { "@id": "https://chartersunion.com/careers#career-outcomes" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://chartersunion.com/careers#breadcrumb",
        itemListElement: breadcrumbSchema.itemListElement,
      },
      {
        "@type": "ItemList",
        "@id": "https://chartersunion.com/careers#career-outcomes",
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
      <script
        id="careers-schema-graph"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchemaGraph) }}
      />
      {/* Hero Banner */}
      <div className="w-full mt-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
          <section className="flex flex-col gap-6 sm:gap-10 md:flex-row md:items-center">

            {/* Left: Text content */}
            <section className="flex flex-1 flex-col justify-center">
              <p className="text-xs sm:text-sm font-semibold text-[#B30437] tracking-wider mb-1 sm:mb-1" role="text">
                1st Week to 1st Job
              </p>
              <h1
                id="careers-hero-title"
                className="text-3xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-black leading-tight"
              >
                CareerPathx™ - Accelerate Your Career Growth
              </h1>

              <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm text-gray-600 md:text-base">
                Exceptional track record of our <strong>AI-Powerd Career-Operating System</strong> that transforms enrolled students in <strong>accounting, digital marketing,</strong> into <strong>100% JOB Guarantee</strong> — through <strong>7 sequential stages in 7 months</strong>.
              </p>

              {/* Stats */}
              <div
                role="list"
                aria-label="Key outcomes"
                className="mt-6 sm:mt-8 flex w-full flex-col gap-6 sm:flex-row sm:gap-8 md:gap-10"
              >
                {/* Stat 1 */}
                <div role="listitem" className="flex flex-1 flex-col gap-2">
                  <p
                    className={[
                      "text-3xl sm:text-4xl font-extrabold leading-none text-transparent bg-clip-text",
                      HERO_STATS[0].gradient ?? "",
                    ].join(" ")}
                  >
                    {HERO_STATS[0].value}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold">
                    {HERO_STATS[0].label}{" "}
                    <span className="font-normal text-gray-600">
                      {HERO_STATS[0].detail}
                    </span>
                  </p>
                </div>

                {/* Divider — visible only on md+ */}
                <div
                  className="hidden md:block h-16 w-px bg-gray-300 self-center"
                  aria-hidden="true"
                />

                {/* Stat 2 */}
                <div role="listitem" className="flex flex-1 flex-col gap-2">
                  <p
                    className={[
                      "text-3xl sm:text-4xl font-extrabold leading-none text-transparent bg-clip-text",
                      HERO_STATS[1].gradient ?? "",
                    ].join(" ")}
                  >
                    {HERO_STATS[1].value}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold">
                    {HERO_STATS[1].label}{" "}
                    <span className="font-normal text-gray-600">
                      {HERO_STATS[1].detail}
                    </span>
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 sm:mt-10">
                <Link
                  href={HERO_CTA.href}
                  className="inline-flex items-center bg-black px-6 sm:px-8 py-3 sm:py-3 text-xs sm:text-sm font-semibold text-white hover:border-gray-400 transition-colors"
                >
                  {HERO_CTA.label}

                </Link>
              </div>
            </section>

            {/* Right: Image */}
            <section className="w-full md:flex-1">
              <div className="relative  w-full ">
                <Image
                  src={HERO_IMAGE.src}
                  alt={HERO_IMAGE.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

              </div>
            </section>

          </section>
        </div>
      </div>

      <section id="next" className="sr-only" aria-hidden="true" />

      <section className="mx-[0%] border-gray-300 bg-white text-black relative">
        {/* Top Strip */}
        <div className="flex flex-row">
          <div className="flex-1 bg-gray-200 h-13 hidden md:block">
            <div className="flex-1 bg-white rounded-br-xl h-13 hidden md:block" />
          </div>
          <div className="hidden md:block md:w-[90%] max-w-[85rem] h-13 bg-gray-200 relative">
            <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-gray-50 to-gray-200" />
            <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-gray-50 to-gray-200" />
            <div className="flex-1 bg-white rounded-bl-xl rounded-br-xl h-13 hidden md:block" />
          </div>
          <div className="flex-1 bg-gray-200 h-13 hidden md:block">
            <div className="flex-1 bg-white rounded-bl-xl h-13 hidden md:block" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-row w-full">
          {/* Left Track */}
          <div className="flex-1 bg-gray-200 hidden md:block">
            <div className="relative bg-white w-full h-full rounded-tr-xl">
              <div className="absolute top-0 -right-[4px] w-[calc(100%+4px)] h-[1px] bg-gradient-to-r from-gray-50 to-gray-200 rounded-tr-xl" />
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-[90%] max-w-[85rem] w-full">
            <div className="w-full border-t border-gray-200" />
            <div className="md:border-x border-gray-200 w-full">
              <div className="bg-gray-200 w-full">
                <div className="w-full bg-white rounded-t-xl relative z-[5]">

                  <Subnav />
                  <CareersBelowFoldSections />

                </div>
              </div>
            </div>
          </div>

          {/* Right Track */}
          <div className="flex-1 bg-gray-200 hidden md:block">
            <div className="relative bg-white w-full h-full rounded-tl-xl">
              <div className="absolute top-0 -left-[4px] w-[calc(100%+4px)] h-[1px] bg-gradient-to-l from-gray-50 to-gray-200 rounded-tr-xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}