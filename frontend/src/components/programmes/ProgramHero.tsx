import Image from 'next/image';
import { HeroData } from '@/data/programmes';
import { ProgrammeAssetConfig } from '@/data/programmes-data/types';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ProgramHeroActions from "./ProgramHeroActions";
import CourseTimer from "./CourseTimer";
import AiSkillsBadge from "./AiSkillsBadge";
import { type ReactNode } from "react";
interface ProgramHeroProps {
  data: HeroData;
  slug: string;
  assets?: ProgrammeAssetConfig;
}

interface FloatingCardProps {
  className: string;
  children: ReactNode;
}

const FloatingCard = ({ className, children }: FloatingCardProps) => (
  <div className={`absolute bg-white p-[2px] sm:p-2 md:p-4 shadow-md border border-gray-100 w-[100px] sm:w-[120px] md:w-[120px] lg:w-[140px] max-w-[140px] min-w-[140px] ${className}`}>
    {children}
  </div>
);


const ProgramHero = ({ data, slug, assets }: ProgramHeroProps) => {

  return (
    <div
      className="mx-[1%] sm:mx-[1.7%] md:mx-[2.7%] relative z-[5] mt-10 bg-white pb-4 sm:pb-6 md:pb-8"
      aria-labelledby="programme-heading"
      role="region"
    >
      <div className="max-w-[85rem] w-full mx-auto">
        <div className="flex flex-col-reverse  xl:flex-row gap-2 lg:gap-4 items-center">
          {/* Left Content Section */}
          <div className="flex-1 space-y-2 w-full">

            <div className="hidden xl:block">
              <Breadcrumbs compact />
            </div>

            <div className="flex pt-[10px] w-full">
              <div className="inline-flex flex-wrap items-center border border-gray-400 rounded-full px-2">
                {data.stats.map((stat, index) => (
                  <div key={index} className="flex items-center">
                    <span className="px-2 py-1 text-[11px] sm:text-sm text-slate-800 font-bold whitespace-nowrap">
                      {stat.label}
                    </span>
                    {index < data.stats.length - 1 && (
                      <span className="h-3.5 w-[1.5px] bg-gray-400 mx-1"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <h1
              id="programme-heading"
              className="text-3xl sm:text-3xl lg:text-4xl xl:text-4xl font-semibold text-black leading-tight"
            >
              {data.title.main}
            </h1>

            <p className="text-sm sm:text-base text-black leading-relaxed line-clamp-3">
              {data.description}
            </p>



            {(data.alumniLabel || assets?.internshipPartnerLogo) && (
              <div className="space-y-2 pt-4">
                {data.alumniLabel && (
                  <div className="text-xs sm:text-sm text-black">{data.alumniLabel}</div>
                )}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <div className="relative object-contain w-full h-[40px] overflow-hidden">
                    {assets?.internshipPartnerLogo && (
                      <Image
                        src={assets.internshipPartnerLogo}
                        alt={`${data.title.main} internship partners`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-contain object-left"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-3">
              <div className="flex items-center gap-3">

                <div className="relative w-[125px] mt-[10px] h-[42px]">
                  {assets?.industrialFacultyLogo && (
                    <Image
                      src={assets.industrialFacultyLogo}
                      alt={`${data.instructors.badge} ${data.instructors.title}`}
                      fill
                      sizes="120px"
                      className="h-[40px] w-[120px] object-contain object-left"
                    />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs sm:text-sm font-semibold text-black">{data.instructors.badge}</p>
                    {data.instructors.aiSkills && (
                      <AiSkillsBadge data={data.instructors.aiSkills} />
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#000000] font-medium">{data.instructors.title}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <ProgramHeroActions actions={data.actions} />

            {/* Enrolled Count & Timer */}
            <div className="flex flex-col gap-1 pt-2">
              {data.enrolledCount && (
                <div className="text-xs sm:text-[14px] text-gray-800">
                  <span className="font-bold text-black">{data.enrolledCount}</span> already enrolled
                </div>
              )}
              <CourseTimer slug={slug} />
            </div>
          </div>

          {/* Right Image Section - UPDATED */}
          <div className="flex-1 w-full">
            <div className="relative w-full">
              {/* Image Container with relative positioning for cards */}
              <div className="relative w-full">
                {/* Mobile breadcrumb shown above the image; desktop keeps the left breadcrumb */}
                <div className="block xl:hidden mb-2">
                  <Breadcrumbs compact />
                </div>

                {data.heroImage && (
                  <Image
                    src={data.heroImage.startsWith("http") || data.heroImage.startsWith("/") ? data.heroImage : `/${data.heroImage}`}
                    alt={`${data.title.main} programme`}
                    width={600}
                    height={400}
                    className="object-cover w-full"
                    priority
                  />
                )}

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProgramHero;
