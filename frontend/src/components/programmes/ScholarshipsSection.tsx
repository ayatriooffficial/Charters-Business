"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ScholarshipData } from "@/data/programmes";
import HighlightText from "../shared/HighlightObserver";

interface ScholarshipsSectionProps {
  scholarships: ScholarshipData[];
  config?: {
    subtitle?: string;
    title: { prefix: string; highlight: string; };
    description: string;
  };
}

const ScholarshipsSection: React.FC<ScholarshipsSectionProps> = ({
  scholarships = [],
  config
}) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(
    scholarships[0]?.id || null,
  );

  // Initialize on mount
  useEffect(() => {
    if (scholarships && scholarships.length > 0) {
      setExpandedItem(scholarships[0].id);
    }
  }, []);

  const toggleExpanded = (id: string) => {
    const newExpandedItem = expandedItem === id ? null : id;
    setExpandedItem(newExpandedItem);
  };

  // Early return if no scholarships
  if (!scholarships || scholarships.length === 0) {
    return null;
  }

  return (
    <section
      className="bg-white w-full"
      aria-labelledby="scholarships-heading"
    >
      <div className="w-full">
        <div className="mb-6 sm:mb-8 text-left lg:pl-8 pr-4 sm:pr-6 lg:pr-8">
          <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-2">
            {config?.subtitle}
          </p>
          <h2
            id="scholarships-heading"
            className="font-bold text-2xl sm:text-3xl text-black leading-tight mb-3"
          >
            {config?.title.prefix}{" "}
            <HighlightText className="font-bold">
              {config?.title.highlight}
            </HighlightText>
          </h2>
          <p className="text-sm sm:text-base text-black leading-relaxed">
            {config?.description}
          </p>
        </div>
        
        <div className="w-full border-t border-gray-200">
          {scholarships.map((scholarship, index) => (
            <div
              key={scholarship.id}
              className={`border-gray-200 ${
                index !== scholarships.length - 1 ? "border-b" : ""
              }`}
            >
              <button
                onClick={() => toggleExpanded(scholarship.id)}
                className="w-full flex items-center justify-between text-left group cursor-pointer hover:bg-gray-50 transition-colors duration-200 py-4 pl-2 sm:pl-4 lg:pl-8 pr-4 sm:pr-6 lg:pr-8 rounded-sm"
                type="button"
                aria-expanded={expandedItem === scholarship.id}
              >
                <h3 className="text-base sm:text-lg font-medium text-black pr-4">
                  {scholarship.title}
                </h3>
                <div className="flex-shrink-0">
                  {expandedItem === scholarship.id ? (
                    <img src="/Charters-icon/dot-icon.svg" alt="collapse" width={20} height={20} className="w-5 h-5" />
                  ) : (
                    <img src="/Charters-icon/joint-icon.svg" alt="expand" width={20} height={20} className="w-5 h-5" />
                  )}
                </div>
              </button>

              {expandedItem === scholarship.id && (
                <div className="mt-2 mb-4 space-y-3 px-2 sm:px-4 lg:pl-8 pr-4 sm:pr-6 lg:pr-8">
                  <p className="text-sm sm:text-base text-black leading-relaxed">
                    {scholarship.description}
                  </p>
                  <div className="flex items-start gap-2 bg-red-50 p-3 rounded">
                    <span className="text-sm font-medium text-[#B30437] mt-0.5">
                      📋
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-black">
                        Eligibility Criteria:{" "}
                      </span>
                      <span className="text-sm text-black">
                        {scholarship.eligibility}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsSection;
