'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useSectionObserver } from '@/hooks/Usementorshipscroll';
import SectionWrapper from '@/components/shared/SectionWrapper';
import HighlightText from '../shared/HighlightObserver';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import LazyMount from '@/components/shared/LazyMount';
import { facultyMembers } from '@/data/faculty';

const SectionSkeleton = () => (
  <div className="h-96 w-full animate-pulse bg-gray-50 rounded" />
);

export default function ComprehensivePage() {
  // State for LearnFromFinest section
  const [activeFilter, setActiveFilter] = useState('All');

  // State for RealSection typewriter effect
  const [, setDisplayedText] = useState(['', '', '']);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const words = ['Strategy', 'Solutions', 'Support'];

  // State for mentorship section tabs
  const [activeTab, setActiveTab] = useState(0);

  // Track manual tab clicks so scroll-spy doesn't override immediately
  const isManualScroll = useRef(false);

  // Card refs for the 3 mentorship cards
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // Scroll animation for Real section - Fixed to use object syntax
  useScrollAnimation<HTMLElement>(
    {
      onEnter: () => {
        if (!animationTriggered) {
          setAnimationTriggered(true);
          startTypewriterAnimation();
        }
      },
    },
    { threshold: 0.3, delay: 200, rootMargin: '0px' }
  );

  // Replace the window.scroll listener with IntersectionObserver
  const observedTab = useSectionObserver(cardRefs);

  useEffect(() => {
    if (!isManualScroll.current) {
      setActiveTab(observedTab);
    }
  }, [observedTab]);

  // Handler for tab click with manual scroll guard
  const handleTabClick = useCallback((index: number) => {
    isManualScroll.current = true;
    setActiveTab(index);
    cardRefs[index].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    // Release the manual lock after smooth scroll finishes
    setTimeout(() => {
      isManualScroll.current = false;
    }, 800);
  }, [cardRefs]);

  // Use Accountancy (leadership) faculty for LessonsFromBest section
  const businessLeaders = facultyMembers.filter(member => member.category === 'leadership');

  const filteredFaculty =
    activeFilter === 'All'
      ? facultyMembers.filter(m => m.category === 'leadership').slice(0, 5)
      : activeFilter === 'Academicians'
      ? facultyMembers.filter((m) => m.title.toLowerCase().includes('professor') || m.company.toLowerCase().includes('university') || m.company.toLowerCase().includes('harvard'))
      : facultyMembers.filter(m => m.category === 'finance');

  // Typewriter animation function for RealSection
  const startTypewriterAnimation = () => {
    let currentWordIndex = 0;
    let currentCharIndex = 0;

    const typeNextChar = () => {
      if (currentWordIndex < words.length) {
        const currentWord = words[currentWordIndex];

        if (currentCharIndex <= currentWord.length) {
          setDisplayedText((prev) => {
            const newText = [...prev];
            newText[currentWordIndex] = currentWord.slice(0, currentCharIndex);
            return newText;
          });

          currentCharIndex++;

          if (currentCharIndex > currentWord.length) {
            currentWordIndex++;
            currentCharIndex = 0;
            setTimeout(typeNextChar, 500);
          } else {
            setTimeout(typeNextChar, 100);
          }
        }
      }
    };

    setTimeout(typeNextChar, 200);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/home/Capdsdsfture.JPG";
    link.download = "placement-report.JPG";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative z-[5] pb-8 md:pb-12 bg-white mt-10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs compact />
          <div className="grid grid-cols-1 pt-[50px] lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1 text-black">
              <p className="text-xs sm:text-sm font-semibold text-[#B30437] tracking-wider mb-2 sm:mb-3" role="text">
                WORLD-CLASS EDUCATORS
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-4 sm:mb-6">
                Learn from the{' '}
                <span className="italic text-[#B30437]">finest minds</span> in business
              </h1>

              <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-lg">
                From MDs, CEOs and CTOs of leading unicorns to Ivy League professors, our faculty
                brings knowledge that blends theory with real-world impact.
              </p>

              <button
                className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#222222] hover:bg-[#000000] text-white px-6 sm:px-8 py-2 sm:py-2 font-semibold text-[16px] sm:text-[16px] transition-all duration-200 group"
                type="button"
              >
                <span>Career report</span>
              </button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#B30437] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" fill="currentColor" />
                  </div>
                  <p className="text-xs sm:text-sm">Play Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section - matches home page PlacementReport outer section */}
      <section className="mx-[0%] border-gray-300 bg-white text-black relative">
        <div className="max-w-[85rem] mx-auto pt-22">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-semibold text-[#B30437] tracking-wider mb-2 sm:mb-3" role="text">
              INSPIRING EDUCATORS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
              Faculty that{" "}
              <HighlightText className="font-bold">
                inspire and empower
              </HighlightText>
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Meet the educators and industry leaders shaping tomorrow&apos;s business minds.
            </p>
          </div>
        </div>

        {/* Home-page-style rounded border top strip */}
        <div className="flex flex-row">
        <div className="flex-1 bg-gray-200 h-13 hidden md:block">
          <div className="flex-1 bg-white rounded-br-xl h-13 hidden md:block" />
        </div>
        <div className="hidden md:block md:w-[90%] max-w-[85rem] h-13 bg-gray-200 relative">
          <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-gray-50 to-gray-200" />
          <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-gray-50 to-gray-200" />
          <div className="flex-1 bg-white rounded-bl-xl rounded-br-xl h-13 hidden md:block" />
        </div>
        <div className="flex-1 bg-gray-200 h-13 hidden md:block">
          <div className="flex-1 bg-white rounded-bl-xl h-13 hidden md:block" />
        </div>
      </div>

      {/* Home-page-style rounded border content area */}
      <div className="flex flex-row w-full">
        <div className="flex-1 bg-gray-200 hidden md:block">
          <div className="relative bg-white w-full h-full rounded-tr-xl">
            <div className="absolute top-0 -right-[4px] w-[calc(100%+4px)] h-[1px] bg-gradient-to-r from-gray-50 to-gray-200 rounded-tr-xl" />
          </div>
        </div>
        <div className="md:w-[90%] max-w-[85rem] w-full">
          <div className="w-full border-t border-gray-200" />
          <div className="md:border-x border-gray-200 w-full">
            <div className="bg-gray-200 w-full">
              <div className="w-full bg-white rounded-t-xl">

        {/* Component 2 */}
        <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <section className="relative z-[5] bg-white rounded-t-xl">
            <div className="w-full mx-auto">
              <div
                className="sticky z-10 bg-white rounded-t-xl"
                style={{ top: 'var(--navbar-height, 86px)' }}
              >
                <div className='flex overflow-x-auto scrollbar-hide px-4 sm:px-0'>
                  {['All', 'Academicians', 'Industry Experts'].map((filter, index) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`whitespace-nowrap px-3 sm:px-6 py-3 text-xs sm:text-sm font-medium transition-all duration-300 flex-shrink-0 ${activeFilter === filter
                        ? 'text-gray-900 border-b-2 border-gray-900'
                        : 'text-[#5f6368] hover:text-[#5f6368]'
                        }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-gray-300">
                {filteredFaculty.map((faculty, idx) => (
                  <article
                    key={faculty.name + idx}
                    className="flex-shrink-0 w-full sm:w-auto hover:bg-[#F4F2EE] border-r border-b border-gray-300 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-square overflow-hidden bg-[#F4F2EE]">
                      <Image
                        src={faculty.imageSrc}
                        alt={faculty.name}
                        fill
                        sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h2 className="text-[16px] font-semibold text-black">
                        {faculty.title}
                      </h2>

                      <p className="text-[#5f6368] text-[12px] font-semibold mt-1">
                        by {faculty.name}
                      </p>

                      <div className="h-px bg-gray-400 my-3" />

                      <p className="text-sm text-[#5f6368] mb-4">
                        {faculty.experience}
                      </p>

                      <p className="text-[14px] font-semibold mb-2">
                        Research Publications
                      </p>

                      <p className="text-[12px] font-semibold-gray-700 mb-4">
                        {faculty.teaching}
                      </p>

                      {/* Logo */}
                      <div className="mt-2 h-10 flex items-center justify-start">
                        {faculty.logoSrc ? (
                          <Image
                            src={faculty.logoSrc}
                            alt={faculty.name}
                            width={100}
                            height={30}
                            className="h-8 w-auto max-w-full object-contain bg-white rounded-md px-2 py-1"
                          />
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination removed */}
            </div>
          </section>
        </SectionWrapper>
        </LazyMount>

        {/* Placement Report Banner */}
        <div
          className="px-4 sm:px-6 lg:px-8 text-center border-b border-t border-gray-200"
          role="region"
          aria-labelledby="download-section-heading"
        >
          <div className="mx-auto flex flex-col md:flex-row items-center justify-between py-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 flex-grow text-center md:text-left min-w-0">
              {/* Logo */}
              <div className="w-14 sm:w-14 h-20 relative shrink-0">
                <Image
                  src="/career-report.avif"
                  alt="Charters Union Career Report 2025"
                  fill
                  sizes="70px"
                  className="object-contain object-left"
                  priority
                />
              </div>

              {/* Texts */}
              <div className="flex-grow min-w-0">
                <>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug truncate">
                    <strong> 97%&apos;</strong> of students secured full time job offer by their <strong>4</strong>th month of Internship, with <br></br> the highest CTC being <strong> ₹12.3</strong>lakhs/month.
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                    100% Internship Rate • Average Salary Jump 2.35x • Proven track record audited by analystGK
                  </p>
                </>
              </div>
            </div>
            <div className="w-full md:w-1/4 mt-6 md:mt-0 flex justify-center md:justify-end">
              <button
                onClick={handleDownload}
                className="bg-[#222222] cursor-pointer text-sm text-white px-8 py-2.5 font-semibold flex items-center gap-2 hover:bg-[#202124] transition-colors"
                aria-label="Download the complete placement report PDF"
              >
                Placement Report
                <img src="/Charters-icon/download.svg" alt="icon" width={12} height={12} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ===== MENTORSHIP TYPES SECTION ===== */}

        <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <section className="relative z-[5] bg-white">
            <div className="w-full mx-auto">

              {/* Tabs — sticky + updated click handler */}
              <div
                className="sticky z-10 bg-white border-b border-gray-200"
                style={{ top: 'var(--navbar-height, 86px)' }}
              >
                <div className="flex overflow-x-auto scrollbar-hide px-4 sm:px-0">
                  {['Career Mentors', 'Domain Mentors', 'Startup Coaches'].map((label, index) => (
                    <button
                      key={label}
                      className={`whitespace-nowrap px-3 sm:px-6 py-3 text-xs sm:text-sm font-medium transition-all duration-300 flex-shrink-0 ${activeTab === index
                        ? 'text-gray-900 border-b-2 border-gray-900'
                        : 'text-[#5f6368] hover:text-[#5f6368]'
                        }`}
                      onClick={() => handleTabClick(index)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>


              {/* Card 1 - Career Coach */}
              <div
                ref={cardRefs[0]}
                className=" flex flex-col md:flex-row bg-white  overflow-hidden"
              >
                {/* Image block */}
                <div className="w-full md:w-1/2 relative h-56 sm:h-72 md:h-auto md:min-h-[380px]">
                  <Image
                    src="/faculties/1st_faculty.avif"
                    alt="Career Coach"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-5 h-5 bg-[#B30437] rounded" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 bg-[#B30437] rounded" />
                </div>

                {/* Text block */}
                <div className="w-full md:w-1/2 bg-white text-black p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5">Go further with a Career Coach</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      'Design a compelling resume and personal pitch',
                      'Ace interviews with 100+ top recruiters',
                      'Strategize your way to senior management and leadership-level roles',
                    ].map((text, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <img src="/dot-icon.svg" alt="" width={18} height={18} className="mt-0.5 opacity-[0.5] flex-shrink-0" />
                        <p className="text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2 - Domain Mentors */}
              <div
                ref={cardRefs[1]}
                className="flex flex-col md:flex-row bg-white  overflow-hidden border-t border-gray-100"
              >
                <div className="w-full md:w-1/2 relative h-56 sm:h-72 md:h-auto md:min-h-[380px]">
                  <Image
                    src="/faculties/2nd_faculty.avif"
                    alt="Domain Mentor"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-5 h-5 bg-[#B30437] rounded" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 bg-[#B30437] rounded" />
                </div>

                <div className="w-full md:w-1/2 bg-white text-black p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5">Go Deep with Domain Mentors</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      'Connect with industry leaders across diverse domains',
                      'Develop a distinctive voice and online presence with expert tips',
                      'Gain the insights and leadership skills needed to stand out in your chosen domain',
                    ].map((text, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <img src="/dot-icon.svg" alt="" width={18} height={18} className="mt-0.5  opacity-[0.5] flex-shrink-0" />
                        <p className="text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 3 - StartUp Coach */}
              <div
                ref={cardRefs[2]}
                className="flex flex-col md:flex-row bg-white  overflow-hidden border-t border-gray-100"
              >
                <div className="w-full md:w-1/2 relative h-56 sm:h-72 md:h-auto md:min-h-[380px]">
                  <Image
                    src="/faculties/3rd_faculty.avif"
                    alt="Startup Coach"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-5 h-5 bg-[#B30437] rounded" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 bg-[#B30437] rounded" />
                </div>

                <div className="w-full md:w-1/2 bg-white text-black p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5">Start strong with a StartUp Coach</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      'Identify business opportunities, create business plans, and develop your go-to-market strategy',
                      'Network with VCs and angels, and secure $50-$100K seed funding for your startup',
                      'Acquire your first 1000 customers, accelerate growth, and establish your market presence',
                    ].map((text, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <img src="/dot-icon.svg" alt="" width={18} height={18} className="mt-0.5 opacity-[0.5] flex-shrink-0" />
                        <p className="text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionWrapper>
        </LazyMount>

        {/* Business Leaders Section */}
        <LazyMount fallback={<SectionSkeleton />}>
        <SectionWrapper hideCorners={"all"}>
          <section className="relative z-[5] pt-22 sm:pt-22 bg-white">
            <div className="w-full mx-auto">
              <div className="mb-8 sm:mb-12 text-center">

                <p className="text-xs sm:text-sm font-semibold text-[#B30437] tracking-wider mb-2 sm:mb-3" role="text">
                  INDUSTRY EXPERTISE
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                  Lessons from the{" "}
                  <HighlightText className="font-bold">
                    best in the business
                  </HighlightText>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-gray-300">
                {businessLeaders.map((leader, idx) => (
                  <article
                    key={leader.name + idx}
                    className="flex-shrink-0 w-full sm:w-auto hover:bg-[#F4F2EE] border-r border-b border-gray-300 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-square overflow-hidden bg-[#F4F2EE]">
                      <Image
                        src={leader.imageSrc}
                        alt={leader.name}
                        fill
                        sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h2 className="text-[16px] font-semibold text-black">
                        {leader.title}
                      </h2>

                      <p className="text-[#5f6368] text-[12px] font-semibold mt-1">
                        by {leader.name}
                      </p>

                      <div className="h-px bg-gray-400 my-3" />

                      <p className="text-sm text-[#5f6368] mb-4">
                        {leader.experience}
                      </p>

                      <p className="text-[14px] font-semibold mb-2">
                        Research Publications
                      </p>

                      <p className="text-[12px] font-semibold-gray-700 mb-4">
                        {leader.teaching}
                      </p>

                      {/* Logo */}
                      <div className="mt-2 h-10 flex items-center justify-start">
                        {leader.logoSrc ? (
                          <Image
                            src={leader.logoSrc}
                            alt={leader.name}
                            width={100}
                            height={30}
                            className="h-8 w-auto max-w-full object-contain bg-white rounded-md px-2 py-1"
                          />
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </SectionWrapper>
        </LazyMount>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-200 hidden md:block">
          <div className="relative bg-white w-full h-full rounded-tl-xl">
            <div className="absolute top-0 -left-[4px] w-[calc(100%+4px)] h-[1px] bg-gradient-to-l from-gray-50 to-gray-200 rounded-tr-xl" />
          </div>
        </div>
      </div>
    </section>
  </div>
);
}