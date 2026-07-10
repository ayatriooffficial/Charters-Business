"use client";

import dynamic from "next/dynamic";
import LazyMount from "@/components/shared/LazyMount";

// SectionSkeleton placeholder — mirrored from page.tsx
const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} w-full animate-pulse bg-gray-50 rounded`} />
);

// All below-fold components that need ssr:false must live in a Client Component
const HandsOn = dynamic(
  () => import("@/components/home/Handson"),
  { ssr: false, loading: () => <SectionSkeleton height="h-64" /> }
);
const HandsOnLearningComponent = dynamic(
  () => import("@/components/home/HandsOnLearningComponent"),
  { ssr: false, loading: () => <SectionSkeleton /> }
);
const FacultyModel = dynamic(
  () => import("@/components/home/FacultyModel"),
  { ssr: false, loading: () => <SectionSkeleton height="h-80" /> }
);
const OneSpaceForEveryTeam = dynamic(
  () => import("@/components/home/OneSpaceForEveryTeam"),
  { ssr: false, loading: () => <SectionSkeleton height="h-64" /> }
);
const WorldImmersion = dynamic(
  () => import("@/components/home/WorldImmersion"),
  { ssr: false, loading: () => <SectionSkeleton /> }
);
const StudentModel = dynamic(
  () => import("@/components/home/StudentModel"),
  { ssr: false, loading: () => <SectionSkeleton height="h-80" /> }
);
const StrategicExpansion = dynamic(
  () => import("@/components/home/StrategicExpansion"),
  { ssr: false, loading: () => <SectionSkeleton /> }
);
const FirstStepSuccessComponent = dynamic(
  () => import("@/components/home/FirstStepSuccessComponent"),
  { ssr: false, loading: () => <SectionSkeleton /> }
);
const NewsSliderComponent = dynamic(
  () => import("@/components/NewsSliderComponent"),
  { ssr: false, loading: () => <SectionSkeleton height="h-80" /> }
);
const OurProgrammesSection = dynamic(
  () => import("@/components/home/OurProgrammesSection"),
  { ssr: false }
);
const BuiltByHarvard = dynamic(
  () => import("@/components/home/BuiltByHarvard"),
  { ssr: false }
);
const HomeBottomCardsCarousel = dynamic(
  () => import("@/components/home/HomeBottomCardsCarousel"),
  { ssr: false }
);

import SectionWrapper from "@/components/shared/SectionWrapper";

export default function BelowFoldSections() {
  return (
    <>
      <LazyMount fallback={<SectionSkeleton height="h-64" />}>
        <SectionWrapper hideCorners={"all"} borderBottom={false}>
          <HandsOn />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <OurProgrammesSection />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper corners={{ br: { variant: "icon" } }} hideCorners={["tr", "bl"]} borderBottom={false}>
          <BuiltByHarvard />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <HandsOnLearningComponent />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton height="h-80" />}>
        <SectionWrapper hideCorners={"all"}>
          <FacultyModel />
          <OneSpaceForEveryTeam />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <WorldImmersion />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton height="h-80" />}>
        <SectionWrapper hideCorners={"all"}>
          <StudentModel />
          <StrategicExpansion />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <FirstStepSuccessComponent />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton height="h-80" />}>
        <SectionWrapper hideCorners={"all"}>
          <NewsSliderComponent />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <HomeBottomCardsCarousel />
      </LazyMount>
    </>
  );
}
