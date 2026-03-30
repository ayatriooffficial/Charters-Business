"use client";

import React from "react";
import { TrackRecordData } from "@/data/programmes";

interface TrackRecordProps {
  data: TrackRecordData;
}

const TrackRecord: React.FC<TrackRecordProps> = ({ data }) => {
  return (
    <div className="bg-white py-4 sm:py-6 md:py-8">
      <div className="mx-auto max-w-[85rem]">

        {/* ── Track Record Header ── */}
        <div className="" aria-labelledby="track-record-heading">
          <div className="text-center mb-8 sm:mb-12 mt-2 sm:mt-3">
            <h2
              id="track-record-heading"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-black mb-4 sm:mb-6"
            >
              A Proven{" "}
              <span className="text-green-600 font-medium relative inline-block">
                track record
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600" />
              </span>
            </h2>
          </div>

          {/* Stats*/}
          <div className="grid grid-cols-2 md:flex md:flex-nowrap md:justify-between md:items-center pb-6 border-b border-gray-200">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center px-4 sm:px-6 py-3 md:py-0 md:flex-1
                  ${index % 2 === 0 && index !== data.stats.length - 1 ? 'border-r border-gray-200' : ''}
                  ${index < data.stats.length - 2 ? 'border-b border-gray-200 md:border-b-0' : ''}
                  ${index > 0 ? 'md:border-l md:border-gray-200' : ''}
                `}
              >
                <div className="text-xl sm:text-2xl lg:text-5xl font-light text-black mb-1 sm:mb-2 whitespace-nowrap">
                  {stat.value}
                  <span className="text-lg sm:text-2xl lg:text-4xl">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-tight whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Diversity Charts ── */}
        <div
          className="mb-4 sm:mb-6 border-b border-gray-200"
          aria-labelledby="diversity-heading"
        >
          <h3 id="diversity-heading" className="sr-only">
            Student Diversity Statistics
          </h3>

          {/* FIX 2: added lg:items-stretch so the divide-x line spans full height */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 lg:divide-x lg:divide-gray-200 lg:items-stretch">

            {/* Work Experience Chart */}
            <div className="w-full lg:flex-[1.2] flex flex-col lg:pr-6 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#5f6368] mb-4 sm:mb-6 text-left ">
                Our Young Charter's around the world
              </h3>
              <div className="h-32 sm:h-40 lg:h-48 flex items-end justify-between gap-1 sm:gap-2 md:gap-4">
                {data.experienceData.map((item, index) => {
                  const maxValue = Math.max(...data.experienceData.map((d) => d.value));
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-end flex-1 h-full min-w-0"
                    >
                      <div className="text-[10px] sm:text-xs md:text-base font-semibold text-black mb-1 sm:mb-2">
                        {item.percentage}
                      </div>
                      <div
                        className="w-full bg-[#C4A574] transition-all duration-300"
                        style={{ height: `${(item.value / maxValue) * 100}%` }}
                      />
                      <div className="text-[8px] sm:text-[10px] md:text-sm text-[#5f6368] mt-1 sm:mt-2 md:mt-3 text-center font-medium leading-tight w-full min-w-[56px]">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Background Distribution Chart */}
            <div className="w-full lg:flex-[2.8] flex flex-col lg:pl-3 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#5f6368] mb-4 sm:mb-6 text-left">
                Young Charter's jobs various sectors
              </h3>

              {/* Mobile & Tablet: Horizontal bars */}
              <div className="lg:hidden flex flex-col gap-2 sm:gap-3 md:gap-4">
                {data.backgroundData.map((item, index) => {
                  const maxValue = Math.max(...data.backgroundData.map((d) => d.value));
                  return (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="text-[10px] sm:text-xs md:text-sm text-gray-800 font-medium w-[80px] sm:w-[100px] md:w-[120px] flex-shrink-0 leading-tight">
                        {item.label}
                      </div>
                      <div className="flex-1 flex items-center gap-2 sm:gap-3">
                        <div
                          className="h-5 sm:h-6 md:h-8 bg-[#C4A574] transition-all duration-300 min-w-[4px]"
                          style={{ width: `${(item.value / maxValue) * 100}%` }}
                        />
                        <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-black flex-shrink-0 min-w-[28px] sm:min-w-[36px] md:min-w-[40px]">
                          {item.percentage}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Desktop: Vertical bars */}
              <div className="hidden lg:flex h-48 items-end justify-between gap-1">
                {data.backgroundData.map((item, index) => {
                  const maxValue = Math.max(...data.backgroundData.map((d) => d.value));
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
                        style={{ height: `${(item.value / maxValue) * 100}%` }}
                      />
                      <div className="text-[10px] text-gray-800 mt-3 text-center font-medium leading-tight w-full overflow-hidden truncate px-0.5">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* ── Career Impact Cards ── */}
        {/* FIX 3: removed sm:overflow-x-auto, sm:snap-x, sm:snap-mandatory, scrollbar-hide
            — these caused the zigzag scrollbar gutter on left/right edges.
            Replaced with sm:flex-wrap so cards wrap cleanly on tablet. */}
        <div className="mb-4 sm:mb-6 text-center" aria-labelledby="career-impact-heading">
          <div className="flex flex-col sm:flex-row sm:flex-wrap">
            {data.impactCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#F8F9FA] p-4 sm:p-6 lg:p-8 transition-all duration-300 w-full sm:flex-1 sm:min-w-[260px] md:min-w-[300px] border-r border-b border-t border-gray-200"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-2 sm:mb-4 text-left">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5f6368] leading-relaxed line-clamp-3 text-left">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Company Logos ── */}
        <div className="text-center" aria-labelledby="companies-heading">
          <div className="flex flex-wrap gap-3 sm:gap-5 md:gap-6 lg:gap-8 justify-center items-center">
            {data.companyLogos.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center h-8 sm:h-12 md:h-14 lg:h-16"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-6 sm:h-8 md:h-10 lg:h-12 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      company.name
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