"use client";

import React, { useState } from "react";
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
    academicPartnerLogo: "/charter-partner/charter-academic-partner.avif",
    degreeInternshipPartnerLogo: "/charter-partner/charter-intrenshiph-company-around-the-world.avif",
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
            <HighlightText className="font-bold hl-px-0">
              {data.title.highlight}
            </HighlightText>{" "}
            {data.title.suffix}
          </h2>
            {data.auditorText && (
              <h3 
                className="text-base px-[20px] md:px-[50px] lg:px-[70px] sm:text-lg text-[#5f6368]"
                dangerouslySetInnerHTML={{
                  __html: data.auditorText
                }}
              />
            )}
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start w-full border-t border-gray-200">
          {/* Campus Image - Shows first on mobile, second on desktop */}
          <aside className="order-1 lg:order-2">
            <div className="relative p-[50px] md:p-[50px] lg:p-[50px] bg-[#B30437] overflow-hidden ">
              {config.campusImage && data.campusImage?.src && (
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                  <Image
                    src={config.campusImage}
                    alt={data.campusImage?.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              )}
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
                      <img src="/Charters-icon/dot-icon.svg" alt="" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <img src="/Charters-icon/joint-icon.svg" alt="" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
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
                  <h3 className="text-black font-semibold mb-2 sm:mb-2 text-sm sm:text-base">
                    Academic Partners
                  </h3>
                  <div className="relative w-full h-[40px] object-contain overflow-hidden">
                    {config.academicPartnerLogo && (
                      <Image
                        src={config.academicPartnerLogo}
                        alt="charter academic partner"
                        fill
                        sizes="80px"
                        className="object-contain object-left"
                      />
                    )}
                  </div>
                </div>

                {/* Immersions */}
                <div>
                  <h3 className="text-black font-semibold mb-2 sm:mb-2 text-sm sm:text-base">
                    Internship Partners
                  </h3>
                  <div className="relative object-contain w-full h-[40px] overflow-hidden">
                    {config.degreeInternshipPartnerLogo && (
                      <Image
                        src={config.degreeInternshipPartnerLogo}
                        alt="Charter intrenshiph company around the world"
                        fill
                        sizes="80px"
                        className="object-contain object-left"
                      />
                    )}
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
