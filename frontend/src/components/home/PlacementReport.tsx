import React from "react";
import PlacementReportClient from "./PlacementReportClient";

// Placement Report Data (Server-side static data)
const placementReportData = {
  title: "Charter's Career Transition '24",
  description:
    "Top roles, disruptive startups and industry-leading firms. See where our graduates landed and their career transformations.",

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
              className="leading-tight sm:leading-normal font-bold text-2xl sm:text-3xl md:text-[35px] bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent"
            >
              {placementReportData.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-3 sm:mt-[14px] max-w-2xl mx-auto">
            {placementReportData.description}
          </p>
        </div>
      </div>
      <div className="md:border-x md:w-[90%] max-w-[85rem] mx-auto border-gray-200 h-13 hidden md:block" >

      </div>
      {/* Statistics Section - Client Component */}
      <div className="w-full">
        <PlacementReportClient
          stats={placementReportData.stats}
          verification={placementReportData.verification}
        />
      </div>

      {/* Download Section - Moved to Client Component */}
    </section>
  );
};

export default PlacementReportDashboard;
