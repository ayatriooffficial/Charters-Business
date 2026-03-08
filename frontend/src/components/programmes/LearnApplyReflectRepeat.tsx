"use client";

import React, { useState, useRef } from "react";
import { LearnApplyData } from "@/data/programmes";

interface LearnApplyReflectRepeatProps {
  data: LearnApplyData;
}

const LearnApplyReflectRepeat: React.FC<LearnApplyReflectRepeatProps> = ({
  data,
}) => {
  const [activeCategory, setActiveCategory] = useState(
    data.categories[0]?.id || "",
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const currentCourseSet = data.courseData[activeCategory] || [];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-[#B30437]"
      >
        Skip to main content
      </a>

      <section
        id="main-content"
        className="mx-[0%] md:mx-[5%] bg-white text-black py-8 sm:py-12 md:py-16 lg:py-20"
        role="main"
        aria-labelledby="main-heading"
      >
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Header Section */}
          <header className="mb-8 md:mb-16">
            <h2
              id="main-heading"
              className="text-3xl sm:text-4xl md:text-6xl font-light mb-4 md:mb-6 leading-tight text-center px-2"
            >
              Learn. Apply. Reflect.{" "}
              <span className="text-[#B30437]">Repeat.</span>
            </h2>
            <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed text-center px-4">
              Hands-on courses and workshops designed to build real businesses—
              <br className="hidden sm:block" />
              because real learning comes from real applications.
            </p>
          </header>

          {/* Subject Categories Navigation */}
          <nav
            className="mb-4"
            role="navigation"
            aria-labelledby="category-nav-heading"
          >
            <h3 id="category-nav-heading" className="sr-only">
              Course Subject Categories
            </h3>
            <div
              className="flex overflow-scroll scrollbar-hide gap-0"
              role="tablist"
              aria-label="Course categories"
            >
              {data.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-3 sm:px-4 py-3 sm:py-4 transition-all duration-300 text-left first:rounded-l-lg last:rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#B30437] focus:ring-inset ${activeCategory === category.id
                    ? "bg-[#B30437] text-white font-semibold"
                    : "bg-transparent hover:bg-gray-100 text-black border-r border-gray-300 last:border-r-0"
                    }`}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  aria-controls={`tabpanel-${category.id}`}
                  id={`tab-${category.id}`}
                  tabIndex={activeCategory === category.id ? 0 : -1}
                >
                  <div
                    className="text-xs sm:text-sm font-bold"
                    aria-hidden="true"
                  >
                    {category.label}
                  </div>
                  <div className="text-[10px] sm:text-xs">{category.title}</div>
                </button>
              ))}
            </div>
          </nav>

          {/* Course Content Panel */}
          <div
            role="tabpanel"
            id={`tabpanel-${activeCategory}`}
            aria-labelledby={`tab-${activeCategory}`}
            className="relative"
          >
            <h3 className="sr-only">
              Course Modules for{" "}
              {data.categories.find((c) => c.id === activeCategory)?.title}
            </h3>

            {/* Cards Container with Border */}
            <div
              className=" p-1 sm:p-2 relative bg-white/50"
              role="region"
              aria-label="Course cards carousel"
            >
              {/* Navigation Buttons */}
              <button
                onClick={scrollLeft}
                className="absolute left-1 sm:left-2 bottom-1 sm:bottom-2 z-10 bg-[#B30437]/80 hover:bg-[#B30437] text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#8B0329]"
                type="button"
                aria-label="Scroll to previous courses"
                title="Previous courses"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={scrollRight}
                className="absolute right-1 sm:right-2 bottom-1 sm:bottom-2 z-10 bg-[#B30437]/80 hover:bg-[#B30437] text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#8B0329]"
                type="button"
                aria-label="Scroll to next courses"
                title="Next courses"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Scrollable Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide px-3 sm:px-6 py-3 sm:py-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                role="list"
                aria-label={`${data.categories.find((c) => c.id === activeCategory)?.title} course locations`}
              >
                {currentCourseSet.map((courseSet, index) => (
                  <article
                    key={`${activeCategory}-${index}`}
                    className="bg-white text-black p-4 sm:p-5 space-y-2 sm:space-y-3 flex-shrink-0 w-[280px] sm:w-80 md:w-96 h-[280px] sm:h-[300px] md:h-[320px] flex flex-col overflow-hidden border border-gray-200 shadow-sm"
                    role="listitem"
                    aria-labelledby={`course-set-${activeCategory}-${index}-heading`}
                  >
                    {/* Course Set Header */}
                    <header className="border-b border-gray-200 pb-2 sm:pb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="w-2 h-2 bg-[#B30437] rounded-full"
                          aria-hidden="true"
                        ></div>
                        <span className="text-[10px] sm:text-xs font-bold text-black tracking-wider">
                          {courseSet.term}
                        </span>
                      </div>
                      <h3
                        id={`course-set-${activeCategory}-${index}-heading`}
                        className="text-base sm:text-lg font-bold text-black"
                      >
                        {courseSet.location}
                      </h3>
                    </header>

                    {/* Course List */}
                    <div className="flex-1">
                      <h4 className="sr-only">Available Courses</h4>
                      <ul
                        className="space-y-2"
                        aria-label={`Courses available in ${courseSet.location}`}
                      >
                        {courseSet.courses
                          .slice(0, 4)
                          .map((course, courseIndex) => (
                            <li
                              key={`${activeCategory}-${index}-${courseIndex}`}
                              className="flex items-start space-x-2 sm:space-x-3 py-0.5 sm:py-1"
                            >
                              <div
                                className="w-1.5 h-1.5 bg-[#B30437] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"
                                aria-hidden="true"
                              ></div>
                              <div className="flex-1 min-w-0">
                                <span
                                  className="text-[10px] sm:text-xs font-bold text-black mr-1 sm:mr-2"
                                  aria-label="Course code"
                                >
                                  {course.code}:
                                </span>
                                <span className="text-xs sm:text-sm text-black leading-relaxed">
                                  {course.title}
                                </span>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnApplyReflectRepeat;
