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
      className="mx-[0%] border-t border-gray-300 bg-white text-black relative overflow-hidden"
      aria-labelledby="placement-report-heading"
    >
      {/* Report Header */}
      <div
        className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pb-0 pb-13 mb-2"
        role="region"
        aria-labelledby="placement-report-heading"
      >
        <div className="w-full mx-auto text-center">
          <div>
            <p
              className="text-sm font-semibold text-[#B30437] tracking-wider mb-3"
              role="text"
            >
              PLACEMENT REPORT
            </p>
            <h2
              id="placement-report-heading"
              className="leading-normal text-[35px] font-semibold text-black"
            >
              {placementReportData.title}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#5f6368] mt-[14px]">
            {placementReportData.description}
          </p>
        </div>
      </div>
      <div className="border-x md:mx-[5%] max-w-[85rem] mx-auto  border-gray-200 h-13 hidden md:block" >
        
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
