"use client";

import React from "react";
import Image from "next/image";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import HighlightText from "../shared/HighlightObserver";
import { ProgrammeAssetConfig } from "@/data/programmes";

interface WeekAtTetrProps {
  data?: {
    imageSrc?: string;
    title?: string;
    subtitle?: string;
  };
  assets?: ProgrammeAssetConfig;
}

const WeekAtTetr = ({ data, assets }: WeekAtTetrProps) => {
  const config = assets || {
    timetableImage: "/images/week-at-chartersunion/CBA-week-at-chartersunion.avif",
  };
  const timetableImage =
    data?.imageSrc || config.timetableImage;

  const heading = data?.title || "What's a Week at Charters' Union Like?";

  const subtitle =
    data?.subtitle ||
    "Start your day with ambition and end it with impact. At Charters' Union, every week pushes boundaries.";

  // Highlight only "Charters' Union" within the heading, rest stays plain text
  const highlightWord = "Charters' Union";
  const headingParts = heading.split(highlightWord);

  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a
        href="#week-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded z-50"
      >
        Skip to weekly schedule content
      </a>

      <main
        className="pt-[4rem] sm:pt-14 bg-white"
        role="main"
        aria-labelledby="week-heading"
      >
        <div className="max-w-[85rem] pt-2 sm:pt-3 md:pt-4 section-header-block">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8" id="week-content">
            <p className="section-eyebrow" role="text">
              WEEKLY SCHEDULE
            </p>
            <h2
              id="week-heading"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 text-center"
            >
              {headingParts.length === 2 ? (
                <>
                  {headingParts[0]}
                  <HighlightText className="font-bold hl-px-0">
                    {highlightWord}
                  </HighlightText>
                  {headingParts[1]}
                </>
              ) : (
                heading
              )}
            </h2>
            <p className="text-[#5f6368] text-sm md:text-base lg:text-lg">
              {subtitle}
            </p>
          </div>

          {/* Timetable Image */}
          <section
            className="overflow-x-auto sm:overflow-visible"
            role="region"
            aria-labelledby="timetable-heading"
          >
            <h2 id="timetable-heading" className="sr-only">
              Weekly Schedule Overview
            </h2>
            <div className="min-w-[350vw] sm:min-w-full">
              <figure className="relative w-[350vw] sm:w-full">
                <Image
                  src={getCloudinaryUrl(
                    timetableImage,
                    {
                      width: 1200,
                      quality: "auto",
                      format: "auto",
                    }
                  )}
                  alt="Weekly timetable showing daily activities at Charters' Union including morning sessions, afternoon workshops, evening projects, and weekend activities"
                  width={1200}
                  height={800}
                  className="w-full h-auto shadow-lg border border-gray-200"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
                <figcaption className="sr-only">
                  Comprehensive weekly schedule displaying structured learning
                  activities, practical workshops, and collaborative projects
                  throughout the week at Charters&apos; Union.
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default WeekAtTetr;
