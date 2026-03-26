import React from "react";
import PlacementReportClient from "./PlacementReportClient";

const placementReportData = {
  title: "Charter's Career Transition '24",
  description:
    "Top roles, disruptive startups | industry-leading firms | From graduation to career success",
  stats: {
    salaryJump: 3.05,
    highestSalary: 12.3,
    recruiters: 3120,
  },
  verification: {
    by: "B2K Analytics",
    verified: true,
  },
};

const PlacementReportDashboard = () => {
  return (
    <section
      className="mx-[0%] border-gray-300 bg-white text-black relative overflow-hidden"
      aria-labelledby="placement-report-heading"
    >
      {/* Report Header */}
      <div
        className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-[4rem] sm:pt-14 md:pb-0 pb-[3rem] mb-[1.5rem] sm:mb-2"
        role="region"
        aria-labelledby="placement-report-heading"
      >
        <div className="w-full mx-auto text-center px-4 sm:px-0">
          <div>
            <p
              className="text-xs sm:text-sm font-semibold text-[#B30437] tracking-wider mb-2 sm:mb-3"
              role="text"
            >
              PLACEMENT REPORT
            </p>
            <h2
              id="placement-report-heading"
              className="leading-tight sm:leading-normal text-2xl sm:text-3xl md:text-[35px] font-bold"
            >
              {placementReportData.title}
            </h2>
          </div>

          <div className="flex flex-col items-start sm:flex-row sm:flex-wrap sm:justify-center sm:items-center gap-3 sm:gap-6 mt-4 sm:mt-6 w-fit mx-auto sm:w-full">
            {placementReportData.description
              .split("|")
              .map((item: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <img
                    src="/dot-icon.svg"
                    alt=""
                    className="w-4 h-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm sm:text-base text-gray-700 font-medium leading-snug whitespace-nowrap">
                    {item.trim()}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="md:border-x md:w-[90%] max-w-[85rem] mx-auto border-gray-200 h-13 hidden md:block" />

      <div className="flex flex-row w-full">
        <div className="flex-1 bg-gray-200 hidden md:block">
          <div className="bg-white w-full h-full rounded-tr-xl border-t border-gray-200" />
        </div>

        {/* Main client component */}
        <div className="md:w-[90%] max-w-[85rem] w-full">
          <PlacementReportClient
            stats={placementReportData.stats}
            verification={placementReportData.verification}
          />
        </div>
        <div className="flex-1 bg-gray-200 hidden md:block">
          <div className="bg-white w-full h-full rounded-tl-xl border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default PlacementReportDashboard;