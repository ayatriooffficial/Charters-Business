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
}

interface LearningOutcomesProps {
  data?: any;
}

function LearningOutcomes({ data }: LearningOutcomesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const staticContentData: LearningOutcomeData[] = [

    {
      title: 'Data-driven decision making',
      description:
        "In today's digital age, data and the digital footprint it leaves are everywhere. The ability to use it effectively for evidence-backed decisions can truly set you apart.",
      highlight: 'The ability to use it effectively for evidence-backed decisions can truly set you apart.',
      subtitle: 'At Mesa, by the end of the program, you will:',
      outcomes: [
        'Identify relevant data to solve problems, extract and analyze datasets, and generate actionable insights',
        'Effectively communicate insights through clear visualizations and a compelling narrative',
        'Align business decisions, experiments, or hypotheses with data-driven insights for impactful outcomes.',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
          caption: 'Learn tools like Excel, Powerquery, SQL, Python and PowerBI',
        },
        {
          src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop',
          caption: 'Work on 25+ real-world startup datasets and get your hands dirty',
        },
        {
          src: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=300&h=200&fit=crop',
          caption: 'Get regular 1:1 mentorship, support and practice',
        },
      ],
    },
    {
      title: 'Customer Obsession',
      description:
        "One of Amazon's key leadership principles is deeply understanding your customer—their pain points, motivations, and alternatives—as the foundation for building effective solutions.",
      highlight: 'deeply understanding your customer',
      subtitle: 'At Mesa, by the end of the program, you will:',
      outcomes: [
        'Define and communicate clear customer personas for a product or service',
        'Conduct thorough user research, interpret insights, and understand customer messaging',
        'Use frameworks like JTBD (Job-To-Be-Done), User Stories, and User Quotes to define user requirements',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop',
          caption: 'Learn marketing and user research from top professors',
        },
        {
          src: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=300&h=200&fit=crop',
          caption: 'Interact with real customers while building a business',
        },
        {
          src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop',
          caption: 'Conduct customer discovery with early-stage startups',
        },
      ],
    },
    {
      title: 'Effective Communication',
      description:
        'Effective communication with team members, senior leadership, and external stakeholders is the most important predictor of career growth—especially as automation increases.',
      highlight: 'most important predictor of career growth',
      subtitle: 'At Mesa, by the end of the program, you will:',
      outcomes: [
        'Confidently represent yourself and your ideas with clear and concise articulation',
        'Write compelling, brief and purpose driven documents',
        'Influence without authority at the workplace',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
          caption: 'Learn the art of business storytelling, negotiations and presentations',
        },
        {
          src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop',
          caption: 'Gain 50+ public speaking opportunities and present ideas to top startup leaders',
        },
        {
          src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
          caption: 'Receive 1:1 coaching on executive presence and crafting your elevator pitch',
        },
      ],
    },
    {
      title: 'First Principles Problem Solving',
      description:
        'As Elon Musk says, this is "the only thing worth mastering." Understanding problems at their core and building solutions is vital in startups\' ambiguous environments.',
      highlight: 'the only thing worth mastering',
      subtitle: 'At Mesa, by the end of the program, you will:',
      outcomes: [
        'Deeply understand and communicate core problems',
        'Break down problems using frameworks like MECE and 80/20',
        'Identify key problem-solving levers and prioritize efforts on identified issues',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=300&h=200&fit=crop',
          caption: 'Analyze & break 100+ real startup business cases',
        },
        {
          src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
          caption: 'Access 50+ hours of workshops on structured problem-solving with examples',
        },
        {
          src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
          caption: 'Join bi-monthly moderated group discussions on trending business topics',
        },
      ],
    },
    {
      title: 'Business Acumen',
      description:
        '"What will it really take for this business to be successful?" is a nuanced question that lies at the intersection of core business domains like marketing, finance, operations, and strategy.',
      highlight: 'What will it really take for this business to be successful?',
      subtitle: 'At Mesa, by the end of the program, you will:',
      outcomes: [
        'Grasp and apply essential business frameworks and concepts',
        'Understand core business models, metrics, and flywheels',
        'Analyze revenue, cost, LTV, CAC and other levers that move the needle',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop',
          caption: 'Attend 500+ hours of lectures by top B-school professors',
        },
        {
          src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=200&fit=crop',
          caption: 'Work on live startup projects with leadership on real-world business challenges',
        },
        {
          src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop',
          caption: 'Solve 100+ renowned business cases in teams of 3-4',
        },
      ],
    },
    {
      title: 'Agile Product Thinking',
      description:
        'To succeed in high-growth startups, the key is to launch fast, fail fast; listen to customers, and continuously iterate on your product. This agile approach is fundamental to startup success.',
      highlight: 'launch fast, fail fast',
      subtitle: 'At Mesa, by the end of the program, you will:',
      outcomes: [
        'Define hypotheses, launch experiments, and build solutions based on customer needs',
        'Develop a Minimum Viable Product and craft a GTM strategy to secure your first 100 customers',
        'Create clear success metrics, track them and iterate solutions based on feedback',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop',
          caption: 'Attend 40+ hours of Product Management coursework',
        },
        {
          src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop',
          caption: 'Launch real products and go to market with Mesa Startup Lab',
        },
        {
          src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop',
          caption: 'Gain an Agile scrum certification',
        },
      ],
    },
    {
      title: 'Sales',
      description:
        'The ability to effectively sell products or services is crucial for any business success. Understanding customer psychology, building relationships, and closing deals are essential startup skills.',
      highlight: 'crucial for any business success',
      subtitle: 'At Mesa, by the end of the program, you will:',
      outcomes: [
        'Understand the process of selling in both B2C & B2B contexts',
        'Work backwards from an audience and product to create an efficient sales funnel',
        'Create a sales strategy for acquiring the first 100 customers for any product/service',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=200&fit=crop',
          caption: 'Undergo 40+ hours of sales coursework',
        },
        {
          src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
          caption: 'Get real exposure to selling via 1-day sales challenges with popular brands',
        },
        {
          src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop',
          caption: 'Make upwards of 5L in revenue via the dropshipping challenge in Term 1',
        },
      ],
    },
    {
      title: 'Process Thinking',
      description:
        'The ability to plan, execute and monitor a process is often overlooked. It is a key muscle to build if you want to be indispensable at the workplace and deliver end outcomes.',
      highlight: 'indispensable at the workplace',
      subtitle: 'At Mesa, our goal is that by the end of the program every student will be able to:',
      outcomes: [
        'Understand what goes behind setting up business processes from scratch',
        'Deconstruct a customer journey funnel, conversion metrics and interventions required at every stage',
        'Build comprehensive trackers, define micro success metrics and create task distributions',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
          caption: '25+ hours of workshops on program managing processes',
        },
        {
          src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
          caption: 'Internships at startups where you get to own a process end-to-end',
        },
        {
          src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=200&fit=crop',
          caption: 'Manage business processes for your small business in term 1',
        },
      ],
    },
  ];
  const contentData: LearningOutcomeData[] = data?.items && Array.isArray(data.items)
    ? data.items
    : (Array.isArray(data) ? data : staticContentData);

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
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border-y border-gray-200">
                  <thead>
                    <tr>
                      {data.comparisonTable.headers.map((header: string, i: number) => (
                        <th 
                          key={i} 
                          className={`p-2 sm:p-3 md:p-4 border-b border-gray-200 font-semibold text-[10px] sm:text-xs md:text-sm ${i === 3 ? 'bg-[#B30437] text-white' : 'bg-gray-50 text-gray-700'}`}
                        >
                          {i === 0 ? <span className="hidden md:inline">{header}</span> : header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.comparisonTable.rows.map((row: any, i: number) => (
                      <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                        <td className="p-2 sm:p-3 md:p-4 text-gray-700 font-medium text-[10px] sm:text-xs md:text-sm w-10 md:w-auto">
                          <div className="flex items-center justify-center md:justify-start gap-3">
                            <Image src={row.icon} alt={row.parameter} width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                            <span className="hidden md:inline whitespace-nowrap">{row.parameter}</span>
                          </div>
                        </td>
                        <td className="p-2 sm:p-3 md:p-4 text-gray-600 text-[10px] sm:text-xs md:text-sm">{row.column1}</td>
                        <td className="p-2 sm:p-3 md:p-4 text-gray-600 text-[10px] sm:text-xs md:text-sm">{row.column2}</td>
                        <td className="p-2 sm:p-3 md:p-4 font-medium bg-red-50 text-[#B30437] border-l border-red-100 text-[10px] sm:text-xs md:text-sm">{row.column3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-4 sm:mb-6">
            WHAT YOU&apos;LL MASTER
          </p>
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
                <h3 className="text-lg font-light text-black mb-2">LEARNING OUTCOMES</h3>
                <p className="text-[#80868b] text-xs">Navigate through our mastery areas</p>
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