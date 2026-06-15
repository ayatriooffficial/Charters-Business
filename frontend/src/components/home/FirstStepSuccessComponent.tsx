'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import HighlightText from '../shared/HighlightObserver';
import Link from "next/link";
import { getApprovedBlogs, Blog } from '../../lib/api';
import { STATIC_BLOGS, slugify } from '../../data/staticBlogs';
import type { DisplayBlog } from '../../data/staticBlogs';
// Company tabs data
const companyTabs = [
  { id: 'google', name: 'Google', logo: '/logos/google.svg' },
  { id: 'amazon', name: 'amazon', logo: '/logos/amazon.svg' },
  { id: 'nvidia', name: 'NVIDIA', logo: '/logos/nvidia.svg' },
  { id: 'accenture', name: 'accenture', logo: '/logos/accenture.svg' },
  { id: 'deloitte', name: 'Deloitte.', logo: '/logos/deloitte.png' },
  { id: 'bofa', name: 'Bank of America', logo: '/logos/bofa.png' },
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
  { name: 'Stanford University', logo: '/logos/Stanford.svg' },
  { name: 'Google', logo: '/logos/google.svg' },
  { name: 'IIT Bombay', logo: '/logos/iit_bombay.svg' },
];

// Static blogs and slugify function are imported from src/data/staticBlogs

export default function FirstStepSuccessComponent() {
  const blogSliderRef = useRef<HTMLDivElement>(null);

  const scrollBlogs = () => {
    if (!blogSliderRef.current) return;

    blogSliderRef.current.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };
  const [mainTab, setMainTab] = useState('mentor');
  const [activeTab, setActiveTab] = useState('google');
  const videoSliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Dynamic blogs state
  const [blogsList, setBlogsList] = useState<DisplayBlog[]>(STATIC_BLOGS);

  // Fetch approved blogs from backend database on load
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getApprovedBlogs();
        if (response && response.success && Array.isArray(response.data) && response.data.length > 0) {
          const dbBlogsMapped: DisplayBlog[] = response.data.map(b => ({
            _id: b._id,
            title: b.title,
            author: b.author,
            readTime: b.readTime,
            category: b.category,
            content: b.content,
            tags: b.tags,
            releasedAt: b.releasedAt ? String(b.releasedAt) : undefined
          }));
          
          const combined = [...dbBlogsMapped];
          STATIC_BLOGS.forEach(sb => {
            const titleExists = dbBlogsMapped.some(db => 
              db.title.toLowerCase().replace(/[^a-z0-9]/g, '') === sb.title.toLowerCase().replace(/[^a-z0-9]/g, '')
            );
            if (!titleExists) {
              combined.push(sb);
            }
          });
          setBlogsList(combined);
        }
      } catch (err) {
        console.error("Failed to load approved blogs, using static fallbacks:", err);
      }
    };

    fetchBlogs();
  }, []);

  // Main tabs data — ai_interview added
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
    slider.addEventListener('scroll', handleScroll, { passive: true });
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const scrollVideoSlider = (direction: number) => {
    const slider = videoSliderRef.current;
    if (!slider) return;
    const cardWidth = window.innerWidth * 0.8;
    slider.scrollTo({
      left: slider.scrollLeft + (direction * cardWidth),
      behavior: 'smooth',
    });
  };

  const renderMentorTab = () => (
    <>
      <div>
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
  );

  const renderOtherTab = () => (
    <>
      <div>
        <div className="relative group">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
              alt="Featured video thumbnail"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                aria-label="Play video"
              >
                <Image src="/Charters-icon/Cancel.svg" alt="icon" width={12} height={12} className="w-6 h-6 sm:w-8 sm:h-8 text-[#B30437] ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 text-center">
        <p className="text-gray-500 text-lg">No additional data available for {mainTabs.find((t) => t.id === mainTab)?.label}</p>
      </div>
    </>
  );
  // Simple parser to render basic markdown paragraphs and bolding in modal
  const renderBlogContent = (markdownText: string) => {
    if (!markdownText) return null;
    return markdownText.split('\n').map((paragraph, index) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return <div key={index} className="h-3" />;

      // Header 2 (##)
      if (trimmed.startsWith('## ')) {
        return (
          <h2
            key={index}
            className="text-lg sm:text-2xl font-extrabold text-gray-900 mt-6 mb-3 border-b border-gray-100 pb-2"
          >
            {trimmed.replace('## ', '')}
          </h2>
        );
      }

      // Header 3 (###)
      if (trimmed.startsWith('### ')) {
        return (
          <h3
            key={index}
            className="text-base sm:text-lg font-bold text-gray-900 mt-5 mb-2"
          >
            {trimmed.replace('### ', '')}
          </h3>
        );
      }

      // Bullet points (* or -)
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        return (
          <li
            key={index}
            className="text-gray-700 leading-relaxed ml-6 list-disc mb-2"
          >
            {parseBoldText(trimmed.substring(2))}
          </li>
        );
      }

      return (
        <p
          key={index}
          className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base"
        >
          {parseBoldText(trimmed)}
        </p>
      );
    });
  };

  const parseBoldText = (text: string) => {
    const parts = text.split(/\*\*([\s\S]*?)\*\*/g);
    return parts.map((part, i) => 
      i % 2 === 1 ? <strong key={i} className="font-bold text-gray-950">{part}</strong> : part
    );
  };

  return (
    <section className="relative z-[5] bg-white text-black pt-10 pb-0">
      <div className="max-w-[85rem] w-full mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-3">
            FROM OUR BLOGS & EVENTS
          </p>

          <h2 className="leading-none text-black text-2xl sm:text-3xl md:text-[35px] font-bold pb-[17px]">
            From the Charter's{" "}
            <HighlightText className="font-bold">
              Editorial Desk
            </HighlightText>
          </h2>

          <p className="text-black text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            Deep dives on AI careers and <strong>Accounting</strong>, <strong>Business & Marketing</strong>, learning strategies global <strong>top MNC's</strong>, and what the data actually says about the <strong>global market</strong>.
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          ref={blogSliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
        >
          {blogsList.map((blog) => (
            <Link
              key={blog.title}
              href={`/blogs/${blog._id || slugify(blog.title)}`}
              className="text-left flex-none w-[85vw] sm:w-[380px] lg:w-[420px] snap-start border-t border-b border-r border-gray-200 border-l-0 bg-white p-6 min-h-[170px] flex flex-col justify-between hover:bg-gray-50 transition-colors duration-200"
            >
              <div>
                <span className="text-xs font-semibold text-[#B30437] uppercase tracking-wider mb-2 block">
                  {blog.category}
                </span>
                <h3 className="text-xl font-bold leading-snug text-black mb-6 line-clamp-2">
                  {blog.title}
                </h3>
              </div>

              <div className="border-t border-gray-200 pt-4 flex items-center justify-between text-sm text-gray-600 w-full">
                <span>{blog.author}</span>
                <span>{blog.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none">
          <button
            onClick={scrollBlogs}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#B30437] hover:bg-red-700 shadow flex items-center justify-center pointer-events-auto transition-all duration-200"
            aria-label="Next"
            type="button"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Article Preview Modal removed to open in a different page */}
    </section>
  );
}