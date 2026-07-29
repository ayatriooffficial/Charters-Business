"use client";
import { createPortal } from 'react-dom'
import React, { useState, memo, useCallback, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import useInViewPlay from "@/components/micro/useInViewPlay";
const GlobalLoginModal = dynamic(
    () => import("@/components/shared/GlobalLoginModal"),
    { ssr: false, loading: () => <div /> }
);
import HighlightText from "../shared/HighlightObserver";
import ModalBackdrop from "@/components/shared/ModalBackdrop";

interface CardData {
    id: string;
    title: string;
    description: string;
    color: string;
    bgColor: string;
}

interface ServiceCard {
    title: string;
    description: string;
    iconColor: string;
    accentColor: string;
    features: Array<{
        icon: string;
        label: string;
    }>;
}
interface FooterFeature {
    icon: string;
    label: string;
}
interface ContentData {
    title: string;
    highlightText: string;
    description: string;
    stats: {
        main: {
            value: string;
            label: string;
            bgColor: string;
        };
        secondary: Array<{
            value: string;
            label: string;
            bgColor: string;
        }>;
    };
    buttonText: string;
    buttonColor: string;
    imageSrc: string;
    imageAlt: string;
    serviceCards: ServiceCard[];
    footer: {
        title: string;
        description: string;
        features: FooterFeature[];
    };
    avatar: {
        src: string;
        alt: string;
        borderColor: string;
    };
}


const cardsData: CardData[] = [
    {
        id: "shadow-cxos",
        title: "Career Identity Engineering",
        description: "Week 1-3",
        color: "bg-pink-500",
        bgColor: "hover:bg-pink-50",
    },
    {
        id: "not-summer",
        title: "Business Communication & Critical Thinking",
        description: "Week 4-9",
        color: "bg-purple-500",
        bgColor: "hover:bg-purple-50",
    },
    {
        id: "not-summer-month3",
        title: "Real-World Paid Internship Across 7 Countries",
        description: "Week 10-4",
        color: "bg-purple-500",
        bgColor: "hover:bg-purple-50",
    },
    {
        id: "not-summer-month4",
        title: "AI-Powered Placement Launch & Long-Term Career",
        description: "Week 16-22",
        color: "bg-purple-500",
        bgColor: "hover:bg-purple-50",
    },
    {
        id: "real-assignments",
        title: "Leadership & Social Impact Lab",
        description: "Week 22-26",
        color: "bg-cyan-400",
        bgColor: "hover:bg-cyan-50",
    }

];

const contentData: Record<string, ContentData> = {
    "shadow-cxos": {
        title: "Career Identity Engineering",
        highlightText: "",
        description:
            "CareerPathx™ fast steps start with students undergo a structured identity transformation — moving from frashers  mindset to professional mindset. First 2 weeks rewires how students see themselves — from learners to professionals-in-training.",
        stats: {
            main: {
                value: "",
                label: "",
                bgColor: "",
            },
            secondary: [
                {
                    value: "94%",
                    label: "students complete career blueprint within 3 week",
                    bgColor: "",
                },
                {
                    value: "3.2×",
                    label: "higher LinkedIn profesonal profile completion",
                    bgColor: "",
                },
                {
                    value: "100%",
                    label: "score with a named industry mentor before month 2",
                    bgColor: "",
                },
            ],
        },
        buttonText: "Charter Carrer AI Engine",
        buttonColor: "bg-none text-[#B30437]",
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784539837/placement-service_itn06c.avif",
        imageAlt: "Students in leadership mentorship program with executives",
        serviceCards: [
            {
                title: "Career DNA Assessment",
                description: "A framework that identify whether a student has the natural aptitude, behavioral strengths, personality skill, cognitive abilities, & career-fit potential.",
                iconColor: "text-[#B30437]",
                accentColor: "from-[#B30437] to-[#B30437]/50",
                features: [
                    { icon: "document", label: "AI-powered psychometric + strength profiling" },
                    { icon: "search", label: "Personal Career Blueprint Mapping" },
                    { icon: "users", label: "12-week personal brand roadmap creation" },
                ],
            },
            {
                title: "Professional Identity Architecture",
                description: "Designing a student’s career identity, credibility, positioning, reputation, authority, and employability narrative before they enter the job market.",
                iconColor: "text-orange-500",
                accentColor: "from-orange-500 to-orange-300",
                features: [
                    { icon: "briefcase", label: "LinkedIn profile recruiter-reverse-engineered templates" },
                    { icon: "lightning", label: "Professional headshot session" },
                    { icon: "wrench", label: "Personal narrative framework" },
                    { icon: "users", label: "Digital footprint audit" },
                    { icon: "database", label: "AI Resource Library" },
                    { icon: "check", label: "Personal Brnad Success Tracking" },
                ],
            },
            {
                title: "Digital Professional Identity",
                description: "Build Digital Professional Identity, Create Personal Brand, and Become Globally Visible to Employers, Clients, and Career Opportunities.",
                iconColor: "text-[#B30437]",
                accentColor: "from-[#B30437] to-[#B30437]/50",
                features: [
                    { icon: "database", label: "Professional services website creation " },
                    { icon: "search", label: "Freelancing profile creation" },
                    { icon: "check", label: "Professional group & events" },
                ],
            },
        ],
        footer: {
            title: "AI Brand Profile Engine",
            description: "Charter Career provides the high-level exposure and brand-building tools needed to position students for elite leadership roles.",
            features: [
                { icon: "chart", label: "Brand Analytics" },
                { icon: "lightning", label: "Executive Sync" },
                { icon: "check", label: "Success Plan" },
                { icon: "document", label: "Case Notes" }
            ]
        },
        avatar: {
            src: "",
            alt: "Placement Officer",
            borderColor: "border-cyan-400"
        },
    },
    "real-assignments": {
        title: "Leadership & Social Impact",
        highlightText: "",
        description:
            "Build leadership skills, accelerate your career, and create real social impact. Join India's most comprehensive student development and mentorship program.",
        stats: {
            main: {
                value: "",
                label: "",
                bgColor: "bg-gradient-to-r from-[#00D4FF]/20 to-transparent",
            },
            secondary: [
                {
                    value: "15+",
                    label: "Skill Assessments",
                    bgColor: "bg-[#00D4FF]/10",
                },
                {
                    value: "200+",
                    label: "Mock Interviews",
                    bgColor: "bg-[#00D4FF]/10",
                },
                {
                    value: "200+",
                    label: "Mock Interviews",
                    bgColor: "bg-[#00D4FF]/10",
                },
            ],
        },
        buttonText: "START READINESS TEST →",
        buttonColor: "bg-[#00D4FF] hover:bg-[#00D4FF]/90",
        imageSrc: "/home/intern2.png",
        imageAlt: "Placement readiness test and training",
        serviceCards: [
            {
                title: "Drive Social Change",
                description: "Lead with Purpose. Drive Social Change. Build the Future.",
                iconColor: "text-[#00D4FF]",
                accentColor: "from-[#00D4FF] to-[#00D4FF]/50",
                features: [
                    { icon: "document", label: "Lead community initiatives" },
                    { icon: "search", label: "Solve real-world challenges" },
                    { icon: "users", label: "Create sustainable impact" },
                ],
            },
            {
                title: "Learn Social Leadership",
                description: "Build Leadership Skills to Inspire Change and Shape the Future.",
                iconColor: "text-orange-500",
                accentColor: "",
                features: [
                    { icon: "briefcase", label: "Manage social projects" },
                    { icon: "lightning", label: "Collaborate with teams" },
                    { icon: "wrench", label: "Community leadership" },
                    { icon: "users", label: "Problem-solving ability" },
                    { icon: "database", label: "Video Practice" },
                    { icon: "check", label: "Feedback Reports" },
                ],
            },
            {
                title: "Future leadership readiness",
                description: "Develop Future Leadership Skills for Career Growth and Global Success.",
                iconColor: "text-[#00D4FF]",
                accentColor: "from-[#00D4FF] to-[#00D4FF]/50",
                features: [
                    { icon: "database", label: "problem-solving ability" },
                    { icon: "search", label: "Future-ready leader" },
                    { icon: "check", label: "Leadership + employability" },
                ],
            },
        ],
        footer: {
            title: "Career Counseling Hub",
            description: "Everything you need to manage 1:1 mentorship cycles and track student progress with automated scheduling and feedback loops.",
            features: [
                { icon: "users", label: "Session Insights" },
                { icon: "lightning", label: "Auto-Scheduling" },
                { icon: "check", label: "Milestone Tracking" },
                { icon: "document", label: "Consultation Notes" }
            ]
        },
        avatar: {
            src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
            alt: "Executive Mentor",
            borderColor: "border-yellow-400"
        },
    },
    "not-summer": {
        title: "AI-Powered Corporate English & Presentation Training ",
        highlightText: " ",
        description:
            "Master spoken English, business communication, executive body language, presentation skills, workplace communication, and become job-ready for corporate success.",
        stats: {
            main: {
                value: "",
                label: "",
                bgColor: "",
            },
            secondary: [
                {
                    value: "+91%",
                    label: "Improvement in spoken English fluency",
                    bgColor: "",
                },
                {
                    value: "+4.6/5",
                    label: "employer rating of 24/25",
                    bgColor: "",
                },
                {
                    value: "100%",
                    label: "Students deliver a live recorded presentation to industry panel",
                    bgColor: "",
                },
            ],
        },
        buttonText: "VIEW CAREER LAB REPORT →",
        buttonColor: "bg-[#8B5CF6] hover:bg-[#8B5CF6]/90",
        imageSrc: "/home/careerlunch.avif",
        imageAlt:
            "Students in flexible internship program working evenings and weekends",
        serviceCards: [
            {
                title: "AI-powered corporate English",
                description: "Improve Spoken English, Business Communication, Workplace Communication, Professional Vocabulary, Pronunciation.",
                iconColor: "text-[#8B5CF6]",
                accentColor: "from-[#8B5CF6] to-[#8B5CF6]/50",
                features: [
                    { icon: "document", label: "English Specking  (daily 15-min sessions)" },
                    { icon: "search", label: "Real-time fluency correction" },
                    { icon: "users", label: "Industry vocabulary immersion (domain-specific)" },
                ],
            },
            {
                title: "Executive body language training",
                description: "Build executive presence, professional confidence, non-verbal communication mastery, interview confidence, corporate personality development.",
                iconColor: "text-orange-500",
                accentColor: "from-orange-500 to-orange-300",
                features: [
                    { icon: "briefcase", label: "Personality development" },
                    { icon: "lightning", label: "Non-verbal communication" },
                    { icon: "wrench", label: "Group posture debate" },
                    { icon: "users", label: "Corporate presentations" },
                    { icon: "database", label: "Corporate client interactions" },
                    { icon: "check", label: "Interview confidence" },
                ],
            },
            {
                title: "Presentation Skill training",
                description: "Presentation design, audience engagement, business storytelling, and presentation delivery to become career-ready and succeed in interviews, meetings.",
                iconColor: "text-[#8B5CF6]",
                accentColor: "from-[#8B5CF6] to-[#8B5CF6]/50",
                features: [
                    { icon: "database", label: "Public speaking confidence" },
                    { icon: "search", label: "Digital presentation mastery" },
                    { icon: "check", label: "Audience engagemen" },
                ],
            },
        ],
        footer: {
            title: "Skill Development Suite",
            description: "Monitor skill acquisition in real-time. Our engine identifies gaps and suggests targeted training to keep students on their career path.",
            features: [
                { icon: "chart", label: "Skill Mapping" },
                { icon: "wrench", label: "Task Automation" },
                { icon: "lightning", label: "Growth Velocity" },
                { icon: "database", label: "Resource Logs" }
            ]
        },
        avatar: {
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            alt: "Career Coach",
            borderColor: "border-purple-500"
        },
    },
    "not-summer-month3": {
        title: "Paid internship in 7 countries",
        highlightText: "",
        description:
            "CareerPathx™ delivers work experience through structured micro-internships, live client projects, and the institution's own employer partnership network — including international internship pathways across 7 countries.",
        stats: {
            main: {
                value: "",
                label: "",
                bgColor: "",
            },
            secondary: [
                {
                    value: "+87%",
                    label: "Student offer PPO offer before Internship end",
                    bgColor: "",
                },
                {
                    value: "100%",
                    label: "Internship placement rate (domestic + international)",
                    bgColor: "",
                },
                {
                    value: "+2.4 avg. ",
                    label: "Internship experiences per student before 7 months",
                    bgColor: "",
                },
            ],
        },
        buttonText: "VIEW CAREER DEVELOPMENT →",
        buttonColor: "bg-[#8B5CF6] hover:bg-[#8B5CF6]/90",
        imageSrc: "/home/careerlunch.avif",
        imageAlt: "Career development and coaching program",
        serviceCards: [
            {
                title: "Global Industry Internship Placement Program™",
                description: "Join a global paid internship program, global work experience, work on live projects, earn stipends, and build career-ready skills.",
                iconColor: "text-[#8B5CF6]",
                accentColor: "from-[#8B5CF6] to-[#8B5CF6]/50",
                features: [
                    { icon: "document", label: "Faculty guieded paid-internship" },
                    { icon: "search", label: "Global companies across 7+ countries" },
                    { icon: "users", label: "Professional Global networking" },
                ],
            },
            {
                title: "External Freelancing Program",
                description: "Build a freelance career with global client networking, remote work opportunities, portfolio development, international projects, proposal writing.",
                iconColor: "text-orange-500",
                accentColor: "from-orange-500 to-orange-300",
                features: [
                    { icon: "briefcase", label: "Local MSME Mindset" },
                    { icon: "lightning", label: "Customer acquisition" },
                    { icon: "wrench", label: "AI Tools for Business" },
                    { icon: "users", label: "Market Research" },
                    { icon: "database", label: "Competitive Analysis" },
                    { icon: "check", label: "Professional Communication" },
                ],
            },
            {
                title: "Local MSME Program",
                description: "Accelerate your career by working directly with Local MSMEs, Startups, Emerging Businesses, and Fast-Growing Companies.",
                iconColor: "text-[#8B5CF6]",
                accentColor: "from-[#8B5CF6] to-[#8B5CF6]/50",
                features: [
                    { icon: "database", label: "real-world business experience" },
                    { icon: "search", label: "Problem-solving mindset" },
                    { icon: "check", label: "Project execution capability" },
                ],
            },
        ],
        footer: {
            title: "VRise Application Command",
            description: "Centralize the chaos of job hunting. Track every submission, follow-up, and interview within a single unified dashboard.",
            features: [
                { icon: "chart", label: "Funnel Analytics" },
                { icon: "lightning", label: "Workflow Automation" },
                { icon: "check", label: "Offer Tracking" },
                { icon: "document", label: "Interview Briefs" }
            ]
        },
        avatar: {
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
            alt: "Technical Lead",
            borderColor: "border-orange-500"
        },
    },
    "not-summer-month4": {
        title: "AI-Powered Placement-Ready Preparation programs",
        highlightText: "",
        description:
            "CareerPathx™ delivers your first job with AI-powered career coaching, day to day placement preparation, ATS-friendly resume building, LinkedIn optimization, AI-mock interviews, internship support, and long-term career growth planning.",
        stats: {
            main: {
                value: "",
                label: "",
                bgColor: "",
            },
            secondary: [
                {
                    value: "+87%",
                    label: "Student earn Internship to full time offer",
                    bgColor: "",
                },
                {
                    value: "+3 Offer",
                    label: "per students across 11 batchs 2024/25'",
                    bgColor: "",
                },
                {
                    value: "180 days",
                    label: "Placement guarantee window",
                    bgColor: "",
                },
            ],
        },
        buttonText: "VIEW JOB APPLICATIONS →",
        buttonColor: "bg-[#8B5CF6] hover:bg-[#8B5CF6]/90",
        imageSrc: "/home/careerlunch.avif",
        imageAlt: "VRise job application hub",
        serviceCards: [
            {
                title: "Employer Access & Talent Pipeline",
                description: "Create ATS-friendly resumes, improve interview chances, build confidence, and get job-ready with recruiter-approved resume training.",
                iconColor: "",
                accentColor: "",
                features: [
                    { icon: "database", label: "AI-Powerd Mock interview" },
                    { icon: "search", label: "ATS-friendly resume" },
                    { icon: "check", label: "Job Application tracking system" },
                ],
            },
            {
                title: "Pre-Placement Offer Pipeline ",
                description: "Secure early job offers through placement training, employer networking, interview preparation, and job-ready career development programs.",
                iconColor: "text-[#8B5CF6]",
                accentColor: "from-[#8B5CF6] to-[#8B5CF6]/50",
                features: [
                    { icon: "document", label: "Proprietary job-matching algorithm" },
                    { icon: "search", label: "Daily curated job alerts" },
                    { icon: "users", label: "Application tracking dashboard" },
                    { icon: "users", label: "Offer negotiation training" },
                    { icon: "database", label: "Day 1 employment prep" },
                    { icon: "check", label: "first 90-day performance framework" },
                ],
            },
            {
                title: "AI-Powered Job Search Engine",
                description: "Find jobs faster with AI-powered job search, resume optimization, smart job matching, remote jobs, and career growth tools.",
                iconColor: "text-orange-500",
                accentColor: "from-orange-500 to-orange-300",
                features: [
                    { icon: "briefcase", label: "12-Week placement framework" },
                    { icon: "lightning", label: "Applications tracke" },
                    { icon: "wrench", label: "Placement coach review" },
                ],
            },

        ],
        footer: {
            title: "Leadership & Social Impact",
            description: "Build leadership skills, communication confidence, teamwork, social impact experience, public speaking, problem solving, and career-ready leadership for future success..",
            features: [
                { icon: "chart", label: "On-campus employer summit" },
                { icon: "lightning", label: "Result Automation" },
                { icon: "check", label: "Readiness Score" },
                { icon: "document", label: "Review Notes" }
            ]
        },
        avatar: {
            src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
            alt: "HR Specialist",
            borderColor: "border-blue-500"
        },
    },
};


const StrategicExpansion: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useInViewPlay(sectionRef, "200px", 0.1);

    const [selectedCard, setSelectedCard] = useState<string>("shadow-cxos");
    const currentContent = React.useMemo(() => contentData[selectedCard], [selectedCard]);

    const handleCardClick = useCallback((cardId: string) => {
        setSelectedCard(cardId);
    }, []);

    const [showInterviewAI, setShowInterviewAI] = useState(false);

    return (
        <section ref={sectionRef} className="mx-[0%] pt-12 bg-white">
            {isVisible && (
                <>
                    <div className="flex-shrink-0 text-center mb-8 sm:mb-8">
                        <p className=" text-sm px-[40px] font-semibold text-[#B30437] tracking-wider mb-4 sm:mb-6">NEXT-GENERATION EMPLOYABILITY ASSURANCE ECOSYSTEM</p>
                        <h2 className="leading-none text-black px-[20px] text-2xl sm:text-3xl md:text-[35px] font-bold pb-[17px]">
                            1st Week to 1st Job:
                            <HighlightText className="font-bold">CareerPathx™</HighlightText>{" "} Career AI-Engine
                        </h2>
                        <div className="flex flex-col items-start sm:flex-row sm:flex-wrap sm:justify-center sm:items-center gap-3 sm:gap-6 mb-2 sm:mb-4 w-fit mx-auto sm:w-full">
                            <p className="text-sm sm:text-base text-gray-600 px-[20px] md:px-[50px] lg:px-[70px]">A complete AI-Powerd career-operating system that transforms enrolled students in <strong>accounting</strong>, <strong>digital marketing</strong>, and <strong>technology & business</strong> into <strong>100% employability assurance</strong> — through <strong>7 sequential stages</strong> in <strong>7 months</strong>.</p>
                        </div>
                    </div>
                    {/* Tabs at the top */}
                    <div aria-label="Career Labs categories" className="border-b border-gray-300">
                        <ul className="flex w-[93%] mx-auto overflow-x-auto scrollbar-hide">
                            {cardsData.map((card) => (
                                <li
                                    key={card.id}
                                    className="flex-1 cursor-pointer bg-white"
                                >
                                    <button
                                        onClick={() => handleCardClick(card.id)}
                                        className={`w-full px-3 sm:px-4 cursor-pointer py-4 text-left border-b-2 !bg-white hover:!bg-white active:!bg-white focus:!bg-white transition-all duration-200 ${selectedCard === card.id
                                            ? "border-black opacity-100 font-semibold"
                                            : "border-transparent opacity-40 hover:opacity-80"
                                            }`}
                                        aria-label={`${card.title} program`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <img src="/dot-icon.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                                className="w-5 opacity-[0.5] h-5"
                                                aria-hidden="true"
                                            />

                                            <div>
                                                <span className="block text-[12px] font-semibold text-black uppercase tracking-wide">
                                                    {card.description}
                                                </span>

                                                <span className="block text-[16px] font-semibold text-black whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px] lg:max-w-[220px]">
                                                    {card.title}
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="max-w-[85rem] mx-auto">

                        <div className="bg-[#F6F4F2] px-4 sm:px-6 pt-4 sm:pt-6 pb-10 sm:pb-14 relative">


                            {/* Content Section */}
                            <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
                                {/* Left Side - Text and Stats */}
                                <div className="flex-1 space-y-3 pt-2">
                                    <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl font-light text-black leading-tight">
                                        {currentContent.title}{" "}
                                        <em className="italic font-serif text-[#B30437]">
                                            {currentContent.highlightText}
                                        </em>
                                    </h2>

                                    <p className="text-sm sm:text-base pb-2 text-[#5f6368] leading-relaxed">
                                        {currentContent.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="space-y-6">
                                        <div className="flex gap-6">
                                            {currentContent.stats.secondary.map((stat, i) => (
                                                <div key={i} className="bg-[#E3DFD2] p-[10px] relative pl-4">
                                                    <div className="relative z-10">
                                                        <div className="text-xl font-semibold text-black">{stat.value}</div>
                                                        <p className="text-black text-xs font-medium">
                                                            {stat.label}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                </div>

                                {/* Right Side - Profile Image */}
                                <div className="flex-1 flex justify-center">
                                    <div className=" relative w-auto h-auto lg:w-140 lg:h-84">
                                        <div className="w-full h-full relative">
                                            <Image
                                                key={selectedCard}
                                                src={currentContent.imageSrc}
                                                alt={currentContent.imageAlt}
                                                width={550}
                                                height={350}
                                                loading="lazy"
                                                priority={false}
                                                className="object-cover ml-[25px]"
                                                sizes="(max-width: 768px) 100vw, 320px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Three Service Cards - Dynamic based on selected tab */}
                            <div className="relative">
                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 mb-2 border border-gray-300"
                                >
                                    {currentContent.serviceCards.map((card, index) => (
                                        <div key={index} className="border-b md:border-b-0 md:border-r border-gray-300 p-6 relative overflow-hidden w-full md:min-w-0 last:border-b-0 last:border-r-0">
                                            <h3 className="text-lg font-semibold text-black mb-2">{card.title}</h3>
                                            <p className=" text-[12px] text-gray-600 mb-6 ">
                                                {card.description}
                                            </p>

                                            {/* Middle card (index 1) gets grid layout, others get list layout */}
                                            {index === 1 ? (
                                                <div className="grid grid-cols-2 -mx-6 border-t border-[#D5D0CA]">
                                                    {[0, 1, 2].map((rowIndex) => (
                                                        <React.Fragment key={rowIndex}>
                                                            {/* Left item */}
                                                            <div className="border-b border-r border-[#D5D0CA] p-3 sm:p-4 flex items-center">
                                                                <span className="text-xs text-[#5f6368]">{card.features[rowIndex]?.label}</span>
                                                            </div>
                                                            {/* Right item */}
                                                            <div className="border-b border-[#D5D0CA] p-3 sm:p-4 flex items-center">
                                                                <span className="text-xs text-[#5f6368]">{card.features[rowIndex + 3]?.label}</span>
                                                            </div>
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="-mx-6 border-t border-[#D5D0CA]">
                                                    {card.features.map((feature, featureIndex) => (
                                                        <div
                                                            key={featureIndex}
                                                            className="border-b border-[#D5D0CA] p-3 sm:p-4 flex items-center"
                                                        >
                                                            <span className="text-xs text-[#5f6368]">{feature.label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                            </div>

                            {/* Dotted Lines Connecting Cards to Bottom Section */}
                            <div className="relative h-8 hidden md:flex justify-around">
                                {/* Left dotted lines group (3 lines) */}
                                <div className="absolute left-[16.67%] top-0 h-full flex gap-1">
                                    <div className="h-full border-l-2 border-dashed border-[#B30437]/40"></div>
                                    <div className="h-full border-l-2 border-dashed border-[#B30437]/40"></div>
                                    <div className="h-full border-l-2 border-dashed border-[#B30437]/40"></div>
                                </div>
                                {/* Center dotted lines group (3 lines) */}
                                <div className="absolute left-1/2 top-0 h-full flex gap-1 transform -translate-x-1/2">
                                    <div className="h-full border-l-2 border-dashed border-orange-400/40"></div>
                                    <div className="h-full border-l-2 border-dashed border-orange-400/40"></div>
                                    <div className="h-full border-l-2 border-dashed border-orange-400/40"></div>
                                </div>
                                {/* Right dotted lines group (3 lines) */}
                                <div className="absolute right-[16.67%] top-0 h-full flex gap-1">
                                    <div className="h-full border-l-2 border-dashed border-[#B30437]/40"></div>
                                    <div className="h-full border-l-2 border-dashed border-[#B30437]/40"></div>
                                    <div className="h-full border-l-2 border-dashed border-[#B30437]/40"></div>
                                </div>
                            </div>

                            {/* Emerge Career Unity Section - Dynamic */}
                            <div className="border border-[#D5D0CA] p-4 my-2.5 text-center">
                                <h3 className="text-2xl font-semibold text-black mb-3">
                                    {currentContent.footer.title}
                                </h3>
                                <p className="text-gray-600 max-w-2xl mx-auto mb-2">
                                    {currentContent.footer.description}
                                </p>
                            </div>

                            {/* Feature Buttons - Dynamic */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
                                {currentContent.footer.features.map((feature, idx) => (
                                    <button
                                        key={idx}
                                        className="flex items-center justify-center px-2 md:px-4 py-3 border border-[#D5D0CA] transition-colors hover:bg-gray-50"
                                    >
                                        <span className="text-xs md:text-sm font-medium whitespace-nowrap">
                                            {feature.label}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {/* Curved Dotted Lines with Avatars Section */}
                            <div className="relative min-h-[60px] hidden md:flex justify-center items-end mt-4">
                                {/* SVG for curved dotted lines */}
                                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 80" preserveAspectRatio="none">

                                    {/* Left outer curve - Red (Smooth S-curve) */}
                                    <path
                                        d="M 125 0 L 125 5 Q 125 15, 160 15 L 390 15 Q 410 15, 410 30 L 410 35 Q 410 45, 425 48 L 439 51"
                                        fill="none"
                                        stroke="#B30437"
                                        strokeWidth="2"
                                        strokeDasharray="6 4"
                                        opacity="0.6"
                                    />

                                    {/* Left inner curve - Red (Adjusted for smooth curve) */}
                                    <path
                                        d="M 375 0 L 375 5 Q 375 15, 400 15 L 430 15 Q 445 15, 445 30 L 445 35 Q 445 42, 455 42 L 465 42"
                                        fill="none"
                                        stroke="#B30437"
                                        strokeWidth="2"
                                        strokeDasharray="6 4"
                                        opacity="0.6"
                                    />

                                    {/* Right inner curve - Orange (Adjusted for smooth curve) */}
                                    <path
                                        d="M 625 0 L 625 5 Q 625 15, 600 15 L 570 15 Q 555 15, 555 30 L 555 35 Q 555 42, 545 42 L 535 42"
                                        fill="none"
                                        stroke="#F97316"
                                        strokeWidth="2"
                                        strokeDasharray="6 4"
                                        opacity="0.6"
                                    />

                                    {/* Right outer curve - Orange (Smooth S-curve) */}
                                    <path
                                        d="M 875 0 L 875 5 Q 875 15, 840 15 L 610 15 Q 590 15, 590 30 L 590 35 Q 590 45, 575 48 L 561 51"
                                        fill="none"
                                        stroke="#F97316"
                                        strokeWidth="2"
                                        strokeDasharray="6 4"
                                        opacity="0.6"
                                    />

                                    {/* Arrow heads - Adjusted positions to match new curve ends */}
                                    <polygon points="447,52 439,47 439,56" fill="#B30437" opacity="0.6" />
                                    <polygon points="470,42 462,38 462,46" fill="#B30437" opacity="0.6" />
                                    <polygon points="530,42 538,38 538,46" fill="#F97316" opacity="0.6" />
                                    <polygon points="553,52 561,47 561,56" fill="#F97316" opacity="0.6" />
                                </svg>

                                {/* Avatar Group */}
                                <div className="relative z-10 mt-8 flex items-center justify-center -space-x-3">
                                    <div
                                        className={`w-19 h-19 rounded-full border-4 ${currentContent.avatar.borderColor} overflow-hidden shadow-lg z-20 cursor-pointer transition-transform hover:scale-110`}
                                        onClick={() => setShowInterviewAI(true)}
                                    >
                                        {currentContent.avatar.src ? (
                                            <Image
                                                src={currentContent.avatar.src}
                                                alt={currentContent.avatar.alt}
                                                width={50}
                                                height={50}
                                                loading="lazy"
                                                priority={false}
                                                className="w-full h-full object-cover"
                                                sizes="(max-width: 768px) 100vw, 320px"
                                            />
                                        ) : null}
                                    </div>
                                </div>
                            </div>

                            <GlobalLoginModal 
                                isOpen={showInterviewAI} 
                                onClose={() => setShowInterviewAI(false)} 
                            />
                        </div>
                    </div>
                </>
            )}
        </section >
    );
};

export default memo(StrategicExpansion);
