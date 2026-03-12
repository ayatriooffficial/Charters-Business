"use client";

import React, { useRef, useState, useEffect, memo } from "react";
import dynamic from "next/dynamic";
import { Download } from "lucide-react";
import useInViewPlay from "@/components/micro/useInViewPlay";

// Dynamic imports (charts should never block SSR)
const SalaryGrowthChart = dynamic(
  () => import("../animations/SalaryGrowthChart"),
  { ssr: false }
);

const SalaryBarsChart = dynamic(
  () => import("../animations/SalaryBarsChart"),
  { ssr: false }
);

const RecruiterProgressBars = dynamic(
  () => import("../animations/RecruiterProgressBars"),
  { ssr: false }
);

interface PlacementReportClientProps {
  stats: {
    salaryJump: number;
    highestSalary: number;
    recruiters: number;
  };
  verification: {
    by: string;
    verified: boolean;
  };
}

const PlacementReportClient: React.FC<PlacementReportClientProps> = ({
  stats,
  verification,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Detect when section enters viewport
  const inView = useInViewPlay(sectionRef, "200px", 0.1);

  const [shouldMount, setShouldMount] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mount charts only once when visible
  useEffect(() => {
    if (!inView) return;

    setShouldMount(true);
    setIsVisible(true);
  }, [inView]);

  const handleDownload = () => {
    console.log("Download Placement Report triggered");
  };

  return (
    <>
      {/* Full width top border */}
      <div className="w-full border-t border-gray-200"></div>

      {/* Main Container */}
      <div className="border-x md:mx-[5%] border-gray-200 max-w-[85rem] mx-auto">
        <div
          ref={sectionRef}
          className="pb-4"
          role="region"
          aria-labelledby="statistics-heading"
        >
          <h3 id="statistics-heading" className="sr-only">
            Placement Statistics Overview
          </h3>

          <div className="w-full">
            <div className="w-full h-full border-b border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              
              {/* Salary Jump */}
              <article className="bg-white p-3 sm:p-4 flex flex-col min-h-[280px] sm:min-h-[320px]">
                {shouldMount ? (
                  <SalaryGrowthChart
                    isHovered={isVisible}
                    value={stats.salaryJump}
                  />
                ) : (
                  <div className="flex-1 flex flex-col justify-center items-center animate-pulse">
                    <div className="w-full h-32 bg-gray-100 rounded mb-4"></div>
                    <div className="h-6 w-24 bg-gray-100 rounded mb-2"></div>
                    <div className="h-4 w-32 bg-gray-100 rounded"></div>
                  </div>
                )}
              </article>

              {/* Highest Salary */}
              <article className="bg-white p-3 sm:p-4 flex flex-col min-h-[280px] sm:min-h-[320px]">
                {shouldMount ? (
                  <SalaryBarsChart
                    isHovered={isVisible}
                    value={stats.highestSalary}
                  />
                ) : (
                  <div className="flex-1 flex flex-col justify-center items-center animate-pulse">
                    <div className="w-full h-32 bg-gray-100 rounded mb-4"></div>
                    <div className="h-6 w-24 bg-gray-100 rounded mb-2"></div>
                    <div className="h-4 w-32 bg-gray-100 rounded"></div>
                  </div>
                )}
              </article>

              {/* Recruiters */}
              <article className="bg-white p-3 sm:p-4 flex flex-col min-h-[280px] sm:min-h-[320px]">
                {shouldMount ? (
                  <RecruiterProgressBars
                    isHovered={isVisible}
                    value={stats.recruiters}
                  />
                ) : (
                  <div className="flex-1 flex flex-col justify-center items-center animate-pulse">
                    <div className="w-full h-32 bg-gray-100 rounded mb-4"></div>
                    <div className="h-6 w-24 bg-gray-100 rounded mb-2"></div>
                    <div className="h-4 w-32 bg-gray-100 rounded"></div>
                  </div>
                )}
              </article>

            </div>
          </div>
        </div>

        {/* Download Section */}
        <div
          className="px-4 sm:px-6 lg:px-8 text-center border-b border-gray-200 pb-6"
          role="region"
          aria-labelledby="download-section-heading"
        >
          <div className="mx-auto flex flex-col md:flex-row items-center justify-between pb-4">
            
            <div className="w-full md:w-3/4 text-[16px] md:text-[18px] text-center md:text-left align-middle flex-col font-light text-gray-800">
              <h3 id="download-section-heading">
                Proven track record of outcomes{" "}
                {verification.verified && (
                  <span className="text-[#B30437] font-semibold">
                    Verified by {verification.by}
                  </span>
                )}{" "}
                through our programs
              </h3>

              <p className="text-[11px] md:text-[10px] text-gray-600 mt-1 md:mt-2 px-2 md:px-0">
                Source: *(a)¹Charter Career Center and Past outcomes are not
                indicative of future placements for subsequent cohorts.
              </p>
            </div>

            <div className="w-full md:w-1/4 mt-4 md:mt-0 flex justify-center md:justify-end">
              <button
                onClick={handleDownload}
                className="bg-black rounded-full text-[14px] text-white px-6 py-2 font-semibold flex items-center gap-2"
                aria-label="Download the complete placement report PDF"
              >
                Placement Report
                <Download className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default memo(PlacementReportClient);