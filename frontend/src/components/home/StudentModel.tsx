"use client";

import { memo, useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Faculty {
  name: string;
  title: string;
  company: string;
  subtitle?: string;
  experience?: string;
  teaching?: string;
  imageSrc: string;
  linkedinUrl?: string;
  category: string;
}

interface StudentCategory {
  id: string;
  name: string;
}

const studentCategories: StudentCategory[] = [
  { id: "jan", name: "January" },
  { id: "apr", name: "April" },
  { id: "jul", name: "July" },
  { id: "oct", name: "October" },
  { id: "dec", name: "December" },
];

const facultyMembers: Faculty[] = [
  // Finance Category
  {
    name: "Mr. Rajat Mathur",
    title: "Managing Director",
    company: "MorganStanley",
    subtitle: "MD, India at Morgan Stanley",
    experience: "Ex Managing Director at Goldman Sachs",
    teaching: "Corporate strategy and financial markets",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "jan",
  },
  {
    name: "Mr. Finance Expert 2",
    title: "CFO",
    company: "FinanceCo",
    subtitle: "Chief Financial Officer",
    experience: "20+ years in finance",
    teaching: "Financial analysis and planning",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "jan",
  },
  {
    name: "Mr. Finance Expert 3",
    title: "Investment Director",
    company: "InvestCorp",
    subtitle: "Director of Investments",
    experience: "15+ years in investment banking",
    teaching: "Investment strategies",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "jan",
  },
  // Technology Category
  {
    name: "Mr. Naveen Munjal",
    title: "Managing Director",
    company: "HEROELECTRIC",
    subtitle: "Founder & MD at Hero Electric",
    experience: "Ex VP at Hero MotoCorp",
    teaching: "EV industry and startup scaling",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "apr",
  },
  {
    name: "Mr. Tech Expert 2",
    title: "CTO",
    company: "TechCorp",
    subtitle: "Chief Technology Officer",
    experience: "15+ years in tech",
    teaching: "Technology leadership",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "apr",
  },
  {
    name: "Mr. Tech Expert 3",
    title: "VP Engineering",
    company: "SoftwareCo",
    subtitle: "VP of Engineering",
    experience: "12+ years in software",
    teaching: "Software development",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "apr",
  },
  // Marketing Category
  {
    name: "Mr. Arjun Vaidya",
    title: "Founder",
    company: "DR. VAIDYA's",
    subtitle: "Founder & CMD at Dr. Vaidya's",
    experience: "Built Ayurveda brand from scratch",
    teaching: "Founding a health-tech venture",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "jul",
  },
  {
    name: "Mr. Marketing Expert 2",
    title: "CMO",
    company: "BrandCo",
    subtitle: "Chief Marketing Officer",
    experience: "18+ years in marketing",
    teaching: "Brand building strategies",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "jul",
  },
  {
    name: "Mr. Marketing Expert 3",
    title: "VP Marketing",
    company: "AdAgency",
    subtitle: "VP of Marketing",
    experience: "14+ years in advertising",
    teaching: "Digital marketing",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "jul",
  },
  // Operations Category
  {
    name: "Mr. Manoj Kohli",
    title: "Former Country Head",
    company: "SoftBank",
    subtitle: "Former Country Head at SoftBank India",
    experience: "Ex MD at Bharti Airtel",
    teaching: "Tech investments and growth strategy",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "oct",
  },
  {
    name: "Mr. Operations Expert 2",
    title: "COO",
    company: "OpsCorp",
    subtitle: "Chief Operating Officer",
    experience: "20+ years in operations",
    teaching: "Operations management",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "oct",
  },
  {
    name: "Mr. Operations Expert 3",
    title: "VP Operations",
    company: "LogiCo",
    subtitle: "VP of Operations",
    experience: "16+ years in logistics",
    teaching: "Supply chain management",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "oct",
  },
  // Strategy Category
  {
    name: "Captain Raghu Raman",
    title: "Former President",
    company: "Reliance",
    subtitle: "Former President, Strategy at Reliance",
    experience: "Led energy & infrastructure divisions",
    teaching: "Corporate leadership and operations",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "dec",
  },
  {
    name: "Mr. Strategy Expert 2",
    title: "Strategy Director",
    company: "ConsultCo",
    subtitle: "Director of Strategy",
    experience: "18+ years in consulting",
    teaching: "Business strategy",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "dec",
  },
  {
    name: "Mr. Strategy Expert 3",
    title: "VP Strategy",
    company: "StrategyCorp",
    subtitle: "VP of Corporate Strategy",
    experience: "15+ years in strategy",
    teaching: "Strategic planning",
    imageSrc: "/images/faculty/home.jpeg",
    linkedinUrl: "#",
    category: "dec",
  },
];

function FacultyModel() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [offsetPercent, setOffsetPercent] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("jan");
  const [isTabSwitching, setIsTabSwitching] = useState(false);
  const slidesContainerRef = useRef<HTMLDivElement>(null);

  const filteredFaculty = facultyMembers.filter(
    (faculty) => faculty.category === activeCategory
  );

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === activeCategory) return;
    setIsTabSwitching(true);
    setTimeout(() => {
      setActiveCategory(categoryId);
      if (slidesContainerRef.current) {
        slidesContainerRef.current.scrollLeft = 0;
      }
      setTimeout(() => {
        setIsTabSwitching(false);
      }, 50);
    }, 200);
  };

  const STEP = 60;

  const getAnimationDuration = () => {
    return typeof window !== "undefined" && window.innerWidth <= 768 ? 800 : 600;
  };

  const changeSlide = (direction: number): void => {
    if (isAnimating) return;

    const scrollContainer = slidesContainerRef.current;
    if (!scrollContainer) return;

    setIsAnimating(true);

    const scrollAmount = scrollContainer.clientWidth * (STEP / 100);
    const targetScroll = scrollContainer.scrollLeft + (direction * scrollAmount);

    scrollContainer.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, getAnimationDuration());
  };

  useEffect(() => {
    const scrollContainer = slidesContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const currentScroll = scrollContainer.scrollLeft;
      const newOffset = maxScrollLeft > 0 ? (currentScroll / maxScrollLeft) * 100 : 0;
      setOffsetPercent(newOffset);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

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
        className="mx-[0%] relative z-[5] bg-white text-black pb-12 overflow-x-hidden"
        role="region"
        aria-labelledby="faculty-heading"
      >
        
        <div className="max-w-[85rem] w-full mx-auto pt-12 mt-12 border-t border-gray-200">
          {/* Section Header */}
          <div className="relative text-center pb-[3.25rem] sm:pb-[3.25rem]">
            <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-4 sm:mb-6">
              LEARN FROM THE BEST
            </p>

            <h2
              id="faculty-heading"
              className="leading-normal text-[35px] font-semibold text-black"
            >
              Meet your{" "}
              <span className="relative inline-block mx-2">
                {/* IMAGE BEHIND TEXT */}
                <img
                  src="/highlight line.svg"
                  alt="highlight line"
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full scale-x-300 scale-y-155 pointer-events-none"
                />

                {/* TEXT ABOVE IMAGE */}
                <span
                  className="relative z-10 text-[#B30437] font-medium px-3"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 700 }}
                >
                  Faculty
                </span>
              </span>
            </h2>

            <p className="text-black text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
              Learn from industry leaders, academic experts, and seasoned
              practitioners who bring real-world experience to your education.
            </p>
          </div>

          {/* Category Tabs */}
          <div aria-label="Faculty categories">
            <ul className="flex overflow-scroll scrollbar-hide sm:justify-center gap-1 sm:gap-3 md:gap-6 border-b border-gray-300">
              {studentCategories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-3 text-nowrap sm:px-4 py-2 transition-all focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#B30437] text-sm ${activeCategory === category.id
                      ? "text-black border-b-2 border-black"
                      : "text-gray-700 hover:bg-gray-50"
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

          {/* Faculty Members Section with Navigation */}
          <div className="relative">
            <div
              ref={slidesContainerRef}
              className={
                `flex transition-all duration-300 ease-out ` +
                `overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth ` +
                `${isTabSwitching ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`
              }
              style={{ transition: 'opacity 200ms ease-out, transform 200ms ease-out' }}
              role="list"
              aria-label="Faculty members"
            >
              {filteredFaculty.map((faculty, index) => (
                <article
                  key={faculty.name}
                  className="bg-[#F4F2EE] border-r border-b  border-gray-300 overflow-hidden group transition-all duration-300  hover:-translate-y-1 flex flex-col flex-none w-[21%] min-w-[200px] snap-start"
                  role="listitem"
                  aria-labelledby={`faculty-name-${index}`}
                >
                  <figure className="relative bg-gray-100 aspect-[7/8] w-full overflow-hidden">
                    <Image
                      src={faculty.imageSrc}
                      alt={`Professional headshot of ${faculty.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover object-top transition-transform duration-300 "
                      loading="lazy"
                    />
                  </figure>

                  <div className="p-3 sm:p-4 flex-1 flex flex-col">
                    <div className="flex-1">
                      {/* Name with LinkedIn Logo */}
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          id={`faculty-name-${index}`}
                          className="font-semibold text-black text-[15px] leading-tight"
                          style={{ fontFamily: "Fraunces, Georgia, serif" }}
                        >
                          {faculty.name}
                        </h3>
                        <a
                          href={faculty.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          aria-label={`${faculty.name} LinkedIn profile`}
                        >
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                          </svg>
                        </a>
                      </div>

                      {/* Subtitle - Current Role */}
                      <p className="text-[11px] sm:text-xs text-gray-700 font-medium mb-1.5 leading-tight">
                        {faculty.subtitle}
                      </p>

                      {/* Divider */}
                      <div className="w-full h-px bg-gray-300 my-1.5"></div>

                      {/* Experience */}
                      {faculty.experience && (
                        <p className="text-[10px] text-gray-600 mb-1 leading-relaxed">
                          {faculty.experience}
                        </p>
                      )}

                      {/* Teaching Section */}
                      {faculty.teaching && (
                        <div className="mb-1">
                          <p className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                            Teaching
                          </p>
                          <p className="text-[10px] text-gray-700 leading-relaxed">
                            {faculty.teaching}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-2 pointer-events-none">
              {offsetPercent < 95 && (
                <button
                  onClick={() => changeSlide(1)}
                  disabled={isAnimating}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#B30437] hover:bg-red-700 transition-all duration-300 ease-in-out shadow-sm hover:shadow flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B30437] pointer-events-auto"
                  aria-label="Next slide"
                  type="button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-2 pointer-events-none">
              {offsetPercent > 5 && (
                <button
                  onClick={() => changeSlide(-1)}
                  disabled={isAnimating}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#B30437] hover:bg-red-700 transition-all duration-300 ease-in-out shadow-sm hover:shadow flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B30437] pointer-events-auto"
                  aria-label="Previous slide"
                  type="button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    aria-hidden="true"
                  >
                    <path
                      d="M15 18l-6-6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(FacultyModel);
