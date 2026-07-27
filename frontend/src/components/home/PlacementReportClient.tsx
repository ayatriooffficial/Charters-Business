"use client";

import React, { useRef, useState, useEffect, memo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import useInViewPlay from "@/components/micro/useInViewPlay";
import BannerBlock from "../shared/BannerBlock";
import Placement_TrustedCompanies from "./Placement_TrustedCompanies";

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
  hideDetailedStats?: boolean;
}

const SkeletonCard = () => (
  <div className="flex-1 flex flex-col justify-center items-center animate-pulse">
    <div className="w-full h-32 bg-gray-100 rounded mb-4"></div>
    <div className="h-6 w-24 bg-gray-100 rounded mb-2"></div>
    <div className="h-4 w-32 bg-gray-100 rounded"></div>
  </div>
);

const PlacementReportClient: React.FC<PlacementReportClientProps> = ({
  stats,
  verification,
  hideDetailedStats = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldMount, setShouldMount] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInViewPlay(sectionRef, "200px", 0.1);

  useEffect(() => {
    if (!inView) return;
    setShouldMount(true);
    setIsVisible(true);
  }, [inView]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/home/Capdsdsfture.JPG";
    link.download = "placement-report.JPG";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {!hideDetailedStats && (
        <div className="w-full border-t border-gray-200"></div>
      )}

      <div className="md:border-x border-gray-200 max-w-[85rem] w-full">
        {!hideDetailedStats && (
          <>
            <div
              ref={sectionRef}
              className="pb-4"
              role="region"
              aria-labelledby="statistics-heading"
            >
              <h3 id="statistics-heading" className="sr-only">
                Placement Statistics Overview
              </h3>

              {/* ── MOBILE: horizontal scroll ── */}
              <div className="md:hidden w-full overflow-x-auto scrollbar-none pb-4">
                <div className="flex border-y border-gray-200 divide-x divide-gray-200 bg-white" style={{ width: "max-content" }}>

                  {/* Card 1 */}
                  <article
                    className="p-4 flex flex-col"
                    style={{ width: "85vw", minHeight: "340px" }}
                  >
                    {shouldMount ? (
                      <SalaryGrowthChart isHovered={isVisible} value={stats.salaryJump} />
                    ) : (
                      <SkeletonCard />
                    )}
                  </article>

                  {/* Card 2 */}
                  <article
                    className="p-4 flex flex-col"
                    style={{ width: "85vw", minHeight: "340px" }}
                  >
                    {shouldMount ? (
                      <SalaryBarsChart isHovered={isVisible} value={stats.highestSalary} />
                    ) : (
                      <SkeletonCard />
                    )}
                  </article>

                  {/* Card 3 — intentionally slightly cut off to hint scrollability */}
                  <article
                    className="p-4 flex flex-col"
                    style={{ width: "85vw", minHeight: "340px" }}
                  >
                    {shouldMount ? (
                      <RecruiterProgressBars isHovered={isVisible} value={stats.recruiters} />
                    ) : (
                      <SkeletonCard />
                    )}
                  </article>

                </div>
              </div>

              {/* ── DESKTOP: original grid ── */}
              <div className="hidden md:block w-full">
                <div className="w-full h-full border-b border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-gray-200">
                  <article className="bg-white p-3 sm:p-4 flex flex-col min-h-[280px] sm:min-h-[320px] rounded-t-xl hover:shadow-sm transition-shadow">
                    {shouldMount ? (
                      <SalaryGrowthChart isHovered={isVisible} value={stats.salaryJump} />
                    ) : <SkeletonCard />}
                  </article>
                  <article className="bg-white p-3 sm:p-4 flex flex-col min-h-[280px] sm:min-h-[320px] rounded-t-xl hover:shadow-sm transition-shadow">
                    {shouldMount ? (
                      <SalaryBarsChart isHovered={isVisible} value={stats.highestSalary} />
                    ) : <SkeletonCard />}
                  </article>
                  <article className="bg-white p-3 sm:p-4 flex flex-col min-h-[280px] sm:min-h-[320px] rounded-t-xl hover:shadow-sm transition-shadow">
                    {shouldMount ? (
                      <RecruiterProgressBars isHovered={isVisible} value={stats.recruiters} />
                    ) : <SkeletonCard />}
                  </article>
                </div>
              </div>
            </div>

            <Placement_TrustedCompanies />
          </>
        )}
        <div
          className="max-w-[85rem] mx-auto bg-white p-4 sm:p-4 lg:p-4 text-center border-b border-gray-200"
          role="region"
          aria-labelledby="download-section-heading"
        >
          <BannerBlock
            imageSrc="https://res.cloudinary.com/ducgcl4dg/image/upload/v1784656491/charters-placement-report_yj1uj9.avif"
            imageAlt="Charters Union Career Report 2025"
            title={
              <>
                <strong> 97%</strong> of students secured full time job offer by their <strong>4</strong>th month of Internship, with <br></br> the highest CTC being <strong> ₹12.3</strong>lakhs/month.
              </>
            }
            subtitle="100% Internship Rate • Average Salary Jump 2.35x • Proven track record audited by Zivanta Analytics"
            actionButton={
              <button
                onClick={handleDownload}
                className="bg-[#222222] cursor-pointer text-sm text-white px-8 py-2.5 font-semibold flex items-center gap-2 hover:bg-[#202124] transition-colors"
                aria-label="Download the complete placement report PDF"
              >
                Placement Report
                <img src="/Charters-icon/download.svg" alt="icon" width={12} height={12} className="w-5 h-5" />
              </button>
            }
          />
        </div>
      </div>
    </>
  );
};

export default memo(PlacementReportClient);
