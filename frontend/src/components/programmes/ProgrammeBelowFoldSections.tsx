"use client";

import dynamic from "next/dynamic";
import LazyMount from "@/components/shared/LazyMount";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Programme } from "@/data/programmes-data/types";

const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} w-full animate-pulse bg-gray-50 rounded`} />
);

import TrackRecord from "@/components/programmes/TrackRecord";
import CurriculumSection from "@/components/programmes/CurriculumSection";
import AIDegreeProgram from "@/components/programmes/AIDegreeProgram";
const WeekAtTetr = dynamic(() => import("@/components/programmes/WeekAtUnion"), { ssr: false, loading: () => <SectionSkeleton /> });
const FacultyModel = dynamic(() => import("@/components/home/FacultyModel"), { ssr: false, loading: () => <SectionSkeleton height="h-80" /> });
const LearnApplyReflectRepeat = dynamic(() => import("@/components/programmes/LearnApplyReflectRepeat"), { ssr: false, loading: () => <SectionSkeleton /> });
const StudentModel = dynamic(() => import("@/components/home/StudentModel"), { ssr: false, loading: () => <SectionSkeleton height="h-80" /> });
const LearningOutcomes = dynamic(() => import("@/components/home/LearningOutcomes"), { ssr: false, loading: () => <SectionSkeleton /> });
const PricingTabs = dynamic(() => import("@/components/programmes/PricingTabs"), { ssr: false, loading: () => <SectionSkeleton /> });
const FAQ = dynamic(() => import("@/components/programmes/FAQ"), { ssr: false, loading: () => <SectionSkeleton /> });
const CertificateOverview = dynamic(() => import("@/components/programmes/CertificateOverview"), { ssr: false, loading: () => <SectionSkeleton /> });

import LayoutBanner from "@/components/shared/LayoutBanner";

export default function ProgrammeBelowFoldSections({ programme }: { programme: Programme }) {
  return (
    <div className="md:border-x border-gray-200 max-w-[85rem] w-full md:w-[90%] mx-auto overflow-x-clip">
      <SectionWrapper hideCorners={"all"}>
        <TrackRecord data={programme.trackRecord} assets={programme.assets} />
      </SectionWrapper>

      {/* Banner 1: Placement Report */}
      <SectionWrapper hideCorners={"all"}>
        <LayoutBanner type="placement" />
      </SectionWrapper>

      <SectionWrapper hideCorners={"all"}>
        <CurriculumSection data={programme.curriculumSection} assets={programme.assets} slug={programme.slug} />
      </SectionWrapper>

      <SectionWrapper hideCorners={"all"}>
        <AIDegreeProgram data={programme.degreeProgram} assets={programme.assets} />
      </SectionWrapper>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <WeekAtTetr data={programme.weekAtUnion} assets={programme.assets} />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton height="h-80" />}>
        <SectionWrapper hideCorners={"all"} borderBottom={false}>
          <FacultyModel data={programme.faculty} />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"} borderBottom={false}>
          <LearnApplyReflectRepeat data={programme.learnApply} />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton height="h-80" />}>
        <SectionWrapper hideCorners={"all"} borderBottom={false}>
          <StudentModel data={programme.students} />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <LearningOutcomes data={programme.learningOutcomes} />
        </SectionWrapper>
      </LazyMount>

      {/* Banner 2: Brochure */}
      <LazyMount fallback={<SectionSkeleton height="h-32" />}>
        <SectionWrapper hideCorners={"all"}>
          <LayoutBanner type="brochure" />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <PricingTabs 
            data={programme.pricing} 
            assets={programme.assets} 
            scholarships={programme.scholarships}
            scholarshipConfig={programme.scholarshipConfig}
          />
        </SectionWrapper>
      </LazyMount>

      {/* Banner 3: Advisor */}
      <LazyMount fallback={<SectionSkeleton height="h-32" />}>
        <SectionWrapper hideCorners={"all"}>
          <LayoutBanner type="advisor" />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"} borderBottom={false}>
          <FAQ data={programme.faq} />
        </SectionWrapper>
      </LazyMount>

      {programme.certificateOverviewData && (
        <LazyMount fallback={<SectionSkeleton />}>
          <SectionWrapper hideCorners={"all"}>
            <CertificateOverview data={programme.certificateOverviewData} />
          </SectionWrapper>
        </LazyMount>
      )}



      
    </div>
  );
}
