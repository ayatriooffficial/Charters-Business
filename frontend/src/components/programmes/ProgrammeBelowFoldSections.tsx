"use client";

import dynamic from "next/dynamic";
import LazyMount from "@/components/shared/LazyMount";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Programme } from "@/data/programmes-data/types";

const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} w-full animate-pulse bg-gray-50 rounded`} />
);

const TrackRecord = dynamic(() => import("@/components/programmes/TrackRecord"), { ssr: false, loading: () => <SectionSkeleton /> });
const CurriculumSection = dynamic(() => import("@/components/programmes/CurriculumSection"), { ssr: false, loading: () => <SectionSkeleton /> });
const AIDegreeProgram = dynamic(() => import("@/components/programmes/AIDegreeProgram"), { ssr: false, loading: () => <SectionSkeleton /> });
const WeekAtTetr = dynamic(() => import("@/components/programmes/WeekAtUnion"), { ssr: false, loading: () => <SectionSkeleton /> });
const FacultyModel = dynamic(() => import("@/components/home/FacultyModel"), { ssr: false, loading: () => <SectionSkeleton height="h-80" /> });
const LearnApplyReflectRepeat = dynamic(() => import("@/components/programmes/LearnApplyReflectRepeat"), { ssr: false, loading: () => <SectionSkeleton /> });
const StudentModel = dynamic(() => import("@/components/home/StudentModel"), { ssr: false, loading: () => <SectionSkeleton height="h-80" /> });
const LearningOutcomes = dynamic(() => import("@/components/home/LearningOutcomes"), { ssr: false, loading: () => <SectionSkeleton /> });
const PricingTabs = dynamic(() => import("@/components/programmes/PricingTabs"), { ssr: false, loading: () => <SectionSkeleton /> });
const ScholarshipsSection = dynamic(() => import("@/components/programmes/ScholarshipsSection"), { ssr: false, loading: () => <SectionSkeleton /> });
const FAQ = dynamic(() => import("@/components/programmes/FAQ"), { ssr: false, loading: () => <SectionSkeleton /> });
const MicaDigitalMarketingCertificate = dynamic(() => import("@/components/programmes/MicaDigitalMarketingCertificate"), { ssr: false, loading: () => <SectionSkeleton /> });

export default function ProgrammeBelowFoldSections({ programme }: { programme: Programme }) {
  return (
    <div className="md:border-x border-gray-200 max-w-[85rem] w-full md:w-[90%] mx-auto overflow-x-clip">
      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <TrackRecord data={programme.trackRecord} assets={programme.assets} />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <CurriculumSection data={programme.curriculumSection} assets={programme.assets} slug={programme.slug} />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <AIDegreeProgram data={programme.degreeProgram} assets={programme.assets} />
        </SectionWrapper>
      </LazyMount>

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

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <PricingTabs data={programme.pricing} assets={programme.assets} />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <ScholarshipsSection scholarships={programme.scholarships} />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <FAQ data={programme.faq} />
        </SectionWrapper>
      </LazyMount>

      <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"} borderBottom={false}>
          <MicaDigitalMarketingCertificate />
        </SectionWrapper>
      </LazyMount>
    </div>
  );
}
