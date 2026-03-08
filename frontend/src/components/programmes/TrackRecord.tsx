"use client";

import React from "react";
import { TrackRecordData } from "@/data/programmes";

interface TrackRecordProps {
  data: TrackRecordData;
}

const TrackRecord: React.FC<TrackRecordProps> = ({ data }) => {
  return (
    <div className="mx-[0%] md:mx-[5%] bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 ">
        {/* Track Record Header */}
        <div className="mb-8 sm:mb-12" aria-labelledby="track-record-heading">
          <div className="text-center mb-12">
            <h2
              id="track-record-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black mb-8"
            >
              A Proven{" "}
              <span className="text-green-600 font-medium relative">
                track record
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600"></span>
              </span>
            </h2>
          </div>

          {/* Stats Grid - Responsive Flex */}
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-8 lg:gap-10 pt-5 pb-4">
            {data.stats.map((stat, index) => (
              <div key={index} className="text-center flex-shrink-0">
                <div className="text-xl sm:text-2xl lg:text-5xl font-light text-black mb-2">
                  {stat.value}
                  <span className="text-xl sm:text-2xl lg:text-4xl">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Diversity Charts Section - Responsive Flex */}
        <div className="mb-8 sm:mb-12" aria-labelledby="diversity-heading">
          <h3 id="diversity-heading" className="sr-only">
            Student Diversity Statistics
          </h3>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
            {/* Work Experience Chart */}
            <div className="w-full lg:flex-[1.2] flex flex-col justify-between">
              <div className="w-full">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#5f6368] mb-6 text-left">
                  Our Young Charter's around the world
                </h3>
                <div className="h-32 sm:h-40 lg:h-48 flex items-end justify-between gap-2 sm:gap-3 md:gap-4">
                  {data.experienceData.map((item, index) => {
                    const maxValue = Math.max(
                      ...data.experienceData.map((d) => d.value),
                    );
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-end flex-1 h-full min-w-0"
                      >
                        <div className="text-xs sm:text-sm md:text-base font-semibold text-black mb-2">
                          {item.percentage}
                        </div>
                        <div
                          className="w-full bg-[#C4A574] transition-all duration-300"
                          style={{
                            height: `${(item.value / maxValue) * 100}%`,
                          }}
                        />
                        <div className="text-[9px] sm:text-xs md:text-sm text-[#5f6368] mt-2 sm:mt-3 text-center font-medium leading-tight min-w-[56px]">
                          {item.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Background Distribution Chart */}
            <div className="w-full lg:flex-[2.8] flex flex-col justify-between">
              <div className="w-full">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#5f6368] mb-6 text-left">
                  Young Charter's jobs various sectors
                </h3>
                {/* Mobile: Horizontal bars */}
                <div className="lg:hidden flex flex-col gap-3 sm:gap-4">
                  {data.backgroundData.map((item, index) => {
                    const maxValue = Math.max(
                      ...data.backgroundData.map((d) => d.value),
                    );
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 sm:gap-3"
                      >
                        <div className="text-[10px] sm:text-xs text-gray-800 font-medium w-[90px] sm:w-[110px] flex-shrink-0">
                          {item.label}
                        </div>
                        <div className="flex-1 flex items-center gap-2 sm:gap-3">
                          <div
                            className="h-6 sm:h-8 bg-[#C4A574] transition-all duration-300"
                            style={{
                              width: `${(item.value / maxValue) * 100}%`,
                            }}
                          />
                          <div className="text-xs sm:text-sm font-semibold text-black min-w-[32px] sm:min-w-[40px]">
                            {item.percentage}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Desktop: Vertical bars */}
                <div className="hidden lg:flex h-48 items-end justify-between gap-3">
                  {data.backgroundData.map((item, index) => {
                    const maxValue = Math.max(
                      ...data.backgroundData.map((d) => d.value),
                    );
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-end flex-1 h-full min-w-0"
                      >
                        <div className="text-base font-semibold text-black mb-2">
                          {item.percentage}
                        </div>
                        <div
                          className="w-full bg-[#C4A574] transition-all duration-300"
                          style={{
                            height: `${(item.value / maxValue) * 100}%`,
                          }}
                        />
                        <div className="text-xs text-gray-800 mt-3 text-center font-medium leading-tight">
                          {item.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Impact Section - Responsive Flex */}
        <div
          className="mb-8 sm:mb-12 text-center"
          aria-labelledby="career-impact-heading"
        >
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide flex-row gap-4 lg:gap-6">
            {data.impactCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#F8F9FA] p-6 lg:p-8 transition-all duration-300 flex-1 min-w-[300px]"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5f6368] leading-relaxed line-clamp-3">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Logos Section - Responsive Flex */}
        <div className="text-center" aria-labelledby="companies-heading">
          <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center items-center">
            {data.companyLogos.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center h-12 sm:h-16"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-8 sm:h-10 lg:h-12 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      company.name,
                    )}&background=random&size=120`;
                  }}
                />
                <span className="sr-only">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackRecord;
