'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import HighlightText from '../shared/HighlightObserver';
import Link from "next/link";
import { getApprovedBlogs, Blog } from '../../lib/api';
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

interface DisplayBlog {
  _id?: string;
  title: string;
  author: string;
  readTime: string;
  category: string;
  content: string;
  tags?: string[];
  releasedAt?: string;
}

const STATIC_BLOG_CONTENTS: Record<string, string> = {
  "AI Agent Frameworks: What It Is & How It Works": `## The Rise of Agentic Workflows

In 2026, the discussion around Artificial Intelligence has shifted from simple chatbots to autonomous agents. Unlike traditional AI applications that respond to single prompts, **AI Agent Frameworks** allow systems to plan, execute multi-step workflows, handle tools, and self-correct their outputs.

### What is an AI Agent Framework?

An AI Agent Framework is a software framework that helps developers build autonomous systems. These systems possess:
1. **Memory**: Long-term and short-term memory to keep track of conversations and tasks.
2. **Planning**: The ability to break down complex tasks into smaller, manageable steps.
3. **Tools**: Capabilities to query databases, call external APIs, or execute code.

### Core Frameworks in 2026

Several frameworks have emerged as industry standards:
* **LangGraph**: Excellent for building cyclical and stateful multi-agent workflows.
* **CrewAI**: Designed for orchestrating group tasks where different AI agents play distinct roles (e.g., researcher, writer, validator).
* **AutoGen**: Microsoft's framework that enables multi-agent conversations to solve complex programming tasks.

## Why Businesses are Adopting AI Agents

AI Agents are transforming operations because they don't just answer questions; they complete jobs. For example, a customer support agent can retrieve user info, check refund eligibility rules, call the payment processor API to trigger a refund, and send a confirmation email—all without human intervention.`,

  "Will AI Replace Software Engineers? Truth, Opinions and Career Impact": `## The Software Engineering Shift

As generative AI models become increasingly proficient at writing, debugging, and refactoring code, many aspiring developers are asking a critical question: **Will AI replace software engineers?**

The short answer is **no, but it will fundamentally redefine what a software engineer does.**

### From Syntax Writers to System Architects

AI tools like GitHub Copilot, Cursor, and custom coding agents are highly efficient at generating boilerplate code and fixing syntax errors. However, they lack:
1. **Deep Business Context**: Understanding why a feature is being built and how it aligns with user needs.
2. **System Design & Architecture**: Designing scalable, distributed systems that integrate securely.
3. **Complex Debugging**: Troubleshooting edge-case race conditions in large legacy codebases.

### The Rise of the "AI-Augmented" Engineer

In 2026, the most successful engineers are those who know how to collaborate with AI. By offloading repetitive coding tasks to AI agents, human developers can focus on:
* **System Design & Security**
* **Product Management and UX**
* **Ensuring Data Privacy and Compliance**

Rather than shrinking, the software engineering field is expanding for developers who elevate their skills from syntax writing to high-level system engineering.`,

  "SQL Roadmap 2026: Learning Paths, Career Roles and Tools": `## Why SQL Remains King in 2026

Despite the proliferation of NoSQL, vector databases, and AI-driven data extraction tools, Structured Query Language (SQL) remains the absolute foundation of data handling. Whether you are building a backend application, performing data analytics, or training machine learning models, SQL is an indispensable skill.

### The 2026 SQL Learning Path

To master SQL today, you should follow this structured roadmap:

### Phase 1: Basic Queries
* **Basic Syntax**: SELECT, WHERE, ORDER BY, LIMIT.
* **Aggregations**: GROUP BY, HAVING, and standard aggregation functions like SUM, AVG, COUNT.

### Phase 2: Joins & Relational Design
* **Joins**: INNER JOIN, LEFT/RIGHT JOIN, FULL OUTER JOIN.
* **Relationships**: One-to-One, One-to-Many, and Many-to-Many relational designs.

### Phase 3: Advanced SQL
* **Window Functions**: ROW_NUMBER(), RANK(), DENSE_RANK(), and cumulative statistics.
* **Common Table Expressions (CTEs)**: Writing readable, modular queries using the \`WITH\` clause.
* **Performance Tuning**: Indexes, execution plans, and query optimization.

## Relevant Roles for SQL Experts
SQL is a core requirement for several high-paying roles:
1. **Data Analyst**: Querying relational databases to build business reports.
2. **Backend Engineer**: Managing system databases and database migrations.
3. **Data Engineer**: Constructing data pipelines and managing data warehouses (e.g., Snowflake, BigQuery).`,

  "Top AI Skills Every Student Should Learn in 2026": `## The New AI Literacy

Being "computer literate" is no longer enough. In 2026, employers expect a level of **AI literacy** across almost all business and technology domains. For students preparing to enter the job market, mastering these skills is key to securing competitive positions.

### Essential AI Skills to Master

### 1. Advanced Prompt Engineering
Moving beyond simple questions. Learn how to use **few-shot prompting**, **chain-of-thought prompting**, and **structured output parsing** to get reliable outputs from LLMs.

### 2. Retrieval-Augmented Generation (RAG)
Learn how businesses feed proprietary data to AI models securely. Understanding how document chunking, embeddings, and vector databases (like Pinecone or Chroma) work will make you a highly valuable hire in any tech-adjacent team.

### 3. Workflow Automation
Understand how to connect AI models with tools like Zapier, Make, or custom python scripts to automate manual tasks such as content creation, database entry, and report aggregation.

## How to Showcase Your AI Skills
Don't just write "AI" on your resume. Build projects:
* Automate a daily task and write a case study.
* Build a simple Q&A chatbot using a custom knowledge base.
* Integrate an AI translation or summarization API into a web project.`,

  "How to Build a Career in Data Analytics from Scratch": `## The Roadmap to Data Analytics

Data is often called the new oil, and companies are searching for professionals who can extract actionable insights from raw data. If you have no background in programming, entering **Data Analytics** is one of the most accessible routes into technology.

### Step-by-Step Learning Path

### Step 1: Advanced Excel
Excel is still the world's most popular data tool. Master VLOOKUP/XLOOKUP, Pivot Tables, Power Query, and basic statistical analysis.

### Step 2: SQL (Structured Query Language)
Learn to retrieve data directly from database systems. This is the single most critical technical skill for any data analyst.

### Step 3: BI & Visualization Tools
Master **Power BI** or **Tableau** to build interactive business dashboards that help leadership make decisions.

### Step 4: Python Foundations (Optional but Recommended)
Learn basic Python libraries like **Pandas** and **NumPy** for advanced data manipulation and cleaning.

## Preparing Your Portfolio
The best way to get hired is to prove you can do the work. Build 3 projects:
* A public dashboard analyzing open-source data (e.g., Kaggle datasets).
* An analysis query cleaning a messy raw database.
* A written presentation explaining the business insights derived from your project.`
};

const STATIC_BLOGS: DisplayBlog[] = [
  {
    title: "AI Agent Frameworks: What It Is & How It Works",
    author: "Agnish Rawat",
    readTime: "20 min read",
    category: "Technology",
    content: STATIC_BLOG_CONTENTS["AI Agent Frameworks: What It Is & How It Works"],
  },
  {
    title: "Will AI Replace Software Engineers? Truth, Opinions and Career Impact",
    author: "Team Scaler",
    readTime: "14 min read",
    category: "Career Roadmaps",
    content: STATIC_BLOG_CONTENTS["Will AI Replace Software Engineers? Truth, Opinions and Career Impact"],
  },
  {
    title: "SQL Roadmap 2026: Learning Paths, Career Roles and Tools",
    author: "Tushar Bisht",
    readTime: "18 min read",
    category: "Career Roadmaps",
    content: STATIC_BLOG_CONTENTS["SQL Roadmap 2026: Learning Paths, Career Roles and Tools"],
  },
  {
    title: "Top AI Skills Every Student Should Learn in 2026",
    author: "Charters Team",
    readTime: "12 min read",
    category: "Professional Skills",
    content: STATIC_BLOG_CONTENTS["Top AI Skills Every Student Should Learn in 2026"],
  },
  {
    title: "How to Build a Career in Data Analytics from Scratch",
    author: "Career Desk",
    readTime: "16 min read",
    category: "Career Roadmaps",
    content: STATIC_BLOG_CONTENTS["How to Build a Career in Data Analytics from Scratch"],
  },
];

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
  const [activeBlog, setActiveBlog] = useState<DisplayBlog | null>(null);

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

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveBlog(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeBlog]);

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
            <button
              key={blog.title}
              onClick={() => setActiveBlog(blog)}
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
            </button>
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

      {/* Blog Detail Overlay Modal */}
      {activeBlog && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setActiveBlog(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-150 relative">
              <button
                onClick={() => setActiveBlog(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="pr-8">
                <span className="inline-block bg-[#B30437]/10 text-[#B30437] text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-3">
                  {activeBlog.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug">
                  {activeBlog.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    By {activeBlog.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {activeBlog.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              <article className="prose max-w-none text-left">
                {renderBlogContent(activeBlog.content)}
              </article>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setActiveBlog(null)}
                className="px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium text-sm transition-colors shadow-sm"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}