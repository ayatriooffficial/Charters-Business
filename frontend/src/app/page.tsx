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
import PlacementReport from "@/components/home/PlacementReport";
import OurProgrammesSection from "@/components/home/OurProgrammesSection";
import BuiltByHarvard from "@/components/home/BuiltByHarvard";

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

// Below-the-fold interactive components — keep lazy loaded
const HandsOn = dynamic(
  () => import("@/components/home/Handson"),
  { loading: () => <SectionSkeleton height="h-64" /> }
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
const FirstStepSuccessComponent = dynamic(
  () => import("@/components/home/FirstStepSuccessComponent"),
  { loading: () => <SectionSkeleton /> }
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

  // Combine all JSON-LD schemas into one script tag
  const allSchemas = [
    organizationSchema,
    websiteSchema,
    homePageSchema,
    siteNavigationSchema,
    localBusinessSchema,
  ];

  return (
    <>
      {/* SEO - JSON-LD Structured Data (combined into single script) */}
      <Script
        id="all-schemas"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
      />

      <ChartersUnionHero />

      {/* Statically imported — renders in initial HTML stream */}
      <PlacementReport />

      <div className="md:border-x border-gray-200 max-w-[85rem] w-full md:w-[90%] mx-auto overflow-x-clip md:overflow-x-visible">
        <SectionWrapper hideCorners={"all"} borderBottom={false}>
          <HandsOn />
        </SectionWrapper>
        <SectionWrapper hideCorners={"all"}>
          <OurProgrammesSection />
        </SectionWrapper>
        <SectionWrapper corners={{
          br: { variant: "icon" }
        }} hideCorners={["tr", "bl"]} borderBottom={false}>
          <BuiltByHarvard />
        </SectionWrapper>
        <SectionWrapper hideCorners={"all"}>
          <HandsOnLearningComponent />
        </SectionWrapper>
        <SectionWrapper hideCorners={"all"}>
          <FacultyModel />
          <OneSpaceForEveryTeam />
        </SectionWrapper>
        <SectionWrapper hideCorners={"all"}>
          <WorldImmersion />
        </SectionWrapper>
        <SectionWrapper hideCorners={"all"}>
          <StudentModel />
          <StrategicExpansion />
        </SectionWrapper>
        <SectionWrapper hideCorners={"all"}>
          <FirstStepSuccessComponent />
        </SectionWrapper>
        <SectionWrapper hideCorners={"all"}>
          <NewsSliderComponent />
        </SectionWrapper>
        <SectionWrapper hideCorners={"all"}>
          <PremiumFeaturesSection />
        </SectionWrapper>
      </div>
    </>
  );
}