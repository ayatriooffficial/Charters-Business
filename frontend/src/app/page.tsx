import dynamic from "next/dynamic";
import Script from "next/script";
import {
  generateLocalBusinessSchema,
  generateSiteNavigationSchema,
  homePageSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { Metadata } from "next";
import ChartersUnionHero from "@/components/home/ChartersUnionHero";
import SectionWrapper from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: {
    absolute: "Professional training kolkata with paid internship | Charter's Union",
  },
  description:
    "Learn Professional Accounting in Kolkata with 3-month foundation + 4-month paid internship. Work with top companies from USA, Canada, Qatar, Singapore, Australia & UK. Join now!",
  openGraph: {
    title: "Professional training kolkata with paid internship | Charter'sUnion",
    description:
      "Learn Professional Accounting in Kolkata with 3-month foundation + 4-month paid internship. Work with top companies from USA, Canada, Qatar, Singapore, Australia & UK. Join now!",
  },
};

const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} w-full animate-pulse bg-gray-50 rounded`} />
);

const PlacementReport = dynamic(
  () => import("@/components/home/PlacementReport"),
  { loading: () => <SectionSkeleton /> }
);
const HandsOn = dynamic(
  () => import("@/components/home/Handson"),
  { loading: () => <SectionSkeleton height="h-64" /> }
);
const OurProgrammesSection = dynamic(
  () => import("@/components/home/OurProgrammesSection"),
  { loading: () => <SectionSkeleton height="h-80" /> }
);
const BuiltByHarvard = dynamic(
  () => import("@/components/home/BuiltByHarvard"),
  { loading: () => <SectionSkeleton height="h-72" /> }
);
const HandsOnLearningComponent = dynamic(
  () => import("@/components/home/HandsOnLearningComponent"),
  { loading: () => <SectionSkeleton /> }
);
const FacultyModel = dynamic(
  () => import("@/components/home/FacultyModel"),
  { loading: () => <SectionSkeleton height="h-80" /> }
);
const OneSpaceForEveryTeam = dynamic(
  () => import("@/components/home/OneSpaceForEveryTeam"),
  { loading: () => <SectionSkeleton height="h-64" /> }
);
const WorldImmersion = dynamic(
  () => import("@/components/home/WorldImmersion"),
  { loading: () => <SectionSkeleton /> }
);
const StudentModel = dynamic(
  () => import("@/components/home/StudentModel"),
  { loading: () => <SectionSkeleton height="h-80" /> }
);
const StrategicExpansion = dynamic(
  () => import("@/components/home/StrategicExpansion"),
  { loading: () => <SectionSkeleton /> }
);
const TrustedCompanies = dynamic(
  () => import("@/components/home/TrustedCompanies"),
  { loading: () => <SectionSkeleton height="h-64" /> }
);
const FirstStepSuccessComponent = dynamic(
  () => import("@/components/home/FirstStepSuccessComponent"),
  { loading: () => <SectionSkeleton /> }
);
const LearningOutcomes = dynamic(
  () => import("@/components/home/LearningOutcomes"),
  { loading: () => <SectionSkeleton height="h-72" /> }
);
const NewsSliderComponent = dynamic(
  () => import("@/components/NewsSliderComponent"),
  { loading: () => <SectionSkeleton height="h-80" /> }
);
const PremiumFeaturesSection = dynamic(
  () => import("@/components/home/PremiumFeaturesSection"),
  { loading: () => <SectionSkeleton height="h-64" /> }
);

export default function Home() {
  const siteNavigationSchema = generateSiteNavigationSchema([
    {
      name: "Home",
      url: "https://chartersbusiness.com/",
      description: "Professional Accountant Training in Kolkata with 100% Paid Internship",
    },
    {
      name: "Programmes",
      url: "https://chartersbusiness.com/#programmes",
      description: "Explore our professional accounting programmes",
    },
    {
      name: "Faculties",
      url: "https://chartersbusiness.com/faculties",
      description: "Meet our expert faculty members",
    },
    {
      name: "Careers",
      url: "https://chartersbusiness.com/careers",
      description: "Career opportunities at Charters Business",
    },
    {
      name: "About",
      url: "https://chartersbusiness.com/#about",
      description: "Learn more about Charters Business",
    },
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    name: "Charters Business",
    address: {
      street: "DLF Cyberpark, Phase II, Udyog Vihar, Sector 20",
      city: "Gurugram",
      state: "Haryana",
      postalCode: "122022",
      country: "IN",
    },
  });

  return (
    <>
      {/* SEO - JSON-LD Structured Data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Script
        id="site-navigation-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <style>{`
  .section-corners {
    position: relative;
  }
  .section-corners::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: 25px;
    height: 25px;
    border-top: 2px solid #ccc;
    border-left: 2px solid #ccc;
    z-index: 10;
  }
  .section-corners::after {
    content: "";
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 25px;
    height: 25px;
    border-bottom: 2px solid #ccc;
    border-right: 2px solid #ccc;
    z-index: 10;
  }
  .section-corners span.corner::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -2px;
    width: 25px;
    height: 25px;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    z-index: 10;
  }
  .section-corners span.corner::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: -2px;
    width: 25px;
    height: 25px;
    border-bottom: 2px solid #ccc;
    border-left: 2px solid #ccc;
    z-index: 10;
  }

  /* Full bleed background */
  .full-bleed {
  position: relative;
  }
  .full-bleed::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    background: inherit;
    z-index: 0;
    pointer-events: none;
  }
`}</style>

      <ChartersUnionHero />

      <PlacementReport />
      <div className="border-x md:mx-[5%] border-gray-200 max-w-[85rem] mx-auto">
        {/* <SectionWrapper> */}

        {/* </SectionWrapper> */}
        <SectionWrapper>
          <HandsOn />
        </SectionWrapper>
        <SectionWrapper>
          <OurProgrammesSection />
        </SectionWrapper>
        <SectionWrapper fullWidthBg>
          <BuiltByHarvard />
        </SectionWrapper>
        <SectionWrapper>
          <HandsOnLearningComponent />
        </SectionWrapper>
        <SectionWrapper>
          <FacultyModel />
        </SectionWrapper>
        <SectionWrapper>
          <OneSpaceForEveryTeam />
        </SectionWrapper>
        <SectionWrapper>
          <WorldImmersion />
        </SectionWrapper>
        <SectionWrapper>
          <StudentModel />
        </SectionWrapper>
        <SectionWrapper>
          <StrategicExpansion />
        </SectionWrapper>
        <SectionWrapper>
          <TrustedCompanies />
        </SectionWrapper>
        <SectionWrapper>
          <FirstStepSuccessComponent />
        </SectionWrapper>
        <SectionWrapper>
          <LearningOutcomes />
        </SectionWrapper>
        <SectionWrapper>
          <NewsSliderComponent />
        </SectionWrapper>
        <SectionWrapper>
          <PremiumFeaturesSection />
        </SectionWrapper>
      </div>
    </>
  );
}