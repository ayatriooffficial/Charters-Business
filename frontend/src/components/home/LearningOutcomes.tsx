'use client';

import { useState, useRef, memo } from 'react';
import Image from 'next/image';
import HighlightText from '../shared/HighlightObserver';

interface ImageData {
  src: string;
  caption: string;
}

interface LearningOutcomeData {
  title: string;
  description: string;
  highlight: string;
  subtitle: string;
  outcomes: string[];
  images: ImageData[];
  salaryTable?: {
    headers: string[];
    rows: {
      role: string;
      entry: string;
      mid: string;
      senior: string;
    }[];
  };
  mainImage?: string;
}

interface LearningOutcomesProps {
  data?: any;
}

function LearningOutcomes({ data }: LearningOutcomesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const contentData: LearningOutcomeData[] = data?.items && Array.isArray(data.items)
    ? data.items
    : [];

  const handleMenuClick = (index: number) => {
    if (index === activeIndex) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 300);

    try {
      if (scrollContainerRef?.current) {
        const el = scrollContainerRef.current;
        const target = el.children[activeIndex] as HTMLElement | undefined;
        el.scrollTo({
          top: target ? target.offsetTop : index * 120,
          behavior: 'smooth',
        });
      }
    } catch {
      // scrollContainerRef may be absent in some bundles; ignore silently
    }

    setTimeout(() => setIsTransitioning(false), 500);
  };

  const activeContent = contentData[activeIndex];

  return (
    <section className="bg-white text-black pt-16 isolate">
      <div className="w-full">
        {/* Header Section */}
        <div className="text-center mb-13 sm:mb-14">
          {data?.comparisonTable && (
            <div className="mb-16 mt-8">
              <p className="text-sm font-semibold text-gray-500 tracking-wider mb-2 uppercase text-center">{data.comparisonTable.subtitle}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">{data.comparisonTable.title}</h2>
              <div className="overflow-x-auto rounded-lg">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      {data.comparisonTable.headers.map((header: string, i: number) => (
                        <th
                          key={i}
                          className={`p-2 sm:p-3 md:p-4 font-semibold text-[10px] sm:text-xs md:text-sm ${i === 1
                              ? 'bg-[#B30437] text-white w-[45%] border-t-2 border-x-2 border-t-[#B30437] border-l-[#B30437] border-r-[#B30437]'
                              : i === 0
                                ? 'bg-transparent w-[25%] border-b border-gray-200'
                                : 'bg-gray-50 text-gray-700 w-[30%] border-t border-x border-gray-200 border-b'
                            }`}
                        >
                          {i === 0 ? null : header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.comparisonTable.rows.map((row: any, i: number) => {
                      const isLastRow = i === data.comparisonTable.rows.length - 1;
                      return (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className={`p-2 sm:p-3 md:p-4 text-gray-700 font-medium text-[10px] sm:text-xs md:text-sm w-10 md:w-auto border-x border-gray-200 ${isLastRow ? 'border-b' : 'border-b'} border-t-0`}>
                            <div className="flex items-center justify-center md:justify-start gap-3">
                              <Image src={row.icon} alt={row.parameter} width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                              <span className="hidden md:inline whitespace-nowrap">{row.parameter}</span>
                            </div>
                          </td>
                          <td className={`p-2 sm:p-3 md:p-4 font-medium bg-white text-[#B30437] text-[10px] sm:text-xs md:text-sm border-x-2 border-l-[#B30437] border-r-[#B30437] ${isLastRow ? 'border-b-2 border-b-[#B30437]' : 'border-b border-b-gray-200'}`}>{row.column1}</td>
                          <td className={`p-2 sm:p-3 md:p-4 text-gray-600 text-[10px] sm:text-xs md:text-sm border-x border-gray-200 ${isLastRow ? 'border-b' : 'border-b'}`}>{row.column2}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {data?.eyebrow && (
            <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-4 sm:mb-6">
              {data.eyebrow}
            </p>
          )}
          <h2 className="leading-none text-black text-2xl sm:text-3xl md:text-[35px] font-bold pb-[17px]">
            {data?.title?.prefix}{" "}
            <HighlightText className="font-bold">
              {data?.title?.highlight}
            </HighlightText>{" "}
            {data?.title?.suffix}
          </h2>
          {data?.description && (
            <p className="text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
              {data.description}
            </p>
          )}
        </div>

        {/* Main Content  */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Menu Section */}
          <div className="lg:w-1/4 flex-shrink-0 border-r border-t pt-4 border-gray-200 ">
            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="mb-6 text-left pl-4">
                <h3 className="text-lg font-light text-black mb-2">{data?.sidebarTitle}</h3>
                <p className="text-[#80868b] text-xs">{data?.sidebarSubtitle}</p>
              </div>

              <nav className="" aria-label="Learning outcomes navigation">
                {contentData.map((item: LearningOutcomeData, index: number) => (
                  <button
                    key={item.title}
                    onClick={() => handleMenuClick(index)}
                    className={`w-full py-3 transition-all duration-300 border-gray-200 border-b first:border-t text-left pl-4 ${index === activeIndex
                      ? 'bg-white text-black font-semibold'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`}
                    type="button"
                    aria-pressed={index === activeIndex}
                  >
                    <span className="text-xs md:text-sm">{item.title}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden overflow-x-auto scrollbar-hide">
              <div className="flex min-w-max">
                {contentData.map((item: LearningOutcomeData, index: number) => (
                  <button
                    key={item.title}
                    onClick={() => handleMenuClick(index)}
                    className={`whitespace-nowrap px-4 py-2 transition-all duration-300 flex-shrink-0 ${index === activeIndex
                      ? 'bg-white text-black font-semibold border'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`}
                    type="button"
                  >
                    <span className="text-xs sm:text-sm">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="flex-1 border-t border-gray-200">
            <div
              className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            >
              <div className="bg-white">
                {/* Description */}
                <div className="mb-6 sm:mb-8 px-2 sm:px-6 pt-2 sm:pt-6">
                  <p className="text-sm sm:text-base md:text-lg text-[#5f6368] leading-relaxed mb-4 sm:mb-6">
                    {activeContent?.description?.split(activeContent?.highlight)[0]}
                    <span className="text-[#B30437] font-medium">{activeContent?.highlight}</span>
                    {activeContent?.description?.split(activeContent?.highlight)[1]}
                  </p>

                  <h4 className="text-sm sm:text-base font-medium text-gray-600 mb-4 sm:mb-6">
                    {activeContent?.subtitle}
                  </h4>

                  {/* Learning Objectives */}
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {activeContent?.outcomes?.map((outcome: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#B30437] rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span className="text-[#5f6368] leading-relaxed text-xs sm:text-sm md:text-base">{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Salary Table */}
                  {activeContent?.salaryTable && (
                    <div className="mt-4 sm:mt-8 overflow-x-auto w-full">
                      <table className="w-full text-left border-collapse border border-black min-w-[600px]">
                        <thead>
                          <tr>
                            {activeContent.salaryTable.headers.map((header: string, i: number) => (
                              <th key={i} className="p-3 border border-black font-bold text-black text-xs sm:text-sm text-center bg-white">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {activeContent.salaryTable.rows.map((row: any, i: number) => (
                            <tr key={i}>
                              <td className="p-3 border border-black font-bold text-black text-xs sm:text-sm bg-white">{row.role}</td>
                              <td className="p-3 border border-black text-gray-800 text-xs sm:text-sm bg-white">{row.entry}</td>
                              <td className="p-3 border border-black text-gray-800 text-xs sm:text-sm bg-white">{row.mid}</td>
                              <td className="p-3 border border-black text-gray-800 text-xs sm:text-sm bg-white">{row.senior}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Main Image */}
                  {!activeContent?.salaryTable && activeContent?.mainImage && (
                    <div className="mt-4 sm:mt-8 w-full">
                      <div className="relative w-full overflow-hidden">
                        <img
                          src={activeContent.mainImage}
                          alt={activeContent.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Images 
                <div className="flex flex-row">
                  {activeContent?.images?.slice(0, 3).map((image: ImageData, idx: number) => (
                    <div key={idx} className="flex-1 space-y-2 sm:space-y-3 border-r border-gray-200 border-t last:border-r-0 p-2 sm:p-4 hover:bg-gray-50 transition-colors group">
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                        {image.src && (
                          <Image
                            src={image.src}
                            alt={image.caption}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 33vw"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <p className="text-[9px] sm:text-xs text-gray-800 font-medium leading-tight pb-1 sm:pb-3 px-1 sm:px-1">{image.caption}</p>
                    </div>
                  ))}
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(LearningOutcomes);