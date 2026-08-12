"use client";

import { memo, useState } from "react";
import Image from "next/image";
import HighlightText from "@/components/shared/HighlightObserver";
const randomLogos = [
  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cocacola.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/colgate.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/epicgames.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazon.svg",
];
import { Faculty, FacultyCategory } from "@/data/faculty";

interface FacultyModelProps {
  data?: {
    eyebrow?: string;
    title?: { prefix: string; highlight: string; suffix?: string };
    subtitle?: string;
    faculty?: Faculty[];
    categories?: FacultyCategory[];
  };
}

function FacultyModel({ data }: FacultyModelProps) {
  const dynamicCategories = data?.categories || [];
  const facultyData = data?.faculty || [];
  const eyebrowText = data?.eyebrow;
  const titleData = data?.title;
  const subtitleText = data?.subtitle;

  const [activeCategory, setActiveCategory] = useState<string>(
    dynamicCategories[0]?.id || "leadership"
  );
  const [isTabSwitching, setIsTabSwitching] = useState(false);

  const filteredFaculty = facultyData.filter(
    (faculty) => faculty.category === activeCategory
  );

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === activeCategory) return;
    setIsTabSwitching(true);
    setTimeout(() => {
      setActiveCategory(categoryId);
      setTimeout(() => {
        setIsTabSwitching(false);
      }, 50);
    }, 200);
  };

  return (
    <>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <section
        className="mx-[0%] relative z-[5] bg-white text-black overflow-hidden pt-22"
        role="region"
        aria-labelledby="faculty-heading"
      >
        <div className="max-w-[85rem] w-full mx-auto">

          {/* Section Header */}
          <div className="relative text-center pb-[3.25rem] sm:pb-[3.25rem]">
            {eyebrowText && (
              <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-4 sm:mb-6">
                {eyebrowText}
              </p>
            )}

            <h2
              id="faculty-heading"
              className="leading-none text-black text-2xl sm:text-3xl md:text-[35px] font-bold pb-[17px]"
            >
              {titleData?.prefix}{" "}
              <HighlightText className="font-bold hl-px-0">
                {titleData?.highlight}
              </HighlightText>
              {titleData?.suffix ? " " + titleData.suffix : ""}
            </h2>

            {subtitleText && (
              <p className="text-black text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                {subtitleText}
              </p>
            )}
          </div>

          {/* Category Tabs */}
          <div aria-label="Faculty categories">
            <ul className="flex overflow-x-auto sm:overflow-visible scrollbar-hide sm:justify-center gap-1 sm:gap-3 md:gap-6 border-b border-gray-300">
              {dynamicCategories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-3 text-nowrap sm:px-4 py-2 transition-all focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#B30437] text-sm ${activeCategory === category.id
                      ? "text-black border-b-2 border-black font-semibold opacity-100"
                      : "text-black opacity-40 hover:opacity-80 hover:bg-gray-50"
                      }`}
                    aria-label={`${category.name} faculty`}
                    aria-pressed={activeCategory === category.id}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Faculty Members Section - Grid on desktop, horizontal scroller on mobile (1:2 peek) */}
          <div className="relative">
            <div
              className={
                /* Revert to 5 cards: lg:grid-cols-5 */
                `flex overflow-x-auto scrollbar-none sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-gray-300 transition-all duration-300 ease-out ` +
                `${isTabSwitching ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`
              }
              style={{ transition: 'opacity 200ms ease-out, transform 200ms ease-out' }}
              role="list"
              aria-label="Faculty members"
            >
              {/* Revert to 5 cards: {filteredFaculty.map((faculty) => ( */}
              {filteredFaculty.slice(0, 4).map((faculty) => (
                <article
                  key={faculty.name}
                  className="flex-shrink-0 w-[85vw] sm:w-auto hover:bg-[#F6F4F2] border-r border-b border-gray-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[651/905] overflow-hidden bg-[#F6F4F2]">
                    <Image
                      src={faculty.imageSrc}
                      alt={faculty.name}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-contain"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(FacultyModel);