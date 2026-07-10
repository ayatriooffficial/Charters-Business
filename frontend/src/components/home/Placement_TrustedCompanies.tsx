'use client';

import { memo, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useInViewPlay from '../micro/useInViewPlay';

interface CompanyCaseStudy {
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  author: string;
  role: string;

}

interface Company {
  name: string;
  job: string;
  subjob: string;
  logo: string;
  caseStudy?: CompanyCaseStudy;
}

const POPULAR_COMPANIES: Company[] = [
  {
    name: 'Arabian-Access',
    subjob: 'CTC on PPO',
    job: '12.3 LPA',
    logo: '/logos/student-at-arabian-access.avif',
    caseStudy: {
      title: 'How Square scaled merchant operations globally',
      description: 'Square adopted Amplitude Analytics and Amplitude Audiences, which led to optimizing data streams and instituting a robust.',
      stats: [
        { value: '5x', label: 'Faster response' },
        { value: '3x', label: 'Revenue growth' },
      ],
      author: 'Rajat Ray',
      role: 'Head of Operation',

    },
  },
  {
    name: 'Aditya Birla Group',
    subjob: '',
    job: 'Case study',
    logo: '/logos/student-at-aditya-birla.avif',
    caseStudy: {
      title: 'How Square scaled merchant operations globally',
      description: 'Square adopted Amplitude Analytics and Amplitude Audiences, which led to optimizing data streams and instituting a robust.',
      stats: [
        { value: '5x', label: 'Faster response' },
        { value: '3x', label: 'Revenue growth' },
      ],
      author: 'Rajat Ray',
      role: 'Head of Operation',

    },
  },
  {
    name: 'CBD',
    subjob: 'CTC on PPO',
    logo: '/logos/student-at-cbd.avif',
    job: '8.9 LPA',
    caseStudy: {
      title: 'DoorDash cuts delivery time with real-time ML',
      description: 'Rapid delivery isn\'t just a promise — it\'s a lifestyle maintained through data, real-time analytics, and efficient ML models.',
      stats: [
        { value: '2x', label: 'Faster delivery' },
        { value: '40%', label: 'Cost reduction' },
      ],
      author: 'Sarah Conner',
      role: 'Logistics Lead',

    },
  },
  {
    name: 'Genpact',
    logo: '/logos/student-at-genpact.avif',
    subjob: 'CTC on PPO',
    job: '5.2 LPA',
    caseStudy: {
      title: 'DoorDash cuts delivery time with real-time ML',
      description: 'Rapid delivery isn\'t just a promise — it\'s a lifestyle maintained through data, real-time analytics, and efficient ML models.',
      stats: [
        { value: '2x', label: 'Faster delivery' },
        { value: '40%', label: 'Cost reduction' },
      ],
      author: 'Sarah Conner',
      role: 'Logistics Lead',

    },
  },

  {
    name: 'TCS',
    logo: '/logos/student-at-tcs.avif',
    subjob: '',
    job: 'Case study',
    caseStudy: {
      title: 'Atlassian improves team visibility with data',
      description: 'Collaboration processes improved vastly since integration, giving teams a clearer view into ongoing progress and metrics.',
      stats: [
        { value: '60%', label: 'Less blockers' },
        { value: '4x', label: 'Sprint velocity' },
      ],
      author: 'Alice Johnson',
      role: 'Product Manager',

    },
  },
  {
    name: 'Reliance',
    logo: '/logos/student-at-reliance.avif',
    subjob: '',
    job: 'Case study',
    caseStudy: {
      title: 'How Square scaled merchant operations globally',
      description: 'Square adopted Amplitude Analytics and Amplitude Audiences, which led to optimizing data streams and instituting a robust.',
      stats: [
        { value: '5x', label: 'Faster response' },
        { value: '3x', label: 'Revenue growth' },
      ],
      author: 'Rajat Ray',
      role: 'Head of Operation',

    },
  },
  {
    name: 'Mosaic Wellness',
    logo: '/logos/student-at-mosaic-wellness.avif',
    subjob: 'CTC on PPO',
    job: '7 LPA',
    caseStudy: {
      title: 'Microsoft maintains 99.999% cloud uptime',
      description: 'Cloud infrastructure is at the core of the business, ensuring uptime requires incredibly talented engineers and rigorous processes.',
      stats: [
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '10x', label: 'Scale achieved' },
      ],
      author: 'Satya Nadella',
      role: 'VP of Cloud',

    },
  },
  {
    name: 'Jumbotail',
    logo: '/logos/student-at-jumbotail.avif',
    subjob: 'CTC on PPO',
    job: '8.7 LPA',
    caseStudy: {
      title: 'Meta connects billions with modern protocols',
      description: 'Connecting billions of people requires innovative data structures and networking protocols that push the boundaries of computing.',
      stats: [
        { value: '3B+', label: 'Users connected' },
        { value: '5x', label: 'Infra efficiency' },
      ],
      author: 'Mark Evans',
      role: 'Technical Lead',

    },
  },
  {
    name: 'HSBC',
    logo: '/logos/student-at-hsbc.avif',
    subjob: 'CTC on PPO',
    job: '8 LPA',
    caseStudy: {
      title: 'How Square scaled merchant operations globally',
      description: 'Square adopted Amplitude Analytics and Amplitude Audiences, which led to optimizing data streams and instituting a robust.',
      stats: [
        { value: '5x', label: 'Faster response' },
        { value: '3x', label: 'Revenue growth' },
      ],
      author: 'Rajat Ray',
      role: 'Head of Operation',

    },
  },
  {
    name: 'Urban Company',
    logo: '/logos/student-at-urban-company.avif',
    subjob: '',
    job: 'Case Study',
    caseStudy: {
      title: 'Meta connects billions with modern protocols',
      description: 'Connecting billions of people requires innovative data structures and networking protocols that push the boundaries of computing.',
      stats: [
        { value: '3B+', label: 'Users connected' },
        { value: '5x', label: 'Infra efficiency' },
      ],
      author: 'Mark Evans',
      role: 'Technical Lead',

    },
  },
];

function TrustedCompanies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isVisible = useInViewPlay(sectionRef, '200px', 0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (gridRef.current && !gridRef.current.contains(e.target as Node)) {
        setActiveIndex(null);
      }
    }
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="group/main relative z-10 mx-[0%] overflow-visible bg-white pb-2 border-gray-200 border-b"
    >
      {isVisible && (
        <div className="mx-auto w-full max-w-7xl py-[15px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-[30px]">
            <p className="mx-auto text-base text-black sm:text-lg lg:text-xl">
              <strong>97.3%</strong> of students secured internships by their <strong>4 months</strong>, with the highest stipend <strong>₹57k/month</strong>
            </p>
          </div>

          <div className="mb-6 w-full sm:mb-8">
            <div
              ref={gridRef}
              className="mx-auto grid grid-cols-3 max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-10 px-4 md:flex md:gap-x-14 md:gap-y-18 md:px-6 lg:gap-x-20 lg:gap-y-15"
            >
              {POPULAR_COMPANIES.map((company, index) => {
                const isActive = activeIndex === index;
                const isCaseStudy = company.job.toLowerCase() === 'case study' && !!company.caseStudy;
                return (
                  <div
                    key={company.name}
                    className={`group relative z-10 h-8 md:h-10 w-full md:w-[140px] cursor-pointer hover:z-50 ${isActive ? 'z-50' : ''} ${index >= 6 ? 'hidden md:block' : 'block'}`}
                    onClick={() => {
                      if (!isCaseStudy) return;
                      setActiveIndex((prev) => (prev === index ? null : index));
                    }}
                  >
                    <div className="relative h-10 w-full">
                      <Image src={company.logo} alt={company.name} fill className="object-contain" />
                    </div>

                    <div className={`absolute inset-shadow-2xs left-1/2 top-[calc(100%+7px)] -translate-x-1/2 whitespace-nowrap border border-[#efefef] bg-[#fafafa] px-5 py-1.5 transition-colors group-hover:border-gray-200 group-hover:bg-[#efefef] ${isActive ? 'border-gray-200! bg-[#efefef]!' : ''}`}>
                      <span className="text-[12px] font-normal text-[#222222]">{company.subjob}</span> <span className="text-[12px] font-bold text-[#222222]">{company.job}</span>
                    </div>

                    {isCaseStudy && company.caseStudy && (
                      <div className={`pointer-events-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:absolute sm:bottom-[calc(100%+12px)] sm:top-auto sm:translate-y-0 z-50 invisible w-[85vw] max-w-85 rounded-2xl border border-gray-100 bg-white p-6 text-left opacity-0 shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 ${isActive ? 'pointer-events-auto! visible! opacity-100!' : ''}`}>
                        <h3 className="mb-2 text-[17px] font-bold leading-snug text-gray-900">
                          {company.caseStudy.title}
                        </h3>
                        <p className="mb-5 text-[13px] leading-relaxed text-[#5f6368]">
                          {company.caseStudy.description}
                        </p>
                        <div className="mb-5 flex gap-8">
                          {company.caseStudy.stats.map((stat) => (
                            <div key={stat.label}>
                              <div className="text-[22px] font-bold text-gray-900">{stat.value}</div>
                              <div className="text-[12px] text-[#5f6368]">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center gap-3">

                          <div className="text-sm font-semibold leading-tight text-gray-900">
                            {company.caseStudy.author}
                          </div>
                          <div className="mt-0.5 text-[13px] text-[#5f6368]">
                            {company.caseStudy.role}
                          </div>
                        </div>
                        <div className="hidden sm:block absolute left-1/2 top-full z-0 h-4 w-4 -translate-x-1/2 -mt-2.25 rotate-45 border-b border-r border-gray-100 bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.03)]" />
                        <div className="hidden sm:block absolute left-1/2 top-full z-0 h-8 w-full -translate-x-1/2 bg-transparent" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center pt-4 pb-2">
        <button
          className="text-sm text-black cursor-pointer opacity-50 transition-opacity duration-300 group-hover/main:opacity-100"
          onClick={() => {
            window.open(
              'https://spangled-cardinal-ac7.notion.site/2fe34c26081b800fb860c41b85555e68?v=393d012ded8a4a589d3a2d09872a78cc',
              '_blank',
              'noopener,noreferrer'
            );
          }}
        >
          View all 1253 companies
          <span className="inline-block">
            <img src="/Charters-icon/top_arrow-black.svg"
              alt="Format icon"
              width={15}
              height={15}
              className="ml-[6px] w-[10px] h-[10px] object-contain"
            />
          </span>
        </button>
      </div>
    </section>
  );
}

export default memo(TrustedCompanies);