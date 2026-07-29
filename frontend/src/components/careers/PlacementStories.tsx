"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HighlightText from "../shared/HighlightObserver";

import { homeStudents } from "@/data/students";
const LINKEDIN_ICON = "https://files.mastersunion.link/resources/svg/linkedin.svg";

export default function PlacementStories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 300);
    }
  };

  return (
    <section
      id="stories"
      aria-label="Stories"
      className="w-full bg-white pb-8 sm:pb-12 md:pb-16 pt-4 sm:pt-6 md:pt-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-4 sm:mb-6 px-4 sm:px-5">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            Placements{" "}
            <HighlightText className="font-extrabold">
              Stories
            </HighlightText>
          </h2>
        </div>

        {/* Scroll area + arrow buttons */}
        <div className="relative">

          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous"
            className={`
              flex absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-10
              items-center justify-center
              w-8 h-8 sm:w-11 sm:h-11 rounded-full shadow-lg
              transition-all duration-200
              ${canScrollLeft
                ? "opacity-100 pointer-events-auto bg-[#B30437] hover:bg-[#96032d]"
                : "opacity-0 pointer-events-none bg-[#B30437]"
              }
            `}
          >
            <svg width="14" height="14" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next"
            className={`
              flex absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-10
              items-center justify-center
              w-8 h-8 sm:w-11 sm:h-11 rounded-full shadow-lg
              transition-all duration-200
              ${canScrollRight
                ? "opacity-100 pointer-events-auto bg-[#B30437] hover:bg-[#96032d]"
                : "opacity-0 pointer-events-none bg-[#B30437]"
              }
            `}
          >
            <svg width="14" height="14" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Cards scroll container */}
          <div
            ref={scrollContainerRef}
            onScroll={updateScrollButtons}
            className="flex overflow-x-auto snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style jsx>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>

            {homeStudents.map((story, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-start border-l border-b border-t border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                {/* Photo */}
                <div className="relative w-full h-[220px] sm:h-[260px] md:h-[290px] bg-gray-100">
                  <Image
                    src={story.imageSrc}
                    alt={story.name}
                    fill
                    className="object-cover object-top"
                    sizes="360px"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-start justify-between mb-1 sm:mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug pr-2">
                      {story.name}
                    </h3>
                    {story.linkedinUrl && (
                      <Link
                        href={story.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 hover:opacity-75 transition mt-0.5"
                      >
                        <Image
                          src={LINKEDIN_ICON}
                          alt="LinkedIn"
                          width={18}
                          height={18}
                        />
                      </Link>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4" style={{ color: "#B30437" }}>
                    {story.role}, {story.company}
                  </p>

                  <hr className="border-gray-200 mb-3 sm:mb-4" />

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {story.internship}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}