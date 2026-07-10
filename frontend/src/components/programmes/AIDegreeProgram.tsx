"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { DegreeProgramData, ProgrammeAssetConfig } from "@/data/programmes";
import HighlightText from "../shared/HighlightObserver";

interface AIDegreeComponentProps {
  data: DegreeProgramData;
  assets?: ProgrammeAssetConfig;
}

const AIDegreeProgram: React.FC<AIDegreeComponentProps> = ({ data, assets }) => {
  const config = assets || {
    campusImage: "/images/programmes/certificate.JPG",
    disclaimerText: "Every CBA™ (Certified Business Accountant) completed students who fulfil the minimum requirements will be eligible to apply for a US-CMA exam, Visa, Residence permit, allowing them to search for employment at Top 4.",
  };
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    data.accordions[0]?.id || null,
  );

  const toggleAccordion = (key: string) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <section
      className="bg-white"
      aria-labelledby="degree-program-heading"
    >
      <div className="max-w-[85rem] pt-12 sm:pt-16 md:pt-18">
        {/* Header */}
        <div className="mb-8 lg:mb-12 text-center">
          <p
            className="text-sm font-semibold text-[#B30437] tracking-wider mb-4 lg:mb-6"
            role="text"
          >
            {data.badge}
          </p>

          <h2
            id="track-record-heading"
            className="leading-none text-black text-2xl sm:text-3xl md:text-[35px] font-bold pb-[17px]"
          >
            {data.title.prefix}{" "}
            <HighlightText className="font-bold !px-0 !py-0">
              {data.title.highlight}
            </HighlightText>{" "}
            {data.title.suffix}
          </h2>
          <h3 className="text-base px-[20px] md:px-[50px] lg:px-[70px] sm:text-lg text-[#5f6368]">
            Our placement reports are audited by <strong>AnalystPK</strong>, auditor for IIM and follow the IPRS Revision 2.2 framework for
            transparent and consistent compensation data.

          </h3>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start w-full border-t border-gray-200">
          {/* Campus Image - Shows first on mobile, second on desktop */}
          <aside className="order-1 lg:order-2">
            <div className="relative p-[50px] md:p-[50px] lg:p-[50px] bg-[#B30437] overflow-hidden ">
              <Image
                src={config.campusImage}
                alt={data.campusImage?.alt || "Degree certificate details"}
                width={600}
                height={500}
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </aside>

          {/* Accordions Content - Shows second on mobile, first on desktop */}
          <div className="order-2 lg:order-1">
            {data.accordions.map((accordion) => (
              <div
                key={accordion.id}
                className="border-b border-r border-gray-200 bg-white overflow-hidden "
              >
                <button
                  onClick={() => toggleAccordion(accordion.id)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  type="button"
                  aria-expanded={openAccordion === accordion.id}
                >
                  <span className="text-black font-medium text-sm sm:text-base pr-4">
                    {accordion.title}
                  </span>
                  <div className="flex-shrink-0">
                    {openAccordion === accordion.id ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-[#B30437]" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#B30437]" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${openAccordion === accordion.id
                    ? "max-h-160 opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-black space-y-3">
                    <ul className="space-y-3">
                      {accordion.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-[#B30437] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span
                            className="text-sm sm:text-base leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: item.replace(
                                /\*\*(.*?)\*\*/g,
                                "<strong>$1</strong>",
                              ),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* Partners Section */}
            <div className="mt-1 sm:mt-2 px-4 sm:px-6 lg:px-8">
              <p className="text-black font-normal mb-4 sm:mb-6 text-[10px]" >{config.disclaimerText}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Academic Partners */}

                <div>
                  <h3 className="text-black font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
                    Academic Partners
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    {data.academicPartners.map((partner, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {partner.logo ? (
                          <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded flex items-center justify-center">
                            <span className="text-black font-bold text-xs">
                              {partner.logo}
                            </span>
                          </div>
                        ) : null}
                        <div className="text-black text-xs sm:text-sm">
                          <div className="font-medium">{partner.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Immersions */}
                <div>
                  <h3 className="text-black font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
                    Immersions
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    {data.immersions.map((immersion, index) => (
                      <div
                        key={index}
                        className="text-black font-bold text-lg sm:text-xl"
                      >
                        {immersion.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDegreeProgram;
