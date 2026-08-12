"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import HighlightText from "../shared/HighlightObserver";

import { Student, StudentCategory } from "@/data/students";

interface StudentModelProps {
  data?: {
    eyebrow?: string;
    title?: { prefix: string; highlight: string; suffix?: string };
    subtitle?: string;
    categories?: StudentCategory[];
    students?: Student[];
  };
}

function StudentModel({ data }: StudentModelProps) {
  const dynamicCategories = data?.categories || [];
  const studentsData = data?.students || [];
  const eyebrowText = data?.eyebrow;
  const titleData = data?.title;
  const subtitleText = data?.subtitle;

  // Set initial category dynamically to the first available category
  const initialCategory = dynamicCategories.length > 0 ? dynamicCategories[0].id : "jul";
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  // Sync the active category dynamically if the categories list changes (e.g. course switch)
  const categoriesKey = dynamicCategories.map((c: StudentCategory) => c.id).join(",");
  useEffect(() => {
    if (dynamicCategories.length > 0) {
      setActiveCategory(dynamicCategories[0].id);
    }
  }, [categoriesKey]);

  const tabIds = dynamicCategories.map((c: StudentCategory) => c.id);
  const filteredStudents = studentsData.filter(
    (s: Student) =>
      s.category === activeCategory ||
      (!tabIds.includes(s.category) && s.courseCategory === activeCategory)
  );

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === activeCategory) return;
    setActiveCategory(categoryId);
  };

  return (
    <>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section
        className="relative z-[5] bg-white text-black pb-12 overflow-x-hidden pt-22"
        role="region"
        aria-labelledby="students-heading"
      >
        <div className="max-w-[85rem] w-full mx-auto">
          {/* Header */}
          <div className="relative text-center pb-[3.25rem]">
            {eyebrowText && (
              <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-4 sm:mb-6">
                {eyebrowText}
              </p>
            )}
            <h2
              id="students-heading"
              className="leading-none text-black text-2xl sm:text-3xl md:text-[35px] font-bold pb-[17px]"
            >
              {titleData?.prefix}{" "}
              <HighlightText className="font-bold hl-px-0">{titleData?.highlight}</HighlightText>
              {titleData?.suffix ? " " + titleData.suffix : ""}
            </h2>
            {subtitleText && (
              <p className="text-black px-[20px] md:px-[50px] lg:px-[70px] text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                {subtitleText}
              </p>
            )}
          </div>

          {/* Tabs */}
          <div aria-label="Student batch categories">
            <ul className="flex overflow-scroll scrollbar-hide sm:justify-center gap-1 sm:gap-3 md:gap-6 border-b border-gray-300">
              {dynamicCategories.map((category: StudentCategory) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-3 text-nowrap sm:px-4 py-2 transition-all text-sm ${activeCategory === category.id
                      ? "text-black border-b-2 border-black font-semibold opacity-100"
                      : "text-black opacity-40 hover:opacity-80 hover:bg-gray-50"
                      }`}
                    aria-pressed={activeCategory === category.id}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile: horizontal scroller with snap and 1:2 peek */}
          <div className="sm:hidden overflow-x-auto scrollbar-hide flex snap-x snap-mandatory">
            {filteredStudents.map((student: Student) => (
              <article key={student.id} className="snap-start w-[85vw] border-r border-b border-gray-200 hover:bg-[#F6F4F2] flex-shrink-0 flex flex-col">
                <div className="w-full">
                  <Image src={student.imageSrc} alt={student.name} width={500} height={600} className="w-full h-auto object-contain" loading="lazy" />
                </div>

                <div className="p-4 ">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-bold text-black text-base">{student.name}</h3>
                    <a href={student.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={student.name + " LinkedIn"}>
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-[#5f6368] text-xs mb-3">Batch - {student.batch} • {student.city}</p>
                  <hr className="border-gray-200 mt-3 mb-3" />

                  <div className="mb-2">
                    <p className="text-[10px] font-bold text-[#5f6368] uppercase tracking-wider mb-0.5">Internship</p>
                    <p className="text-xs text-[#5f6368] leading-relaxed line-clamp-2">{student.internship}</p>
                  </div>

                  <div className="mb-2">
                    <p className="text-[10px] font-bold text-[#5f6368] uppercase tracking-wider mb-0.5">Research Paper</p>
                    <p className="text-xs text-[#5f6368] leading-relaxed line-clamp-2">{student.researchPaper}</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-[#5f6368] uppercase tracking-wider mb-0.5">Case Studies</p>
                    <p className="text-xs text-[#5f6368] leading-relaxed line-clamp-2">{student.caseStudies}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Desktop: grid layout */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 border-l border-gray-200">
            {filteredStudents.map((student: Student) => (
              <article key={student.id} className="w-full overflow-hidden border-r border-b border-gray-200 hover:bg-[#F6F4F2] flex flex-col">
                <div className="w-full">
                  <Image src={student.imageSrc} alt={student.name} width={500} height={600} className="w-full h-auto object-contain" loading="lazy" />
                </div>

                <div className="p-4 ">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-bold text-black text-base">{student.name}</h3>
                    <a href={student.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={student.name + " LinkedIn"}>
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-[#5f6368] text-xs mb-3">Batch - {student.batch} • {student.city}</p>
                  <hr className="border-gray-200 mt-3 mb-3" />

                  <div className="mb-2">
                    <p className="text-[10px] font-bold text-[#5f6368] uppercase tracking-wider mb-0.5">Internship</p>
                    <p className="text-xs text-[#5f6368] leading-relaxed line-clamp-2">{student.internship}</p>
                  </div>

                  <div className="mb-2">
                    <p className="text-[10px] font-bold text-[#5f6368] uppercase tracking-wider mb-0.5">Research Paper</p>
                    <p className="text-xs text-[#5f6368] leading-relaxed line-clamp-2">{student.researchPaper}</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-[#5f6368] uppercase tracking-wider mb-0.5">Case Studies</p>
                    <p className="text-xs text-[#5f6368] leading-relaxed line-clamp-2">{student.caseStudies}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* 100+ more students strip — below the cards */}
          {filteredStudents.length > 0 && (
            <div className="flex items-center justify-center gap-2 pt-8">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B30437]" />
              <p className="text-xs sm:text-sm text-gray-700">
                <span className="font-extrabold text-[#B30437]">100+</span>{" "}
                <span className="font-medium">more students placed &amp; growing</span>
              </p>
              <span className="h-1.5 w-1.5 rounded-full bg-[#B30437]" />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default memo(StudentModel);