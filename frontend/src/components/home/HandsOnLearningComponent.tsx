"use client";

import React, { useState, useEffect, useRef, memo, useCallback } from "react";
import Image from "next/image";
import HighlightText from "@/components/shared/HighlightObserver";
import styles from "./HandsOnLearningComponent.module.css";

import { categories, contentData, specializationToolMap, specializationTechniqueMap, type CategoryKey, type ProgramData } from "@/data/hands-on-learning-data";
const MenuItem = memo<{
  category: CategoryKey;
  index: number;
  isActive: boolean;
  onClick: () => void;
}>(({ category, index, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 w-auto lg:w-full flex justify-center lg:border-b border-r lg:border-r-0 border-[#efefef] px-4 sm:px-[15px] py-2 sm:py-3 transition-colors ${isActive
        ? "bg-[#F6F4F2] lg:bg-[#F6F4F2] border-l-4 lg:border-l-4 lg:border-l-[#B30437]"
        : "bg-white lg:hover:bg-gray-50"
        }`}
      aria-pressed={isActive}
      type="button"
    >
      <div className="flex-1 text-left min-w-0">
        <p
          className={`uppercase tracking-wider font-semibold text-[10px] sm:text-[10px] transition-colors ${isActive ? "text-black lg:text-black" : "text-gray-500 lg:text-gray-500"
            }`}
        >
          Module {index + 1}
        </p>
        <div
          className={`font-semibold text-[11px] sm:text-[14px] lg:text-[16px] transition-colors whitespace-nowrap lg:whitespace-normal ${isActive ? "text-black lg:text-black" : "text-gray-500 lg:text-gray-500"
            }`}
        >
          {category}
        </div>
      </div>
    </button>
  );
});

MenuItem.displayName = "MenuItem";

// Content Card Component
const ContentCard = memo<{
  category: CategoryKey;
  index: number;
  activeIndex: number;
  slideDistance: number;
  fadeThreshold: number;
  zoomOutAmount: number;
  fadeAmount: number;
  contentData: Record<string, ProgramData>;
}>(
  ({
    category,
    index,
    activeIndex,
    slideDistance,
    fadeThreshold,
    zoomOutAmount,
    fadeAmount,
    contentData,
  }) => {
    const currentCardIndex = Math.floor(activeIndex);
    const nextCardIndex = currentCardIndex + 1;
    const scrollProgress = activeIndex - currentCardIndex;

    const isCurrentCard = index === currentCardIndex;
    const isNextCard = index === nextCardIndex;
    const isVisible = isCurrentCard || isNextCard;

    let yPosition = 0;
    let opacity = 1;
    let zIndex = 1000;
    let scale = 1;

    if (isCurrentCard) {
      yPosition = 0;
      zIndex = 1010;

      if (scrollProgress > fadeThreshold) {
        const fadeProgress =
          (scrollProgress - fadeThreshold) / (1 - fadeThreshold);
        scale = 1 - fadeProgress * zoomOutAmount;
        opacity = 1 - fadeProgress * fadeAmount;
      } else {
        scale = 1;
        opacity = 1;
      }
    } else if (isNextCard) {
      yPosition = slideDistance * (1 - scrollProgress);
      opacity = 1;
      zIndex = 1020;
      scale = 1;
    } else if (index > currentCardIndex) {
      yPosition = slideDistance;
      opacity = 0;
      zIndex = 1000 - (index - currentCardIndex);
      scale = 1;
    } else {
      yPosition = -8 * (currentCardIndex - index);
      opacity = 0;
      zIndex = 1000 - (currentCardIndex - index);
      scale = 1;
    }
    const allTools = contentData[category]?.tools || [];

    const specializations = contentData[category]?.specializations || [];
    const [activeSpec, setActiveSpec] = useState(specializations[0]);

    const getToolsForSpecialization = (spec: string) => {
      const allowedToolNames = specializationToolMap[spec] || [];
      return allTools.filter((tool) => allowedToolNames.includes(tool.name));
    };
    const allTechniques = contentData[category]?.techniques || [];

    const getTechniquesForSpecialization = (spec: string) => {
      const allowedNames = specializationTechniqueMap[spec] || [];
      return allTechniques.filter((tech) => allowedNames.includes(tech.name));
    };

    return (
      <div
        className={`absolute w-full h-full flex items-start justify-center ${styles.handsOnCardContainer}`}
        style={{
          transform: `translateY(${yPosition}px)`,
          opacity: isVisible ? opacity : 0,
          zIndex,
          pointerEvents: isVisible ? "auto" : "none",
          inset: "0",
        }}
      >
        <div
          className={`w-full max-w-5xl bg-white overflow-hidden mx-2 sm:mx-auto ${styles.handsOnCardScale} flex flex-col sm:flex-row ${isNextCard ? 'shadow-[0_-10px_10px_-10px_rgba(0,0,0,0.05)]' : ''}`}
          style={{
            transform: `scale(${scale})`,
            height: "calc(100dvh - 2rem)",
            maxHeight: "calc(100dvh - 2rem)",
          }}
        >
          {/* Mobile Image - Horizontal at top (visible only on mobile) */}
          <div className="block sm:hidden w-full h-40 flex-shrink-0 overflow-hidden bg-gray-100">
            <Image
              src={
                contentData[category]?.image ||
                ""
              }
              alt={`Visual representation of ${contentData[category]?.title || category
                } program`}
              width={640}
              height={160}
              className="w-full h-full object-cover object-top"
              priority={index <= 2}
            />
          </div>




          {/* Left Section - Vertical Image (hidden on mobile) */}
          <div className="hidden sm:block sm:w-[23%] flex-shrink-0 overflow-hidden h-full">
            <Image
              src={
                contentData[category]?.image ||
                ""
              }
              alt={`Visual representation of ${contentData[category]?.title || category
                } program`}
              width={300}
              height={400}
              className="w-full h-full object-cover"
              priority={index <= 2}
            />
          </div>
          {/* Right Section - Content */}
          <div className="w-full sm:w-4/5 flex flex-col overflow-hidden">
            <div className="p-2 sm:p-3 md:p-4 lg:p-6 h-full flex flex-col overflow-hidden">
              {/* Program Header */}
              <div className="inline-flex">
                <div className="items-center gap-1.5 bg-black text-white px-2 py-1 text-[12px] font-semibold mb-2">
                  {contentData[category]?.month}
                </div>
                <p className="text-[14px] leading-none mb-2 bg-black text-white font-bold">.</p>
                <div className="items-center gap-1.5 bg-black text-white px-2 py-1 text-[12px] font-semibold mb-2">
                  {contentData[category]?.achievement}
                </div></div>
              <div className="mb-1 sm:mb-2 flex-shrink-0 relative">
                {(() => {
                  try {
                    // eslint-disable-next-line @typescript-eslint/no-var-requires
                    const InsideHeading =
                      require("../shared/InsideHeading").default;
                    return (
                      <InsideHeading
                        title={contentData[category]?.title}
                        description={
                          contentData[category]?.description
                        }
                      />
                    );
                  } catch {
                    return (
                      <>
                        <h3 className="text-base sm:text-xl md:text-2xl font-bold text-black mb-1">
                          {contentData[category]?.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                          {contentData[category]?.description}
                        </p>
                      </>
                    );
                  }
                })()}

              </div>

              {/* Category-Specific Content */}

              <div className="space-y-2 sm:space-y-3 md:space-y-4 flex-1 overflow-y-auto min-h-0 scrollbar-hide">
                {contentData[category]?.specializationTracks && contentData[category] && (
                  <section
                    aria-labelledby="specialization-heading"
                    className="bg-white rounded-xl"
                  >
                    <div>
                      <ol className="list-decimal list-inside flex flex-wrap gap-x-2 gap-y-1 text-[10px] font-semibold tracking-wide text-black mb-1">
                        {contentData[category].specializationTracks?.map(
                          (track) => (
                            <li
                              key={track}
                              className=" inline-flex border-1 border-black px-2 py-0.5  w-max whitespace-nowrap"
                            >
                              {track}
                            </li>
                          ),
                        )}
                      </ol>

                      {/* <p className="text-[10px] text-[#5f6368] italic">
                        Students build complex systems and applications in their
                        chosen track.
                      </p> */}
                    </div>

                    {/* ================= PART 2: PROJECTS ================= */}
                    <div>

                      <div
                        className="gap-3 pt-4 overflow-y-auto"
                        role="list"
                        aria-label="Live 100% job-ready based curriculum"
                      >
                        {contentData[category].projects?.map((project) => (

                          <div
                            key={project.name}
                            role="listitem"
                            className="flex-shrink-0 pb-2 w-auto"
                          >
                            <div className="flex">

                              <img
                                src="/Charters-icon/group-r-dot.svg"
                                alt=""
                                className="w-3 h-3 mt-[3px] object-cover flex-shrink-0"
                              />

                              <div className="pl-2">
                                <h5 className="text-[14px] pb-1 font-semibold text-gray-900">
                                  {project.name}
                                </h5>
                                <p className="text-[12px] pb-2 text-gray-600 leading-tight pb-1">
                                  {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-1 w-full">
                                  {project.chips?.map((chip, chipIdx) => (
                                    <div
                                      key={chipIdx}
                                      className={`${chip.color || project.color} w-auto flex-shrink-0 flex items-center gap-2`}
                                    >
                                      {chip.icon && (
                                        chip.isImage ? (
                                          <div className="w-8 h-8 overflow-hidden flex-shrink-0">
                                            <img
                                              src={chip.icon}
                                              alt=""
                                              className="w-full h-full object-cover"
                                              style={{ objectPosition: "top", transform: "scale(1.4)", transformOrigin: "top center" }}
                                            />
                                          </div>
                                        ) : (
                                          <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                                            <img
                                              src={chip.icon}
                                              alt=""
                                              className="w-full h-full object-contain"
                                            />
                                          </div>
                                        )
                                      )}
                                      {(chip.text || chip.secondText) && (
                                        <div className="min-w-0">
                                          {chip.text && (
                                            <p className="text-[12px] font-semibold text-gray-900 ">
                                              {chip.text}
                                            </p>
                                          )}
                                          {chip.secondText && (
                                            <p className="text-[12px] text-gray-600 ">
                                              {chip.secondText}
                                            </p>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>

                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ================= PART 3: SKILLS ================= */}

                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-[#5f6368] mb-3">
                      <p className="text-[14px} text-black font-semibold">Job-Ready Skills:</p>
                      {contentData[category].skills?.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>

                  </section>
                )}

                {contentData[category]?.specializations && contentData[category] && (
                  <section className="flex flex-col gap-3  ">
                    {/* ===== BADGE ===== */}
                    <div className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 px-2 py-1 rounded text-[10px] font-medium w-fit ">
                      Students choose one of the following specialization
                      tracks
                    </div>

                    {/* ===== SPECIALIZATION TABS ===== */}
                    <div className="flex overflow-x-auto gap-1.5 pb-1 scrollbar-hide">
                      {specializations.map((spec) => {
                        const isActive = spec === activeSpec;

                        return (
                          <button
                            key={spec}
                            onClick={() => setActiveSpec(spec)}
                            className={`flex-shrink-0 px-2 py-1 max-w-[160px] border-b-2 transition-all duration-300 hover:-translate-y-1 cursor-pointer
                                ${isActive
                                ? "border-b-gray-500 bg-white"
                                : "border-b-transparent bg-gray-50 hover:border-b-gray-300"
                              }`}
                          >
                            <p className="text-[10px] text-[#5f6368] leading-snug line-clamp-2 text-left">
                              {spec}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    {/* ===== TOOLS (DYNAMIC, CORRECT) ===== */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {getToolsForSpecialization(activeSpec).map((tool) => {
                        return (
                          <div
                            key={tool.name}
                            className="bg-[#01212c] text-white px-2 py-1 rounded-full text-[13px] flex items-center gap-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                          >
                            <Image src={tool.icon} alt={tool.name} width={12} height={12} className="w-4 h-4" />
                            <span>{tool.name}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* ===== TECHNIQUES ===== */}
                    <div>
                      <h4 className="text-[11px] font-semibold text-black mb-1">
                        Techniques
                      </h4>

                      <div className="grid grid-cols-4 gap-1.5">
                        {getTechniquesForSpecialization(activeSpec).map(
                          (tech) => {
                            return (
                              <div
                                key={tech.name}
                                className="border border-gray-200 rounded-md p-1.5 text-center"
                              >
                                <div className="mb-0.5 flex justify-center">
                                  <Image src={tech.icon} alt={tech.name} width={12} height={12} className="w-5 h-5 text-[#5f6368]" />
                                </div>
                                <p className="text-[10px] text-[#5f6368] leading-tight">
                                  {tech.name}
                                </p>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>

                    {/* ===== PROJECTS ===== */}

                    <div>
                      {/* Header */}
                      <div className="flex items-center gap-1.5 mb-2 text-green-700 text-[11px] font-semibold">
                        <span>✅</span>
                        <span>High-impact projects</span>
                      </div>

                      {/* Horizontal Cards */}
                      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {contentData[category]?.projects?.map((project) => (
                          <div key={project.name} className="flex-shrink-0 w-[180px]">
                            <h5 className="text-[10px] font-semibold text-gray-900 h-[28px] leading-tight mb-1 line-clamp-2">
                              {project.name}
                            </h5>
                            <div
                              className={`${project.color} h-[96px] rounded-lg flex items-center justify-center`}
                            >
                              <span className="text-3xl">{project.icon}</span>
                            </div>
                            <p className="text-[9px]">
                              {project.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {/* Call-to-Action Button */}
                {!contentData[category]?.specializationTracks && (
                  <div className="mt-auto pt-2 sm:pt-3 md:pt-4 flex-shrink-0">
                    <button
                      className={`bg-[#B30437] hover:bg-[#8B0329] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-base ${styles.handsOnCtaButton} flex items-center space-x-2`}
                      aria-label={`View all ${category} details`}
                      type="button"
                    >
                      <span>Explore {category}</span>
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ContentCard.displayName = "ContentCard";

function HandsOnLearningComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [shouldMenuScroll, setShouldMenuScroll] = useState(false);

  // Refs for performance-critical values
  const rafId = useRef<number | null>(null);
  const lastProgress = useRef(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowHeight(window.innerHeight);
    const onResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const currentItemIndex = Math.round(activeIndex);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      // Cancel any pending animation frame to prevent buildup
      if (rafId.current !== null) {
        return; // Already waiting for next frame
      }

      rafId.current = requestAnimationFrame(() => {
        if (!containerRef.current) {
          rafId.current = null;
          return;
        }

        const rect = containerRef.current.getBoundingClientRect();
        const height = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        const relativeTop = rect.top;
        const relativeBottom = rect.top + height;

        if (relativeTop <= 0 && relativeBottom >= windowHeight) {
          const scrollableHeight = Math.max(1, height - windowHeight);
          const currentScroll = Math.abs(relativeTop);
          const progress = Math.max(
            0,
            Math.min(1, currentScroll / scrollableHeight),
          );

          const smoothActiveIndex = progress * (categories.length - 1);

          const diff = Math.abs(progress - lastProgress.current);
          if (diff > 0.0005) {
            setActiveIndex(smoothActiveIndex);
            lastProgress.current = progress;

            const isNearLastCard = smoothActiveIndex >= categories.length - 1.2;
            setShouldMenuScroll(isNearLastCard);
          }
        }

        rafId.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [mounted, categories.length]);

  // Auto-scroll mobile navigation to center active month
  useEffect(() => {
    if (!mobileNavRef.current || !mounted) return;

    const activeButton = mobileNavRef.current.querySelector(
      `button:nth-child(${currentItemIndex + 1})`,
    ) as HTMLElement;

    if (activeButton) {
      const container = mobileNavRef.current;
      const buttonLeft = activeButton.offsetLeft;
      const buttonWidth = activeButton.offsetWidth;
      const containerWidth = container.offsetWidth;

      // Calculate scroll position to center the button
      const scrollPosition = buttonLeft - containerWidth / 2 + buttonWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentItemIndex, mounted]);

  const handleMenuClick = useCallback(
    (targetIndex: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top;
      const windowHeight = window.innerHeight;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollableHeight = containerHeight - windowHeight;

      const targetProgress = targetIndex / (categories.length - 1);
      const targetScrollOffset = targetProgress * scrollableHeight;
      const finalScrollPosition = absoluteTop + targetScrollOffset;

      window.scrollTo({
        top: finalScrollPosition,
        behavior: "smooth",
      });
    },
    [categories.length],
  );

  if (!mounted) {
    return null;
  }

  return (
    <section className="mx-[0%] relative">
      {/* Header Section  */}
      <div
        className="relative z-[5] flex items-start justify-center py-2 sm:py-3 md:py-4 lg:py-5 bg-white"
        role="region"
        aria-labelledby="hands-on-heading"
      >
        <div className="w-full max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="relative text-center" role="article">
            {/* Title Section */}
            <div className="">
              <p
                className="text-sm font-semibold text-[#B30437] tracking-wider pb-2 sm:pb-3 md:pb-4"
                role="text"
              >
                TRANSFORM FRESHER TAG - BE TOP 1%
              </p>
              <h2
                id="hands-on-heading"
                className="leading-none text-black text-2xl sm:text-3xl md:text-[35px] font-bold pb-[17px]"
              >
                Real Clients.
                <HighlightText className="mx-1 sm:mx-2 font-bold">
                  Real Problems.
                </HighlightText>
                Real Impact.
              </h2>
            </div>

            {/* Description */}
            <div className="flex flex-col items-start sm:flex-row sm:flex-wrap sm:justify-center sm:items-center gap-3 sm:gap-6 mb-2 sm:mb-4 w-fit mx-auto sm:w-full">
              <h3 className="text-base px-[20px] md:px-[50px] lg:px-[70px] sm:text-lg text-[#5f6368]">
                <strong>7 months</strong>. <strong>Paid internship</strong> at global companys. <strong>AI-powered</strong> curriculum. Corporate <strong>English training</strong>. <strong>1:1</strong> Profile base career mentorship. Work around <strong>7 countries</strong>. <strong>1,257+ companies</strong>.

              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Container */}
      <div
        ref={containerRef}
        className={`relative ${styles.handsOnContainer}`}
        style={{
          "--category-count": categories.length,
          height: `${categories.length * 100}vh`,
        } as React.CSSProperties}
      >
        <div
          className={`sticky flex flex-col h-dvh sm:h-screen ${styles.handsOnStickyTransition} ${shouldMenuScroll ? "top-0" : "top-12 sm:top-16"
            }`}
        >


          <div className="w-full max-w-[85rem] lg:border-t border-gray-200 mx-auto flex flex-col lg:flex-row flex-1 min-h-0">
            {/* Left Section - menu (Unified for Mobile & Desktop) */}
            <div className="w-full lg:w-1/4 relative lg:border-r border-gray-300 flex-shrink-0 lg:flex-shrink">
              <div ref={menuRef} className="flex flex-col h-full">
                <div className="flex-1 flex flex-col">
                  {/* Header */}
                  <div className="mb-6 pt-4 hidden lg:block">
                    {/* <h3 className="text-xl font-light text-black mb-2">
                      100+ Top MNC's in class
                    </h3> */}
                    <div className="mb-3">
                      <Image
                        src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1784539836/charters-faculty-member_tlvkib.avif"
                        alt="Charters Faculty Member"
                        width={300}
                        height={104}
                        className="h-22 w-full p-[7px] object-contain rounded"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                    <p className="text-[#80868b] text-xs pl-4">
                      Built by Harvard Scholars, Led by Industry...
                    </p>
                  </div>

                  <div
                    ref={mobileNavRef}
                    className="flex lg:flex-col overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto scrollbar-hide border-b border-gray-200 lg:border-b-0"
                    aria-label="Program navigation"
                  >
                    {categories.map((category, index) => (
                      <MenuItem
                        key={category}
                        category={category}
                        index={index}
                        isActive={index === currentItemIndex}
                        onClick={() => handleMenuClick(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-3/4 relative">
              <div className="h-full overflow-visible bg-white relative">
                {categories.map((category, index) => (
                  <ContentCard
                    key={category}
                    category={category}
                    index={index}
                    activeIndex={activeIndex}
                    slideDistance={windowHeight ? windowHeight + 50 : 1000}
                    fadeThreshold={0.4}
                    zoomOutAmount={0.2}
                    fadeAmount={0.2}
                    contentData={contentData}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(HandsOnLearningComponent);

