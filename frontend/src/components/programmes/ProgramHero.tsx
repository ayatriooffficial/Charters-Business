'use client';

import Image from 'next/image';
import { HeroData } from '@/data/programmes';
import Link from 'next/link';

interface ProgramHeroProps {
  data: HeroData;
  programmeSlug: string;
}

const ProgramHero = ({ data, programmeSlug }: ProgramHeroProps) => {
  return (
    <div
      className="mx-[1%] sm:mx-[2%] md:mx-[3%] relative z-[5] mt-5 md:mt-10 bg-white pb-4 sm:pb-6 md:pb-8"
      aria-labelledby="programme-heading"
      role="region"
    >
      <div className="max-w-[85rem] w-full mx-auto">
        <div className="flex flex-col-reverse xl:flex-row gap-8 lg:gap-12 items-center">

          {/* Left Content Section */}
          <div className="flex-1 space-y-4 w-full">
            <p className="animate-reveal text-sm font-semibold text-[#B30437] tracking-wider mb-3" style={{ animationDelay: '0.1s' }}>
              {data.categoryLabel}
            </p>

            <h2
              id="programme-heading"
              className="animate-reveal text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-black leading-tight"
              style={{ animationDelay: '0.2s' }}
            >
              {data.title.main}{' '}
              <span className="italic font-serif text-[#B30437]">{data.title.highlight}</span>{' '}
              {data.title.suffix}
            </h2>

            <p className="animate-reveal text-sm sm:text-base text-black leading-relaxed line-clamp-2" style={{ animationDelay: '0.3s' }}>
              {data.description}
            </p>

            {/* Stats Grid - Restored */}
            <div className="animate-reveal flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-black" style={{ animationDelay: '0.4s' }}>
              {data.stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="sr-only">{stat.label}:</span>
                  <span className="font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Alumni Companies - Restored */}
            <div className="animate-reveal space-y-3 pt-4" style={{ animationDelay: '0.5s' }}>
              <div className="text-xs sm:text-sm text-black">Find our Alumni at -</div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {data.alumniCompanies.map((company, index) => (
                  <div key={index} className="flex items-center gap-2 transition-transform hover:scale-110">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B30437] rounded flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-white font-bold text-xs sm:text-sm">{company.name.slice(0, 4)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructors/Badge Section - Restored */}
            <div className="animate-reveal space-y-3" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-black">{data.instructors.badge}</p>
                  <p className="text-xs sm:text-sm text-[#B30437] font-medium">{data.instructors.title}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Responsive scaling */}
            <div className="animate-reveal flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8" style={{ animationDelay: '0.7s' }}>
              <Link
                href={`/apply?type=application&programme=${programmeSlug}`}
                className="flex items-center justify-center gap-2 bg-[#B30437] hover:bg-[#8B0329] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex-shrink-0"
              >
                <span>Apply Now</span>
              </Link>
              <Link
                href={`/apply?type=counseling&programme=${programmeSlug}`}
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#B30437] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border-2 border-[#B30437] text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex-shrink-0"
              >
                <span>Book Counseling</span>
              </Link>
            </div>
          </div>

          {/* Right Image Section - Restored all floating data */}
          <div className="flex-1 w-full animate-reveal" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={data.heroImage}
                  alt="Programme"
                  width={600}
                  height={400}
                  className="object-cover w-full transition-transform duration-1000 hover:scale-103"
                  priority
                />


              </div>
                {/* Top Right Card - Restored Students/Rating */}
                <div className="hover-float-top absolute -top-1 sm:-top-2 md:-top-4 -right-1 sm:-right-2 md:-right-4 bg-white p-[6px] sm:p-2 md:p-4 shadow-xl border border-gray-100 w-[15vw] sm:w-[12vw] md:w-[10vw] lg:w-[180px] max-w-[180px] min-w-[70px] rounded-lg z-10">
                  <div className="space-y-[2px] sm:space-y-1 md:space-y-2">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#B30437] rounded-full flex-shrink-0 animate-pulse"></div>
                      <span className="text-[6px] sm:text-[9px] md:text-xs font-medium text-black line-clamp-1">{data.floatingCards.topRight.badge}</span>
                    </div>
                    <div className="text-[9px] sm:text-sm md:text-base lg:text-xl font-bold text-black leading-tight">{data.floatingCards.topRight.students}</div>
                    <div className="text-[5px] sm:text-[8px] md:text-[10px] text-gray-500 line-clamp-1">Students</div>
                    <div className="flex items-center gap-[2px]">
                      <div className="flex text-yellow-400 text-[5px] sm:text-[8px] md:text-[10px]">★★★★★</div>
                      <span className="text-[5px] sm:text-[8px] md:text-[10px] text-black">{data.floatingCards.topRight.rating}/5</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Left Card - Restored CTC/Percentage */}
                <div className="hover-float-bottom absolute -bottom-1 sm:-bottom-2 md:-bottom-6 -left-1 sm:-left-2 md:-left-4 bg-white p-[6px] sm:p-2 md:p-4 shadow-xl border border-gray-100 w-[15vw] sm:w-[12vw] md:w-[10vw] lg:w-[170px] max-w-[170px] min-w-[65px] rounded-lg z-10">
                  <div className="space-y-0 sm:space-y-1 md:space-y-2">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-[#B30437] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[6px] sm:text-[8px] md:text-[10px]">📊</span>
                      </div>
                      <span className="text-[6px] sm:text-[9px] md:text-xs font-medium text-black line-clamp-1">{data.floatingCards.bottomLeft.label}</span>
                    </div>
                    <div className="text-[9px] sm:text-base md:text-xl lg:text-2xl font-bold text-[#B30437] leading-tight">{data.floatingCards.bottomLeft.percentage}</div>
                    <div className="text-[5px] sm:text-[8px] md:text-[10px] text-gray-500 line-clamp-1">{data.floatingCards.bottomLeft.subLabel}</div>
                    <div className="bg-red-50 text-[#B30437] px-1 sm:px-1.5 py-0.5 rounded text-[5px] sm:text-[8px] md:text-[10px] font-bold inline-block border border-red-100">
                      {data.floatingCards.bottomLeft.ctcIncrease}
                    </div>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProgramHero;
