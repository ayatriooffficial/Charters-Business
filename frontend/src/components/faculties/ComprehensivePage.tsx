'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ComprehensivePage() {
  // State for LearnFromFinest section
  const [activeFilter, setActiveFilter] = useState('All');

  // State for RealSection typewriter effect
  const [displayedText, setDisplayedText] = useState(['', '', '']);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const words = ['Strategy', 'Solutions', 'Support'];

  // State for mentorship section tabs
  const [activeTab, setActiveTab] = useState(0);
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // Scroll animation for Real section - Fixed to use object syntax
  const realSectionRef = useScrollAnimation<HTMLElement>(
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

  // Scroll detection for active tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      cardRefs.forEach((ref, index) => {
        if (ref.current) {
          const element = ref.current;
          const { offsetTop, offsetHeight } = element;

          if (scrollPosition >= offsetTop && scrollPosition <= offsetTop + offsetHeight) {
            setActiveTab(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [cardRefs]);

  // Faculty data for LearnFromFinest section
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Zal Phiroz',
      title: 'Adjunct Professor',
      company: 'HARVARD UNIVERSITY',
      image: 'https://i.pravatar.cc/400?img=11',
      category: 'Academicians'
    },
    {
      id: 2,
      name: 'Mr. Rajat Mathur',
      title: 'Managing Director',
      company: 'MorganStanley',
      image: 'https://i.pravatar.cc/400?img=12',
      category: 'Industry Experts'
    },
    {
      id: 3,
      name: 'Dr. Shad Morris',
      title: 'Adjunct Professor',
      company: 'MITSLOAN',
      image: 'https://i.pravatar.cc/400?img=13',
      category: 'Academicians'
    },
    {
      id: 4,
      name: 'Dr. Lan Mo',
      title: 'Adjunct Professor',
      company: 'NYU SHANGHAI',
      image: 'https://i.pravatar.cc/400?img=14',
      category: 'Academicians'
    },
    {
      id: 5,
      name: 'Mr. Naveen Munjal',
      title: 'Managing Director',
      company: 'HEROELECTRIC',
      image: 'https://i.pravatar.cc/400?img=15',
      category: 'Industry Experts'
    },
    {
      id: 6,
      name: 'Dr. Sarah Johnson',
      title: 'Professor of Strategy',
      company: 'STANFORD BUSINESS',
      image: 'https://i.pravatar.cc/400?img=16',
      category: 'Academicians'
    },
    {
      id: 7,
      name: 'Mr. Michael Chen',
      title: 'CEO',
      company: 'TECHCORP',
      image: 'https://i.pravatar.cc/400?img=17',
      category: 'Industry Experts'
    },
    {
      id: 8,
      name: 'Dr. Emily Rodriguez',
      title: 'Associate Professor',
      company: 'WHARTON SCHOOL',
      image: 'https://i.pravatar.cc/400?img=18',
      category: 'Academicians'
    },
    {
      id: 9,
      name: 'Mr. David Kumar',
      title: 'VP of Operations',
      company: 'GLOBAL SOLUTIONS',
      image: 'https://i.pravatar.cc/400?img=19',
      category: 'Industry Experts'
    },
    {
      id: 10,
      name: 'Dr. Lisa Wang',
      title: 'Professor of Finance',
      company: 'KELLOGG SCHOOL',
      image: 'https://i.pravatar.cc/400?img=20',
      category: 'Academicians'
    },
    {
      id: 11,
      name: 'Mr. James Wilson',
      title: 'Chief Strategy Officer',
      company: 'INNOVATION LABS',
      image: 'https://i.pravatar.cc/400?img=21',
      category: 'Industry Experts'
    },
    {
      id: 12,
      name: 'Dr. Maria Garcia',
      title: 'Professor of Marketing',
      company: 'INSEAD',
      image: 'https://i.pravatar.cc/400?img=22',
      category: 'Academicians'
    },
    {
      id: 13,
      name: 'Mr. Robert Thompson',
      title: 'Managing Partner',
      company: 'VENTURE CAPITAL',
      image: 'https://i.pravatar.cc/400?img=23',
      category: 'Industry Experts'
    },
    {
      id: 14,
      name: 'Dr. Jennifer Lee',
      title: 'Associate Dean',
      company: 'COLUMBIA BUSINESS',
      image: 'https://i.pravatar.cc/400?img=24',
      category: 'Academicians'
    },
    {
      id: 15,
      name: 'Mr. Alex Patel',
      title: 'Director of Innovation',
      company: 'FUTURE TECH',
      image: 'https://i.pravatar.cc/400?img=25',
      category: 'Industry Experts'
    },
    {
      id: 16,
      name: 'Dr. Rachel Brown',
      title: 'Professor of Leadership',
      company: 'LONDON BUSINESS',
      image: 'https://i.pravatar.cc/400?img=26',
      category: 'Academicians'
    },
    {
      id: 17,
      name: 'Mr. Kevin Zhang',
      title: 'Chief Technology Officer',
      company: 'DIGITAL DYNAMICS',
      image: 'https://i.pravatar.cc/400?img=27',
      category: 'Industry Experts'
    },
    {
      id: 18,
      name: 'Dr. Amanda Taylor',
      title: 'Professor of Economics',
      company: 'CHICAGO BOOTH',
      image: 'https://i.pravatar.cc/400?img=28',
      category: 'Academicians'
    },
    {
      id: 19,
      name: 'Mr. Daniel Kim',
      title: 'VP of Business Development',
      company: 'GROWTH PARTNERS',
      image: 'https://i.pravatar.cc/400?img=29',
      category: 'Industry Experts'
    },
    {
      id: 20,
      name: 'Dr. Sophie Miller',
      title: 'Associate Professor',
      company: 'OXFORD SAID',
      image: 'https://i.pravatar.cc/400?img=30',
      category: 'Academicians'
    }
  ];

  // Business leaders data for LessonsFromBest section
  const businessLeaders = [
    {
      id: 1,
      name: 'Mr. Mohammad Arshad',
      title: 'Director, Advisory Services',
      company: 'Business Review',
      image: 'https://i.pravatar.cc/400?img=1'
    },
    {
      id: 2,
      name: 'Mr. Vaibhav Shashwat',
      title: 'Policy & Public Affairs',
      company: 'CCTV',
      image: 'https://i.pravatar.cc/400?img=2'
    },
    {
      id: 3,
      name: 'Mr. Sameer Ranjan',
      title: 'Chief Technology Officer and',
      company: 'Director, Citemate',
      image: 'https://i.pravatar.cc/400?img=3'
    },
    {
      id: 4,
      name: 'Ms. Archana Sinha',
      title: 'Former Senior Director',
      company: 'Salesforce',
      image: 'https://i.pravatar.cc/400?img=4'
    },
    {
      id: 5,
      name: 'Mr. Raja Sekhar Thota',
      title: 'CTO & Co-Founder',
      company: 'AutoNinja GmbH',
      image: 'https://i.pravatar.cc/400?img=5'
    },
    {
      id: 6,
      name: 'Mr. Amit Sharma',
      title: 'VP of Engineering',
      company: 'TechCorp',
      image: 'https://i.pravatar.cc/400?img=6'
    },
    {
      id: 7,
      name: 'Ms. Priya Patel',
      title: 'Chief Marketing Officer',
      company: 'Digital Solutions',
      image: 'https://i.pravatar.cc/400?img=7'
    },
    {
      id: 8,
      name: 'Mr. Rohit Kumar',
      title: 'Head of Product',
      company: 'Innovation Labs',
      image: 'https://i.pravatar.cc/400?img=8'
    },
    {
      id: 9,
      name: 'Ms. Neha Singh',
      title: 'Director of Operations',
      company: 'Global Ventures',
      image: 'https://i.pravatar.cc/400?img=9'
    },
    {
      id: 10,
      name: 'Mr. Karthik Reddy',
      title: 'Senior Vice President',
      company: 'Financial Services',
      image: 'https://i.pravatar.cc/400?img=10'
    }
  ];

  const filteredFaculty =
    activeFilter === 'All'
      ? facultyMembers
      : facultyMembers.filter((member) => member.category === activeFilter);

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

  return (
    <div className="min-h-screen">
      {/* Hero Section with WashU Theme */}
      <section className="relative z-[5] mx-4 mt-32 mb-8 bg-white px-6 sm:px-8 lg:px-12 xl:px-16 pt-8 pb-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-black">
              <div
                className="inline-flex items-center bg-[#B30437] text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
                role="status"
              >
                <span>Faculty Excellence</span>
              </div>
              <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-3" role="text">
                WORLD-CLASS EDUCATORS
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                Learn from the{' '}
                <span className="italic font-serif text-[#B30437]">finest minds</span> in business
              </h1>

              <p className="text-lg mb-8 leading-relaxed max-w-lg">
                From MDs, CEOs and CTOs of leading unicorns to Ivy League professors, our faculty
                brings knowledge that blends theory with real-world impact.
              </p>

              <button
                className="inline-flex items-center space-x-3 bg-[#B30437] hover:bg-[#8B0000] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 group"
                type="button"
              >
                <span>Meet the Masters</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            <div className="relative">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-[#B30437] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                  <p className="text-sm">Play Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="relative z-[5] mx-4 mt-8 mb-8 bg-white px-6 sm:px-8 lg:px-12 xl:px-16 pt-8 pb-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="mb-12 text-center">
            <div
              className="inline-flex items-center bg-[#B30437] text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
              role="status"
            >
              <span>Our Faculty</span>
            </div>
            <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-3" role="text">
              INSPIRING EDUCATORS
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-black leading-tight">
              Faculty that <span className="italic font-serif text-[#B30437]">inspire and empower</span>
            </h2>
          </div>
          <div className="mb-8">
            <div className="flex space-x-8">
              {['All', 'Academicians', 'Industry Experts'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`pb-3 text-base font-medium transition-colors duration-200 ${activeFilter === filter ? 'text-black' : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {filteredFaculty.slice(0, 25).map((faculty) => (
              <div key={faculty.id} className="group">
                <div className="relative bg-gray-800 overflow-hidden aspect-[3/4] mb-3">
                  <Image src={faculty.image} alt={`${faculty.name}`} fill className="object-cover grayscale" />
                </div>

                <div className="text-left">
                  <h3 className="font-medium text-gray-900 text-xs mb-1 leading-tight">{faculty.name}</h3>
                  <p className="text-xs text-gray-600 leading-tight">{faculty.title}</p>
                  <p className="text-xs text-gray-600 leading-tight">{faculty.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Section */}
      <section
        ref={realSectionRef}
        className="relative z-[5] mx-4 mt-8 mb-8 bg-white px-6 sm:px-8 lg:px-12 xl:px-16 pt-8 pb-8"
      >
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex items-center">
            <div className="flex-1">
              <h2 className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold text-gray-900 leading-none">Real</h2>
            </div>

            <div className="flex-1 flex items-center justify-end">
              <div className="w-48 h-1 bg-[#B30437] mr-12"></div>

              <div className="text-right">
                <div className="text-3xl lg:text-4xl font-light text-gray-600 leading-tight mb-2">
                  {displayedText[0]}
                  {displayedText[0].length > 0 && displayedText[0].length < words[0].length && (
                    <span className="animate-pulse">|</span>
                  )}
                </div>
                <div className="text-3xl lg:text-4xl font-light text-gray-600 leading-tight mb-2">
                  {displayedText[1]}
                  {displayedText[1].length > 0 && displayedText[1].length < words[1].length && (
                    <span className="animate-pulse">|</span>
                  )}
                </div>
                <div className="text-3xl lg:text-4xl font-light text-gray-600 leading-tight">
                  {displayedText[2]}
                  {displayedText[2].length > 0 && displayedText[2].length < words[2].length && (
                    <span className="animate-pulse">|</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Mentorship Cards Section */}
      <section className="relative z-[5] mx-4 mt-8 mb-8 bg-white px-6 sm:px-8 lg:px-12 xl:px-16 pt-8 pb-8">
        <div className="max-w-7xl w-full mx-auto">
          {/* Section Header with Navigation Tabs */}
          <div className="pb-4 mb-8">
            <div className="flex">
              {['Career Mentors', 'Domain Mentors', 'Startup Coaches'].map((label, index) => (
                <button
                  key={label}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === index ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  onClick={() => {
                    setActiveTab(index);
                    cardRefs[index].current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Card 1 - Career Coach */}
            <div ref={cardRefs[0]} className="flex bg-white rounded-lg overflow-hidden min-h-[400px]">
              <div className="w-1/2 relative">
                <div className="grid grid-cols-3 h-full">
                  {[31, 32, 33].map((imgNum, idx) => (
                    <div key={imgNum} className="relative">
                      <Image
                        src={`https://i.pravatar.cc/300?img=${imgNum}`}
                        alt={`Career Mentor ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                      {(idx === 0 || idx === 2) && (
                        <div
                          className={`absolute ${idx === 0 ? 'top-4 left-4' : 'bottom-4 right-4'} w-6 h-6 bg-[#B30437] rounded`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/2 bg-white text-black p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Go further with a Career Coach</h3>
                <div className="space-y-4">
                  {[
                    'Design a compelling resume and personal pitch',
                    'Ace interviews with 100+ top recruiters',
                    'Strategize your way to senior management and leadership-level roles',
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="text-[#B30437] text-lg mt-1">✱</div>
                      <p className="text-sm">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 - Domain Mentors */}
            <div ref={cardRefs[1]} className="flex bg-white rounded-lg overflow-hidden min-h-[400px]">
              <div className="w-1/2 relative">
                <div className="grid grid-cols-3 h-full">
                  {[34, 35, 36].map((imgNum, idx) => (
                    <div key={imgNum} className="relative">
                      <Image
                        src={`https://i.pravatar.cc/300?img=${imgNum}`}
                        alt={`Domain Mentor ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                      {(idx === 0 || idx === 2) && (
                        <div
                          className={`absolute ${idx === 0 ? 'top-4 left-4' : 'bottom-4 right-4'} w-6 h-6 bg-[#B30437] rounded`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/2 bg-white text-black p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Go Deep with Domain Mentors</h3>
                <div className="space-y-4">
                  {[
                    'Connect with industry leaders across diverse domains',
                    'Develop a distinctive voice and online presence with expert tips',
                    'Gain the insights and leadership skills needed to stand out in your chosen domain',
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="text-[#B30437] text-lg mt-1">✱</div>
                      <p className="text-sm">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 - StartUp Coach */}
            <div ref={cardRefs[2]} className="flex bg-white rounded-lg overflow-hidden min-h-[400px]">
              <div className="w-1/2 relative">
                <div className="grid grid-cols-3 h-full">
                  {[37, 38, 39].map((imgNum, idx) => (
                    <div key={imgNum} className="relative">
                      <Image
                        src={`https://i.pravatar.cc/300?img=${imgNum}`}
                        alt={`Startup Mentor ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                      {(idx === 0 || idx === 2) && (
                        <div
                          className={`absolute ${idx === 0 ? 'top-4 left-4' : 'bottom-4 right-4'} w-6 h-6 bg-[#B30437] rounded`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/2 bg-white text-black p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Start strong with a StartUp Coach</h3>
                <div className="space-y-4">
                  {[
                    'Identify business opportunities, create business plans, and develop your go-to-market strategy',
                    'Network with VCs and angels, and secure $50-$100K seed funding for your startup',
                    'Acquire your first 1000 customers, accelerate growth, and establish your market presence',
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="text-[#B30437] text-lg mt-1">✱</div>
                      <p className="text-sm">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RealTimeMentorshipSection */}
      <section className="relative z-[5] mx-4 mt-8 mb-8 bg-white px-6 sm:px-8 lg:px-12 xl:px-16 pt-8 pb-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-black">
              <div
                className="inline-flex items-center bg-[#B30437] text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
                role="status"
              >
                <span>Real-Time Support</span>
              </div>
              <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-3" role="text">
                EXPERT MENTORSHIP
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
                Access{' '}
                <span className="italic font-serif text-[#B30437]">real-time mentorship</span> from 100+
                experts
              </h2>

              <div className="mb-8">
                <p className="text-lg mb-2">
                  From <span className="text-[#B30437] font-semibold">cybersecurity</span> to{' '}
                  <span className="text-[#B30437] font-semibold">generative AI</span>, our mentors span a
                  wide range of
                </p>
                <p className="text-lg">industries from across the globe.</p>
              </div>

              <div className="space-y-4">
                {[
                  "Whether you're building a startup or exploring jobs, our mentors provide tailored 1:1 mentorship.",
                  'Mentors can assist with last-minute assignments, interview prep or even emotional support.',
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-[#B30437] text-xl mt-1">★</div>
                    <p className="text-lg">
                      {text.includes('tailored 1:1 mentorship') ? (
                        <>
                          Whether you&apos;re building a startup or exploring jobs, our
                          mentors provide{' '}
                          <span className="text-[#B30437] font-semibold">tailored 1:1 mentorship</span>.
                        </>
                      ) : (
                        <>
                          Mentors can assist with{' '}
                          <span className="text-[#B30437] font-semibold">last-minute assignments</span>
                          , interview prep or even emotional support.
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm">Mentorship Video/Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Leaders Section */}
      <section className="relative z-[5] mx-4 mt-8 mb-8 bg-white px-6 sm:px-8 lg:px-12 xl:px-16 pt-8 pb-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="mb-12 text-center">
            <div
              className="inline-flex items-center bg-[#B30437] text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
              role="status"
            >
              <span>Business Leaders</span>
            </div>
            <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-3" role="text">
              INDUSTRY EXPERTISE
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-black leading-tight">
              Lessons from the{' '}
              <span className="italic font-serif text-[#B30437]">best in the business</span>
            </h2>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {businessLeaders.map((leader) => (
              <div key={leader.id} className="group">
                <div className="relative bg-gray-800 overflow-hidden aspect-[3/4] mb-3">
                  <Image src={leader.image} alt={`${leader.name}`} fill className="object-cover grayscale" />
                </div>

                <div className="text-left">
                  <h3 className="font-medium text-gray-900 text-xs mb-1 leading-tight">{leader.name}</h3>
                  <p className="text-xs text-gray-600 leading-tight">{leader.title}</p>
                  <p className="text-xs text-gray-600 leading-tight">{leader.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}