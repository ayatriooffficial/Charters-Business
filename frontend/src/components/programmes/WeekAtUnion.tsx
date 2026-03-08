"use client";

import React from "react";
import Image from "next/image";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const WeekAtTetr = () => {
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
        className="mx-[0%] md:mx-[5%] py-8 sm:py-12 md:py-16 lg:py-20 bg-white"
        role="main"
        aria-labelledby="week-heading"
      >
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10 lg:mb-12" id="week-content">
            <h2
              id="week-heading"
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 text-center"
            >
              What&apos;s a{" "}
              <span className="bg-[#B30437] text-white px-2 py-1 rounded">
                Week at Charters Business
              </span>{" "}
              Like?
            </h2>
            <p className="text-gray-700 text-sm md:text-base lg:text-lg  ">
              Start your day with ambition and end it with impact. At Charters ,
              every week pushes boundaries.
            </p>
          </div>

          {/* Timetable Image */}
          <section
            className="flex justify-center"
            role="region"
            aria-labelledby="timetable-heading"
          >
            <h2 id="timetable-heading" className="sr-only">
              Weekly Schedule Overview
            </h2>
            <figure className="relative w-full ">
              <Image
                src={getCloudinaryUrl(
                  "charters-business/images/weekattetr/ug-timetable",
                  {
                    width: 1200,
                    quality: "auto",
                    format: "auto",
                  }
                )}
                alt="Weekly timetable showing daily activities at Tetr including morning sessions, afternoon workshops, evening projects, and weekend activities"
                width={1200}
                height={800}
                className="w-full h-auto  shadow-lg border border-gray-200"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
              <figcaption className="sr-only">
                Comprehensive weekly schedule displaying structured learning
                activities, practical workshops, and collaborative projects
                throughout the week at Tetr.
              </figcaption>
            </figure>
          </section>
        </div>
      </main>
    </>
  );
};

export default WeekAtTetr;
