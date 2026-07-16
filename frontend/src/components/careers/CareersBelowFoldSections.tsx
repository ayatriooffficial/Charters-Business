"use client";

import dynamic from "next/dynamic";
import LazyMount from "@/components/shared/LazyMount";
import SectionWrapper from "@/components/shared/SectionWrapper";

const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} w-full animate-pulse bg-gray-50 rounded`} />
);

const StatsSection = dynamic(() => import("@/components/careers/StatsSection"), { ssr: false, loading: () => <SectionSkeleton /> });
const PlacementStories = dynamic(() => import("@/components/careers/PlacementStories"), { ssr: false, loading: () => <SectionSkeleton /> });
const CareerTransitions = dynamic(() => import("@/components/careers/CareerTransitions"), { ssr: false, loading: () => <SectionSkeleton /> });
const CareerAdvisoryTeam = dynamic(() => import("@/components/careers/CareerAdvisoryTeam"), { ssr: false, loading: () => <SectionSkeleton /> });
const CareerGuidance = dynamic(() => import("@/components/careers/CareerGuidance"), { ssr: false, loading: () => <SectionSkeleton /> });

export default function CareersBelowFoldSections() {
  return (
    <>
      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <StatsSection />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <PlacementStories />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <CareerTransitions />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"} borderBottom={false}>
          <CareerAdvisoryTeam />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <CareerGuidance />
        </SectionWrapper>
      </LazyMount>
    </>
  );
}
