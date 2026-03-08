'use client';

import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

// Company tabs data
const companyTabs = [
  { id: 'google', name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { id: 'amazon', name: 'amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { id: 'nvidia', name: 'NVIDIA', logo: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg' },
  { id: 'accenture', name: 'accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { id: 'deloitte', name: 'Deloitte.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/DeloitteNewLogo.png/1280px-DeloitteNewLogo.png' },
  { id: 'bofa', name: 'Bank of America', logo: 'https://1000logos.net/wp-content/uploads/2016/10/Bank-of-America-Logo.png' },
];

// Video cards data by company
const videoCardsByCompany: Record<string, Array<{
  id: string;
  title: string;
  speaker: string;
  role: string;
  company: string;
  university: string;
  thumbnail: string;
}>> = {
  google: [
    {
      id: 'g1',
      title: 'Meet the Tetr Tribe: Class of 2028',
      speaker: 'Srividya Pranavi',
      role: 'Machine Learning Scientist',
      company: 'Apple',
      university: 'Carnegie Mellon University, IIT Kharagpur',
      thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop',
    },
    {
      id: 'g2',
      title: 'Commencement Address: Natalia Stefanowski',
      speaker: 'Srividya Pranavi',
      role: 'Machine Learning Scientist',
      company: 'Apple',
      university: 'Carnegie Mellon University, IIT Kharagpur',
      thumbnail: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=250&fit=crop',
    },
    {
      id: 'g3',
      title: 'Cracking the Tetr Admissions Code',
      speaker: 'Srividya Pranavi',
      role: 'Machine Learning Scientist',
      company: 'Apple',
      university: 'Carnegie Mellon University, IIT Kharagpur',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    },
    {
      id: 'g4',
      title: 'Path to Success at Google',
      speaker: 'Srividya Pranavi',
      role: 'Machine Learning Scientist',
      company: 'Apple',
      university: 'Carnegie Mellon University, IIT Kharagpur',
      thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop',
    },
  ],
  amazon: [
    {
      id: 'a1',
      title: 'Amazon Leadership Principles in Action',
      speaker: 'Rahul Sharma',
      role: 'Senior Product Manager',
      company: 'Amazon',
      university: 'Stanford University, IIT Delhi',
      thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop',
    },
    {
      id: 'a2',
      title: 'Building at Scale: AWS Stories',
      speaker: 'Priya Menon',
      role: 'Solutions Architect',
      company: 'Amazon',
      university: 'MIT, IIT Bombay',
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop',
    },
    {
      id: 'a3',
      title: 'From Campus to Amazon',
      speaker: 'Vikram Patel',
      role: 'Software Development Engineer',
      company: 'Amazon',
      university: 'UC Berkeley, BITS Pilani',
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop',
    },
    {
      id: 'a4',
      title: 'Innovation at Amazon',
      speaker: 'Sneha Gupta',
      role: 'Technical Program Manager',
      company: 'Amazon',
      university: 'Harvard, IIT Kanpur',
      thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop',
    },
  ],
  nvidia: [
    {
      id: 'n1',
      title: 'GPU Computing Revolution',
      speaker: 'Alex Chen',
      role: 'Senior GPU Architect',
      company: 'NVIDIA',
      university: 'Caltech, IIT Madras',
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
    },
    {
      id: 'n2',
      title: 'AI Hardware: The Future',
      speaker: 'Maya Johnson',
      role: 'AI Research Scientist',
      company: 'NVIDIA',
      university: 'Oxford, IISc Bangalore',
      thumbnail: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=250&fit=crop',
    },
    {
      id: 'n3',
      title: 'Deep Learning Infrastructure',
      speaker: 'Karthik Reddy',
      role: 'Principal Engineer',
      company: 'NVIDIA',
      university: 'Georgia Tech, NIT Trichy',
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
    },
    {
      id: 'n4',
      title: 'Gaming to AI: NVIDIA Journey',
      speaker: 'Sarah Williams',
      role: 'Product Director',
      company: 'NVIDIA',
      university: 'Princeton, IIT Roorkee',
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
    },
  ],
  accenture: [
    {
      id: 'ac1',
      title: 'Digital Transformation Stories',
      speaker: 'Anjali Verma',
      role: 'Managing Director',
      company: 'Accenture',
      university: 'Wharton, IIM Ahmedabad',
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop',
    },
    {
      id: 'ac2',
      title: 'Consulting Career Path',
      speaker: 'David Miller',
      role: 'Senior Consultant',
      company: 'Accenture',
      university: 'Columbia, XLRI',
      thumbnail: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=250&fit=crop',
    },
    {
      id: 'ac3',
      title: 'Tech Consulting Insights',
      speaker: 'Ritu Kapoor',
      role: 'Technology Architect',
      company: 'Accenture',
      university: 'Carnegie Mellon, IIT Guwahati',
      thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop',
    },
    {
      id: 'ac4',
      title: 'Strategy at Scale',
      speaker: 'Michael Brown',
      role: 'Strategy Lead',
      company: 'Accenture',
      university: 'INSEAD, ISB',
      thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop',
    },
  ],
  deloitte: [
    {
      id: 'd1',
      title: 'Audit to Advisory Journey',
      speaker: 'Neha Saxena',
      role: 'Partner',
      company: 'Deloitte',
      university: 'London Business School, IIM Bangalore',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    },
    {
      id: 'd2',
      title: 'Risk Management Excellence',
      speaker: 'James Wilson',
      role: 'Risk Advisory Director',
      company: 'Deloitte',
      university: 'NYU Stern, FMS Delhi',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
    },
    {
      id: 'd3',
      title: 'Financial Services Transformation',
      speaker: 'Pooja Nair',
      role: 'Senior Manager',
      company: 'Deloitte',
      university: 'Kellogg, SPJIMR',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    },
    {
      id: 'd4',
      title: 'Tax Technology Innovation',
      speaker: 'Robert Lee',
      role: 'Tax Technology Lead',
      company: 'Deloitte',
      university: 'MIT Sloan, IIM Calcutta',
      thumbnail: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop',
    },
  ],
  bofa: [
    {
      id: 'b1',
      title: 'Investment Banking Insights',
      speaker: 'Arun Kumar',
      role: 'Vice President',
      company: 'Bank of America',
      university: 'Harvard Business School, IIM Lucknow',
      thumbnail: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=250&fit=crop',
    },
    {
      id: 'b2',
      title: 'Wealth Management Strategies',
      speaker: 'Emily Davis',
      role: 'Managing Director',
      company: 'Bank of America',
      university: 'Stanford GSB, JBIMS',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop',
    },
    {
      id: 'b3',
      title: 'FinTech at BofA',
      speaker: 'Sanjay Mehta',
      role: 'Technology Director',
      company: 'Bank of America',
      university: 'Berkeley Haas, IIT BHU',
      thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop',
    },
    {
      id: 'b4',
      title: 'Global Markets Career',
      speaker: 'Lisa Thompson',
      role: 'Global Markets Head',
      company: 'Bank of America',
      university: 'Chicago Booth, MDI Gurgaon',
      thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop',
    },
  ],
};

// University logos for featured section
const universityLogos = [
  { name: 'Stanford University', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'IIT Bombay', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/330px-Indian_Institute_of_Technology_Bombay_Logo.svg.png' },
];

export default function FirstStepSuccessComponent() {
  const [mainTab, setMainTab] = useState('mentor');
  const [activeTab, setActiveTab] = useState('google');
  const videoSliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Main tabs data
  const mainTabs = [
    { id: 'mentor', label: 'Mentor Networking' },
    { id: 'cocurriculars', label: 'Co-curriculars' },
    { id: 'localempact', label: 'Local Empact' },
  ];

  // Track scroll position for navigation buttons
  useEffect(() => {
    const slider = videoSliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      setCanScrollLeft(slider.scrollLeft > 10);
      setCanScrollRight(slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 10);
    };

    handleScroll();
    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const scrollVideoSlider = (direction: number) => {
    const slider = videoSliderRef.current;
    if (!slider) return;
    const cardWidth = window.innerWidth * 0.8; // 80vw card width
    slider.scrollTo({
      left: slider.scrollLeft + (direction * cardWidth),
      behavior: 'smooth'
    });
  };

  return (
    <section className="mx-[0%] relative z-[5] bg-white text-black" role="region" aria-labelledby="behind-scenes-heading">
      <div className="max-w-[85rem] w-full mx-auto">
        {/* Page Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 pt-8">
          <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-3" role="text">
            BUILD YOUR FOUNDATION
          </p>
          <h2 id="courses-heading" className="leading-normal text-[35px] font-semibold text-black">
            Your first step to <span className="italic font-serif text-[#B30437]">success</span>
          </h2>
          <p className="sr-only">Explore our upcoming courses to advance your career</p>
        </div>

        {/* Main Tabs Section */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <div className="flex gap-4 sm:gap-8 justify-start sm:justify-center overflow-x-auto scrollbar-hide pb-[2px]">
              {mainTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setMainTab(tab.id)}
                  className={`shrink-0 px-3 sm:px-6 py-3 text-xs sm:text-base font-medium transition-all duration-300 border-b-2 -mb-[2px] whitespace-nowrap ${mainTab === tab.id
                    ? 'border-[#B30437] text-[#B30437]'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  aria-pressed={mainTab === tab.id}
                  aria-label={`View ${tab.label} content`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {mainTab === 'mentor' ? (
          <>
            {/* Go Behind the Scenes Section */}
            <div className="mb-16 lg:mb-20">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8">
                {/* Left: Featured Video */}
                <div className="space-y-6">
                  <div>
                    <h2 id="behind-scenes-heading" className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-2">
                      Go Behind<br />
                      the Scenes at <span className="italic font-serif">Tetr</span>
                    </h2>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-medium">The story behind Tetr</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Our Leaders discuss how Tetr is redefining education through &apos;learning by doing&apos;.
                    </p>
                  </div>

                  {/* University Logos */}
                  <div className="flex items-center gap-6 pt-2">
                    {universityLogos.map((uni) => (
                      <div key={uni.name} className="flex items-center gap-2">
                        <div className="relative h-6 w-auto">
                          <img
                            src={uni.logo}
                            alt={uni.name}
                            width={80}
                            height={24}
                            className="h-6 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Content */}
                <div className="relative group">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
                      alt="Featured video thumbnail"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                        aria-label="Play video"
                      >
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#B30437] ml-1" fill="currentColor" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Logos Tabs */}
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto scrollbar-hide gap-2 sm:gap-4 lg:gap-8 pb-4 justify-start lg:justify-center ">
                {companyTabs.map((company) => (
                  <button
                    key={company.id}
                    onClick={() => setActiveTab(company.id)}
                    className={`shrink-0 px-4 py-2 transition-all duration-300 border-b-2 -mb-[17px] ${activeTab === company.id
                      ? 'border-[#B30437] opacity-100'
                      : 'border-transparent opacity-50 hover:opacity-80'
                      }`}
                    aria-pressed={activeTab === company.id}
                    aria-label={`View ${company.name} videos`}
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      width={100}
                      height={30}
                      className="h-6 sm:h-8 w-auto object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Video Cards Grid */}
            <div className="relative">
              <div
                ref={videoSliderRef}
                className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 sm:gap-6 snap-x snap-mandatory lg:snap-none -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide border-b border-gray-200 border pb-16"
                role="list"
                aria-label={`${companyTabs.find(c => c.id === activeTab)?.name} videos`}
              >
                {videoCardsByCompany[activeTab]?.map((video, index) => (
                  <article
                    key={video.id}
                    className="flex-shrink-0 w-[80vw] sm:w-[320px] lg:w-auto snap-center bg-white overflow-hidden group cursor-pointer"
                    role="listitem"
                    style={{
                      animation: `fadeIn 0.4s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 320px, 25vw"
                        loading="lazy"
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                          <Play className="w-5 h-5 text-[#B30437] ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                      <h3 className="text-sm sm:text-base font-semibold mb-2 leading-tight line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-700 text-xs sm:text-sm mb-3">{video.speaker}</p>

                      {/* Role & Company */}
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span className="text-[#B30437]">★</span>
                        <span>{video.role}, {video.company}</span>
                      </div>

                      {/* University */}
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="text-[#B30437]">★</span>
                        <span>{video.university}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Mobile Navigation Buttons */}
              <div className="lg:hidden absolute top-1/3 -translate-y-1/2 right-0 pointer-events-none z-10">
                {canScrollRight && (
                  <button
                    onClick={() => scrollVideoSlider(1)}
                    className="w-10 h-10 rounded-full bg-[#B30437] hover:bg-red-700 transition-all duration-300 shadow-md flex items-center justify-center pointer-events-auto"
                    aria-label="Next slide"
                    type="button"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" aria-hidden="true">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="lg:hidden absolute top-1/3 -translate-y-1/2 left-0 pointer-events-none z-10">
                {canScrollLeft && (
                  <button
                    onClick={() => scrollVideoSlider(-1)}
                    className="w-10 h-10 rounded-full bg-[#B30437] hover:bg-red-700 transition-all duration-300 shadow-md flex items-center justify-center pointer-events-auto"
                    aria-label="Previous slide"
                    type="button"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" aria-hidden="true">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Go Behind the Scenes Section for other tabs */}
            <div className="mb-16 lg:mb-20">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Featured Video */}
                <div className="space-y-6">
                  <div>
                    <h2 id="behind-scenes-heading" className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-2">
                      Go Behind<br />
                      the Scenes at <span className="italic font-serif">Tetr</span>
                    </h2>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-medium">{mainTabs.find(t => t.id === mainTab)?.label}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Content coming soon for {mainTabs.find(t => t.id === mainTab)?.label}.
                    </p>
                  </div>

                  {/* University Logos */}
                  <div className="flex items-center gap-6 pt-2">
                    {universityLogos.map((uni) => (
                      <div key={uni.name} className="flex items-center gap-2">
                        <div className="relative h-6 w-auto">
                          <img
                            src={uni.logo}
                            alt={uni.name}
                            width={80}
                            height={24}
                            className="h-6 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Content */}
                <div className="relative group">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
                      alt="Featured video thumbnail"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                        aria-label="Play video"
                      >
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#B30437] ml-1" fill="currentColor" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* No data message */}
            <div className="py-10 text-center">
              <p className="text-gray-500 text-lg">No additional data available for {mainTabs.find(t => t.id === mainTab)?.label}</p>
            </div>
          </>
        )}
      </div>

      {/* CSS for fade animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
