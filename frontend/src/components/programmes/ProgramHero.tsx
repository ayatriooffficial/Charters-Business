import Image from 'next/image';
import { HeroData } from '@/data/programmes';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ProgramHeroActions from "./ProgramHeroActions";
import CourseTimer from "./CourseTimer";
import { type ReactNode } from "react";
interface ProgramHeroProps {
  data: HeroData;
  slug: string;
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

const PILL_THEMES = [
  { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700" },
  { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700" },
  { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700" },
  { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700" },
  { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700" },
  { bg: "bg-teal-50", border: "border-teal-200", text: "text-teal-700" },
];

const ProgramHero = ({ data, slug }: ProgramHeroProps) => {

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

            <div className="flex flex-wrap pt-[10px] items-center gap-2.5 sm:gap-3">
              {data.stats.map((stat, index) => {
                const theme = PILL_THEMES[index % PILL_THEMES.length];
                return (
                  <div
                    key={index}
                    className={`flex items-center ${theme.bg} border ${theme.border} rounded-full px-4 py-1 text-xs sm:text-sm ${theme.text} font-semibold`}
                  >
                    <span className="sr-only">{stat.label}:</span>
                    <span>{stat.label}</span>
                  </div>
                );
              })}
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



            <div className="space-y-3 pt-3">
              <div className="text-xs sm:text-sm text-black">Find our student at -</div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="relative object-contain w-full h-[40px] overflow-hidden">
                  <Image
                    src="/charter-partner/certified_business_accountant_internship_partner.avif"
                    alt="Charter intrenshiph company around the world"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">

                <div className="relative w-[110px] mt-[10px] h-[45px]">
                  <Image
                    src="/images/programmes/industrial_faculty.avif"
                    alt="Charter intrenshiph company around the world"
                    fill
                    className="h-[50px] w-[110px] object-contain object-left"
                  />
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-semibold text-black">{data.instructors.badge}</p>
                  <p className="text-xs sm:text-sm text-[#B30437] font-medium">{data.instructors.title}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <ProgramHeroActions />

            {/* Countdown Timer */}
            <CourseTimer slug={slug} />
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

                <Image
                  src="/images/certified-business-accountant-student-sunitha-raj-got-jobs.png"
                  alt={`${data.title.main} programme`}
                  width={600}
                  height={400}
                  className="object-cover w-full"
                  priority
                />

                {/* Floating Card - Top Right */}
                <FloatingCard className="top-36 -right-1 sm:-right-2 md:-right-2">
                  <div className="space-y-[1px] sm:space-y-1 md:space-y-2">
                    <div className="flex items-center gap-[2px] sm:gap-1">
                      <span className="text-[6px] sm:text-[9px] md:text-xs font-medium text-black line-clamp-1">{data.floatingCards.topRight.name}</span>
                    </div>
                    <div className="text-[9px] sm:text-sm md:text-base font-bold text-black leading-tight">{data.floatingCards.topRight.students}</div>
                    <div className="text-[5px] sm:text-[8px] md:text-[10px] text-black line-clamp-1">Sanskar Jaiswal</div>
                    <div className="flex items-center gap-[2px]">
                      <div className="flex text-yellow-400 text-[5px] sm:text-[8px] md:text-[10px]">★★★★★</div>
                      <span className="text-[5px] sm:text-[8px] md:text-[10px] text-black">{data.floatingCards.topRight.rating}/5</span>
                    </div>
                  </div>
                </FloatingCard>

                {/* Floating Card - Bottom Left */}
                <FloatingCard className="-bottom-1 sm:-bottom-2 md:-bottom-6 -left-1 sm:-left-2 md:-left-4">
                  <div className="space-y-0 sm:space-y-1 md:space-y-2">
                    <div className="flex items-center gap-[2px] sm:gap-1">
                      <span className="text-[6px] sm:text-[9px] md:text-xs font-medium text-black line-clamp-1">{data.floatingCards.bottomLeft.label}</span>
                    </div>
                    <div className="text-[9px] sm:text-base md:text-xl font-bold text-[#B30437] leading-tight">{data.floatingCards.bottomLeft.percentage}</div>
                    <div className="text-[5px] sm:text-[8px] md:text-[10px] text-black line-clamp-1">{data.floatingCards.bottomLeft.subLabel}</div>
                    <div className="bg-red-100 text-[#B30437] px-[2px] sm:px-1.5 py-[1px] sm:py-0.5 rounded text-[5px] sm:text-[8px] md:text-[10px] font-medium inline-block">
                      {data.floatingCards.bottomLeft.ctcIncrease}
                    </div>
                  </div>
                </FloatingCard>


              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProgramHero;
