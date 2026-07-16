"use client";

import React, { useState, useEffect } from "react";
import { Plus, Sun } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HighlightText from "../shared/HighlightObserver";
import {
  ProgrammeAssetConfig,
  CurriculumSectionData,
  CurriculumTabKey,
  CurriculumTerm,
  CurriculumBadge,
  CurriculumCourse,
  CurriculumImmersionItem,
} from "@/data/programmes";

interface CurriculumSectionProps {
  data?: CurriculumSectionData;
  assets?: ProgrammeAssetConfig;
  slug?: string;
}

const TAB_LABELS: Record<CurriculumTabKey, string> = {
  courses: "Courses & Workshops",
  collaboration: "Collaboration",
  business: "Business Immersions",
  cultural: "Cultural Immersions",
};

const DEFAULT_TAB_ORDER: CurriculumTabKey[] = [
  "courses",
  "collaboration",
  "business",
  "cultural",
];

const CurriculumSection = ({ data, assets, slug }: CurriculumSectionProps) => {
  const config = assets || {
    curriculumCityscapes: {
      dubai: "/images/curriculumsection/dubaicurriculum.webp",
      india: "/images/curriculumsection/indiacurriculum.webp",
      singapore: "/images/curriculumsection/europe.webp",
      ghana: "/images/curriculumsection/ghana.webp",
      usa: "/images/curriculumsection/us.webp",
      argentina: "/images/curriculumsection/argentina.webp",
      europe: "/images/curriculumsection/europe.webp",
      internship: "/images/curriculumsection/internship.webp",
    },
  };
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {},
  );
  const [showMore, setShowMore] = useState<Record<string, boolean>>({});
  const [activeTabs, setActiveTabs] = useState<Record<string, CurriculumTabKey>>(
    {},
  );
  const [currentImage, setCurrentImage] = useState(
    config.curriculumCityscapes.dubai,
  );
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname() ?? "";

  // Handle client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-expand Dubai after component mounts
  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        setExpandedItems((prev) => ({ ...prev, dubai: true }));
        const first = curriculumItems[0];
        setCurrentImage(first?.termImage || config.curriculumCityscapes.dubai);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  if (!data?.items || data.items.length === 0) return null;

  const curriculumItems = data.items;

  const isCbaOrDgm =
    slug === "certified-business-accountant" ||
    slug === "digital-growth-&-marketing" ||
    pathname.includes("certified-business-accountant") ||
    pathname.includes("digital-growth-&-marketing") ||
    (data?.items?.[0]?.title !== "Dubai");

  const tabOrder = data.tabOrder ?? DEFAULT_TAB_ORDER;

  const tabLabels = { ...TAB_LABELS, ...data.tabLabels };

  const imageMapping = config.curriculumCityscapes;

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => {
      const next = !prev[id];
      if (next) {
        const item = curriculumItems.find((x: CurriculumTerm) => x.id === id);
        if (item?.termImage) {
          setCurrentImage(item.termImage);
        } else if (imageMapping[id as keyof typeof imageMapping]) {
          setCurrentImage(imageMapping[id as keyof typeof imageMapping]);
        }
      }
      return { ...prev, [id]: next };
    });
  };

  const isShowMore = (id: string) => !!showMore[id];
  const toggleMore = (id: string) =>
    setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));

  const activeTab = (id: string): CurriculumTabKey => activeTabs[id] || "courses";
  const setTab = (id: string, tab: CurriculumTabKey) => {
    setActiveTabs((prev) => ({ ...prev, [id]: tab }));
    setShowMore((prev) => ({ ...prev, [id]: false })); // Reset courses expansion when switching tabs
  };

  // Check whether a term has content for a given tab key.
  const termHasTab = (item: CurriculumTerm, key: string): boolean => {
    if (key === "courses") return (item.courses?.initial?.length ?? 0) > 0;
    const val = (item as unknown as Record<string, unknown>)[key];
    return Array.isArray(val) && val.length > 0;
  };

  return (
    <section
      className="relative z-[5] bg-white"
      role="region"
      aria-labelledby="curriculum-heading"
    >
      <div className="max-w-[85rem] pt-12 sm:pt-16 md:pt-18 section-header-block">
        <div className="mb-8 lg:mb-12 text-center">
          <p
            className="text-sm font-semibold text-[#B30437] tracking-wider mb-3"
            role="text"
          >
            {data.eyebrow}
          </p>
          <h2
            id="curriculum-heading"
            className="leading-none text-black text-2xl sm:text-3xl md:text-[35px] font-bold pb-[17px]"
          >
            <HighlightText className="font-bold hl-px-0">
              {data.titleHighlight}
            </HighlightText>{" "}
            {data.titleRest}
          </h2>
          <div className="flex justify-center">
            <p className="text-black px-[20px] text-sm sm:text-base md:text-lg max-w-4xl">
              {data.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start border-t border-gray-200">
          {/* Left side - Image */}
          <aside
            className="relative order-2 lg:order-1 w-full hidden lg:block"
            aria-label="Curriculum location cityscape"
          >
            {mounted ? (
              <Image
                src={currentImage}
                alt="Curriculum location skyline"
                width={800}
                height={600}
                className="w-full h-64 sm:h-80 lg:h-auto object-cover transition-all duration-500 ease-in-out"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-64 sm:h-80 lg:h-[600px] bg-gray-200 animate-pulse" />
            )}
          </aside>

          {/* Right side - Content */}
          <section
            className="order-1 lg:order-2"
            role="region"
            aria-labelledby="curriculum-heading"
          >
            {/* Curriculum Items */}
            <div
              className=""
              role="list"
              aria-label="Curriculum terms and locations"
            >
              {curriculumItems.map((item: CurriculumTerm) => {
                const tabs = tabOrder.filter((t) => termHasTab(item, t));
                const orange = item.culturalVariant === "orange";
                return (
                  <div key={item.id} role="listitem">
                    {/* Main curriculum item */}
                    <article className="border-b border-l border-gray-200 text-gray-600 hover:text-black hover:bg-gray-50">
                      <div className="p-2 sm:p-4">
                        <header
                          className="flex items-center justify-between cursor-pointer"
                          onClick={() => toggleExpand(item.id)}
                          role="button"
                          tabIndex={0}
                          aria-expanded={expandedItems[item.id]}
                          aria-controls={`content-${item.id}`}
                        >
                          <div className="flex items-center gap-3 lg:gap-4 flex-1">
                            <div className="flex flex-col items-start flex-1">
                              {isCbaOrDgm ? (
                                <>
                                  {/* Row 1: Month/Term No + Badges grouped together */}
                                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                    <span className="text-xs font-semibold text-black">
                                      {item.term}
                                    </span>
                                    {item.badges && item.badges.length > 0 && (
                                      <div className="flex flex-wrap gap-2 items-center">
                                        {item.badges.map((badge: CurriculumBadge, badgeIndex: number) => (
                                          <span
                                            key={badgeIndex}
                                            className={badge.className}
                                          >
                                            {badge.text}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                  {/* Row 2: Standalone Title */}
                                  <h3 className="text-base sm:text-lg font-bold text-black">
                                    {item.title}
                                  </h3>
                                </>
                              ) : (
                                <>
                                  {/* Original Fallback Layout (e.g. for TBM) */}
                                  <span className="text-xs font-semibold text-black mb-1">
                                    {item.term}
                                  </span>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 w-full">
                                    <h3 className="text-base sm:text-lg font-bold text-black">
                                      {item.title}
                                    </h3>
                                    {item.badges && item.badges.length > 0 && (
                                      <div className="flex flex-wrap gap-2">
                                        {item.badges.map(
                                          (badge: CurriculumBadge, badgeIndex: number) => (
                                            <span
                                              key={badgeIndex}
                                              className={badge.className}
                                            >
                                              {badge.text}
                                            </span>
                                          ),
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          <Plus
                            className={`w-4 h-4 sm:w-5 sm:h-5 text-black transition-transform duration-200 flex-shrink-0 ${expandedItems[item.id] ? "rotate-45" : ""}`}
                            aria-hidden="true"
                          />
                        </header>

                        {/* Expanded content with smooth transition */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedItems[item.id]
                            ? "max-h-[1200px] opacity-100"
                            : "max-h-0 opacity-0"
                            }`}
                        >
                          <div
                            id={`content-${item.id}`}
                            className="px-4 sm:px-6 pb-4 sm:pb-5 text-black border-t border-gray-100"
                            role="region"
                            aria-label={`${item.title} curriculum details`}
                          >
                            {/* Mobile-only image at top of card */}
                            {(item.termImage ||
                              imageMapping[
                                item.id as keyof typeof imageMapping
                              ]) && (
                                <div className="lg:hidden mb-4 mt-4">
                                  <Image
                                    src={
                                      item.termImage ||
                                      imageMapping[
                                        item.id as keyof typeof imageMapping
                                      ]
                                    }
                                    alt={`${item.title} skyline`}
                                    width={800}
                                    height={400}
                                    className="w-full h-48 object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 800px"
                                  />
                                </div>
                              )}

                            {item.internship ? (
                              <div className="pt-4 space-y-4">
                                <div>
                                  {item.internship.paragraphs.map(
                                    (p: string, i: number) => (
                                      <p
                                        key={i}
                                        className={`text-[#5f6368] leading-relaxed text-sm ${i === 0 ? "mb-4" : "mb-3"
                                          }`}
                                      >
                                        {p}
                                      </p>
                                    ),
                                  )}
                                  <div className="space-y-3">
                                    {item.internship.options.map(
                                      (o: string, i: number) => (
                                        <div
                                          key={i}
                                          className="flex items-start gap-3"
                                        >
                                          <div className="w-2 h-2 bg-[#B30437] rounded-full mt-2 flex-shrink-0"></div>
                                          <p className="text-[#5f6368] leading-relaxed text-sm">
                                            {o}
                                          </p>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="pt-4 space-y-6">
                                {/* Term Project or Outcome */}
                                {item.outcome ? (
                                  <div>
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                                      Outcome:
                                    </h4>
                                    <p className="text-[#5f6368] leading-relaxed text-sm">
                                      {item.outcome}
                                    </p>
                                  </div>
                                ) : item.project ? (
                                  <div>
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                                      Term Project:
                                    </h4>
                                    <p className="text-[#5f6368] leading-relaxed text-sm">
                                      {item.project.description}
                                    </p>
                                    <button className="mt-3 text-orange-500 hover:text-orange-600 font-medium text-xs flex items-center gap-2 transition-colors">
                                      {item.project.buttonLabel ||
                                        "Review Cohort 1 Progress"}
                                      <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                ) : null}

                                {/* Tabs */}
                                <div className="border-b border-gray-200">
                                  <nav
                                    className="flex flex-nowrap overflow-x-auto gap-2 sm:gap-4 lg:gap-8 scrollbar-hide"
                                    aria-label={`${item.title} curriculum tabs`}
                                  >
                                    {tabs.map((t) => (
                                      <button
                                        key={t}
                                        onClick={() => setTab(item.id, t)}
                                        className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors  ${activeTab(item.id) === t
                                          ? "border-orange-500 text-gray-900"
                                          : "border-transparent text-[#5f6368] hover:text-[#5f6368]"
                                          }`}
                                        type="button"
                                      >
                                        {tabLabels[t]}
                                      </button>
                                    ))}
                                  </nav>
                                </div>

                                {/* Tab Content */}
                                <div className="space-y-3">
                                  {/* Courses & Workshops */}
                                  {activeTab(item.id) === "courses" &&
                                    item.courses && (
                                      <>
                                        {item.courses.initial.map(
                                          (course: CurriculumCourse, i: number) => (
                                            <div
                                              key={i}
                                              className="flex items-start gap-3"
                                            >
                                              <div className="w-2 h-2 bg-[#B30437] rounded-full mt-2 flex-shrink-0"></div>
                                              <div>
                                                <span className="font-semibold text-black text-sm">
                                                  {course.code}:
                                                </span>
                                                <span className="ml-2 text-black text-sm">
                                                  {course.title}
                                                </span>
                                              </div>
                                            </div>
                                          ),
                                        )}

                                        {/* Additional courses with smooth transition */}
                                        <div
                                          className={`overflow-hidden transition-all duration-500 ease-in-out ${isShowMore(item.id)
                                            ? "max-h-[600px] opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}
                                        >
                                          <div className="space-y-3 mt-3">
                                            {item.courses.more.map(
                                              (course: CurriculumCourse, i: number) => (
                                                <div
                                                  key={i}
                                                  className="flex items-start gap-3"
                                                >
                                                  <div className="w-2 h-2 bg-[#B30437] rounded-full mt-2 flex-shrink-0"></div>
                                                  <div>
                                                    <span
                                                      className={`font-semibold ${item.moreCoursesGray ? "text-[#5f6368]" : "text-black"
                                                        } text-sm`}
                                                    >
                                                      {course.code}:
                                                    </span>
                                                    <span
                                                      className={`ml-2 ${item.moreCoursesGray ? "text-[#5f6368]" : "text-black"
                                                        } text-sm`}
                                                    >
                                                      {course.title}
                                                    </span>
                                                  </div>
                                                </div>
                                              ),
                                            )}
                                          </div>
                                        </div>

                                        {/* Toggle button */}
                                        {item.courses.more?.length > 0 && (
                                        <div className="mt-4">
                                          <button
                                            onClick={() => toggleMore(item.id)}
                                            className="text-xs text-black hover:text-[#B30437] font-medium flex items-center gap-2 transition-colors bg-white hover:bg-gray-50 px-3 py-2 rounded-md border border-gray-200"
                                            type="button"
                                          >
                                            <span className="text-sm">
                                              {isShowMore(item.id) ? "−" : "+"}
                                            </span>
                                            {isShowMore(item.id)
                                              ? "VIEW LESS"
                                              : "VIEW MORE"}
                                          </button>
                                        </div>
                                        )}
                                      </>
                                    )}

                                  {/* Collaboration */}
                                  {activeTab(item.id) === "collaboration" &&
                                    item.collaboration && (
                                      <div className="space-y-4">
                                        {item.collaboration.map(
                                          (entry: CurriculumImmersionItem, i: number) => (
                                            <div
                                              key={i}
                                              className="flex items-start gap-3"
                                            >
                                              <div className="w-2 h-2 bg-[#B30437] rounded-full mt-2 flex-shrink-0"></div>
                                              <div>
                                                <p
                                                  className={`${item.collaborationTextBlack ? "text-black" : "text-[#5f6368]"
                                                    } leading-relaxed text-sm`}
                                                >
                                                  {entry.title}
                                                </p>
                                              </div>
                                            </div>
                                          ),
                                        )}
                                      </div>
                                    )}

                                  {/* Business Immersions */}
                                  {activeTab(item.id) === "business" &&
                                    item.business && (
                                      <div className="space-y-4">
                                        {item.business.map(
                                          (entry: CurriculumImmersionItem, i: number) => (
                                            <div
                                              key={i}
                                              className="flex items-start gap-3"
                                            >
                                              <div className="w-2 h-2 bg-[#B30437] rounded-full mt-2 flex-shrink-0"></div>
                                              <div>
                                                <p className="text-black leading-relaxed text-sm">
                                                  {entry.title}
                                                </p>
                                                {entry.subtitle && (
                                                  <p className="font-semibold text-gray-900 mt-1 text-sm">
                                                    {entry.subtitle}
                                                  </p>
                                                )}
                                              </div>
                                            </div>
                                          ),
                                        )}

                                        {/* Summer Fellowship */}
                                        {item.businessNote && (
                                          <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                                            <div className="flex items-start gap-3">
                                              <div className="w-2 h-2 bg-[#B30437] rounded-full mt-2 flex-shrink-0"></div>
                                              <div>
                                                <p className="font-semibold text-gray-900 text-sm">
                                                  {item.businessNote}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    )}

                                  {/* Cultural Immersions / Tools & Technology */}
                                  {activeTab(item.id) === "cultural" &&
                                    item.cultural && (
                                      <div className="space-y-4">
                                        {item.culturalImage ? (
                                          <div className="mb-4">
                                            <Image
                                              src={item.culturalImage}
                                              alt={item.title + " tools & technology"}
                                              width={600}
                                              height={400}
                                              className="w-full object-cover rounded-lg"
                                            />
                                          </div>
                                        ) : (
                                          item.cultural.map(
                                            (entry: CurriculumImmersionItem, i: number) => (
                                              <div
                                                key={i}
                                                className="flex items-start gap-3"
                                              >
                                                <div
                                                  className={`w-2 h-2 ${orange ? "bg-orange-400" : "bg-[#B30437]"
                                                    } rounded-full mt-2 flex-shrink-0`}
                                                ></div>
                                                <div>
                                                  <p
                                                    className={`${orange ? "text-[#5f6368]" : "text-black"
                                                      } leading-relaxed text-sm`}
                                                  >
                                                    {entry.title}
                                                  </p>
                                                  {entry.subtitle && (
                                                    <p className="font-semibold text-gray-900 mt-1 text-sm">
                                                      {entry.subtitle}
                                                    </p>
                                                  )}
                                                </div>
                                              </div>
                                            ),
                                          )
                                        )}
                                      </div>
                                    )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* Highlight section after specific items */}
                    {item.highlight && (
                      <div
                        className="flex items-center gap-3 py-4 px-4 mt-3 bg-blue-50 border border-blue-100 rounded-lg"
                        role="complementary"
                      >
                        <Sun
                          className="w-5 h-5 text-orange-500 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span
                          className="text-[#5f6368] font-medium text-xs"
                          role="text"
                        >
                          {item.highlight}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
