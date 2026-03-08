"use client";

import { useState, memo, useRef, useEffect } from "react";
import Image from "next/image";

const immersionData = [
  {
    location: "India",
    business: {
      imageSrc: "/images/tetr/indiaMarket.webp",
      title: "Business Immersions",
      subtitle: "Gurgaon's Banjara Market",
      description: "See how street vendors often outperform startups.",
    },
    cultural: {
      imageSrc: "/images/tetr/indiaParade.webp",
      title: "Cultural Immersions",
      subtitle: "Republic Day Parade",
      description: "Witness spectacular cultural pageantry in New Delhi.",
    },
  },
  {
    location: "United States",
    business: {
      imageSrc: "/images/tetr/usGoogle.webp",
      title: "Business Immersions",
      subtitle: "Googleplex",
      description: "Peek into research and upcoming products.",
    },
    cultural: {
      imageSrc: "/images/tetr/usNasdaq.webp",
      title: "Cultural Immersions",
      subtitle: "NASDAQ, NYC",
      description: "Witness a live IPO ceremony.",
    },
  },
  {
    location: "Canada",
    business: {
      imageSrc: "/images/tetr/arGrobo.webp",
      title: "Business Immersions",
      subtitle: "Los Grobo HQ",
      description: "See how agribusiness drives innovation.",
    },
    cultural: {
      imageSrc: "/images/tetr/arFootball.webp",
      title: "Cultural Immersions",
      subtitle: "La Bombonera",
      description: "Immerse in Argentina's football passion.",
    },
  },
  {
    location: "Saudi Arabia",
    business: {
      imageSrc: "/images/tetr/dubaiEmirates.webp",
      title: "Business Immersions",
      subtitle: "Dubai World Expo",
      description: "Explore global trade and luxury at the Expo and Gold Souk.",
    },
    cultural: {
      imageSrc: "/images/tetr/dubaiSafari.webp",
      title: "Cultural Immersions",
      subtitle: "Desert Safari",
      description: "Experience a traditional safari and Bedouin dinner.",
    },
  },
  {
    location: "Dubai",
    business: {
      imageSrc: "/images/tetr/dubaiEmirates.webp",
      title: "Business Immersions",
      subtitle: "Dubai World Expo",
      description: "Explore global trade and luxury at the Expo and Gold Souk.",
    },
    cultural: {
      imageSrc: "/images/tetr/dubaiSafari.webp",
      title: "Cultural Immersions",
      subtitle: "Desert Safari",
      description: "Experience a traditional safari and Bedouin dinner.",
    },
  },
  {
    location: "Qatar",
    business: {
      imageSrc: "/images/tetr/dubaiEmirates.webp",
      title: "Business Immersions",
      subtitle: "Dubai World Expo",
      description: "Explore global trade and luxury at the Expo and Gold Souk.",
    },
    cultural: {
      imageSrc: "/images/tetr/dubaiSafari.webp",
      title: "Cultural Immersions",
      subtitle: "Desert Safari",
      description: "Experience a traditional safari and Bedouin dinner.",
    },
  },
  {
    location: "Singapore",
    business: {
      imageSrc: "/images/tetr/singSkyline.webp",
      title: "Business Immersions",
      subtitle: "MAS, Singapore",
      description: "Explore Singapore's financial horizon.",
    },
    cultural: {
      imageSrc: "/images/tetr/singVip.webp",
      title: "Cultural Immersions",
      subtitle: "National Day",
      description: "Grand parades and fireworks on Aug 9.",
    },
  },
];

const FALLBACK_IMAGE = "/images/placeholder.webp";

const SLIDE_WIDTH_PERCENT = 100; // For mobile slides
const STEP = 100;


function WorldImmersion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offsetPercent, setOffsetPercent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slidesContainerRef = useRef<HTMLDivElement>(null);

  const handleLocationClick = (index: number) => {
    if (index === activeIndex) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      // Reset slider when changing location
      if (slidesContainerRef.current?.parentElement) {
        slidesContainerRef.current.parentElement.scrollLeft = 0;
      }
      setIsTransitioning(false);
    }, 300);
  };

  const changeSlide = (direction: number): void => {
    if (isAnimating) return;
    const scrollContainer = slidesContainerRef.current?.parentElement;
    if (!scrollContainer) return;

    setIsAnimating(true);
    const scrollAmount = scrollContainer.clientWidth;
    const targetScroll = scrollContainer.scrollLeft + (direction * scrollAmount);

    scrollContainer.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToSlide = (n: number): void => {
    if (isAnimating) return;
    const scrollContainer = slidesContainerRef.current?.parentElement;
    if (!scrollContainer) return;

    setIsAnimating(true);
    const targetScroll = n * scrollContainer.clientWidth;

    scrollContainer.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const scrollContainer = slidesContainerRef.current?.parentElement;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const activeIdx = Math.round(scrollContainer.scrollLeft / scrollContainer.clientWidth);
      setCurrentIndex(activeIdx);
      const newOffset = scrollContainer.scrollLeft > 1 ? (scrollContainer.scrollLeft / scrollContainer.clientWidth) * 100 : 0;
      setOffsetPercent(newOffset);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const getSafeImageSrc = (imageSrc: string) => {
    return imageSrc && imageSrc.trim() !== "" ? imageSrc : FALLBACK_IMAGE;
  };

  const active = immersionData[activeIndex] || immersionData[0];

  return (
    <section className="bg-white text-black pt-16 isolate mx-[0%]">
      {/* Header Section */}
      <div className="max-w-[85rem] mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="leading-normal text-[35px] font-semibold text-black">
            Intranship,{" "}
            <span className="relative inline-block mx-2">
              {/* IMAGE BEHIND TEXT */}
              <img
                src="/rojor1.svg"
                alt="rojor1"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full scale-x-400 scale-y-150 pt-8 pointer-events-none"
              />

              {/* TEXT ABOVE IMAGE */}
              <span
                className="relative z-10 text-[#B30437] font-medium px-3"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 700 }}
              >
                Across the World
              </span>
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Global business and culture — 7 countries, 1 program.
          </p>
        </div>

        {/* Location Navigation - Horizontal at top */}
        <div aria-label="Locations">
          <ul className="flex overflow-scroll scrollbar-hide sm:justify-center gap-1 sm:gap-3 md:gap-6">
            {immersionData.map((d, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={d.location}>
                  <button
                    type="button"
                    onClick={() => handleLocationClick(i)}
                    className={`px-3 text-nowrap sm:px-4 py-2 transition-all focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#B30437] text-sm ${isActive
                      ? "text-black border-b-2 border-black"
                      : "text-gray-700 hover:bg-gray-50"
                      }`}
                    aria-label={`${d.location} immersion`}
                    aria-pressed={isActive}
                  >
                    {d.location}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Content Section  */}
        <div className="w-full relative group">
          <div
            className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"
              }`}
          >
            {/* Wrapper for slider and buttons */}
            <div className="relative w-full">
              {/* Scrolling Container */}
              <div className="w-full overflow-x-auto lg:overflow-x-visible scrollbar-hide snap-x snap-mandatory lg:snap-none scroll-smooth">
                {/* Cards Flex Container - Justified & Centered */}
                <div
                  ref={slidesContainerRef}
                  className="w-full flex flex-nowrap lg:flex-nowrap justify-start lg:justify-center "
                >
                  {[
                    { type: "biz", data: active.business },
                    { type: "cul", data: active.cultural },
                    { type: "biz-repeat", data: active.business },
                    { type: "cul-repeat", data: active.cultural },
                  ].map((item, index) => (
                    <article
                      key={`${item.type}-${activeIndex}`}
                      className="flex flex-col shrink-0 lg:shrink bg-white border border-b-0 border-l-0 last:border-r-0 border-gray-300 p-8 min-h-[420px] lg:min-h-[480px] w-[85vw] sm:w-[calc(50%-1.5rem)] lg:flex-1 snap-center lg:snap-align-none hover:shadow-sm transition-shadow"
                    >
                      <div className="w-full mb-4">
                        <div className="relative w-40 h-28 overflow-hidden bg-gray-50">
                          <Image
                            src={getSafeImageSrc(item.data.imageSrc)}
                            alt={`${item.data.title} — ${item.data.subtitle}`}
                            fill
                            sizes="160px"
                            className="object-cover"
                            loading={activeIndex === 0 && index < 2 ? undefined : "lazy"}
                            quality={75}
                          />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-start">
                        <h3 className="text-xl font-medium text-black mb-8 leading-tight">
                          {item.data.title}
                        </h3>
                        <p className="">
                          {item.data.description}
                        </p>
                        {/* <p className="text-sm text-gray-500 leading-relaxed font-light mt-a uto">
                          {item.data.description}
                        </p> */}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons (Visible on Mobile/Tablet if overflow exists) */}
              <div className="lg:hidden">
                <div className="absolute top-1/2 -translate-y-1/2 -left-2 sm:left-0 z-20">
                  {offsetPercent > 0 && (
                    <button
                      onClick={() => changeSlide(-1)}
                      disabled={isAnimating}
                      className="w-10 h-10 rounded-full bg-[#B30437] text-white shadow-lg flex items-center justify-center transition-opacity"
                      aria-label="Previous slide"
                      type="button"
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-2 sm:right-0 z-20">
                  {currentIndex < 3 && (
                    <button
                      onClick={() => changeSlide(1)}
                      disabled={isAnimating}
                      className="w-10 h-10 rounded-full bg-[#B30437] text-white shadow-lg flex items-center justify-center transition-opacity"
                      aria-label="Next slide"
                      type="button"
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {[0, 1, 2, 3].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      type="button"
                      className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? "bg-[#B30437] w-4" : "bg-gray-300"
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(WorldImmersion);
