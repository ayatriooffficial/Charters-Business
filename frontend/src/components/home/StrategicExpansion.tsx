"use client";
import React, { useState, memo, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import useInViewPlay from "@/components/micro/useInViewPlay";

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
}

const cardsData: CardData[] = [
    {
        id: "shadow-cxos",
        title: "Build Your Brand",
        description: "Month 1",
        color: "bg-pink-500",
        bgColor: "hover:bg-pink-50",
    },
    {
        id: "not-summer",
        title: "1&1 Career Counselling",
        description: "Month 2",
        color: "bg-purple-500",
        bgColor: "hover:bg-purple-50",
    },
    {
        id: "not-summer-month3",
        title: "1&1 Career Counselling",
        description: "Month 3",
        color: "bg-purple-500",
        bgColor: "hover:bg-purple-50",
    },
    {
        id: "not-summer-month4",
        title: "VRise: Your Job Application Hub",
        description: "Month 4",
        color: "bg-purple-500",
        bgColor: "hover:bg-purple-50",
    },
    {
        id: "real-assignments",
        title: "Placement Readiness Test",
        description: "Month 5",
        color: "bg-cyan-400",
        bgColor: "hover:bg-cyan-50",
    },
];

const contentData: Record<string, ContentData> = {
    "shadow-cxos": {
        title: "Leadership",
        highlightText: "Mentorship",
        description:
            "Work directly alongside C-level executives and senior management teams. Students get unprecedented access to boardroom discussions, strategic planning sessions, and high-level decision making processes across multiple industries.",
        stats: {
            main: {
                value: "250,000+ USD",
                label: "Average Executive Exposure Value",
                bgColor: "bg-gradient-to-r from-[#FF5A9D]/20 to-transparent",
            },
            secondary: [
                {
                    value: "50+",
                    label: "C-Level Mentors",
                    bgColor: "bg-[#000000]/10",
                },
                {
                    value: "12+",
                    label: "Industry Sectors",
                    bgColor: "bg-[#000000]/10",
                },
            ],
        },
        buttonText: "Charter Carrer AI Engine",
        buttonColor: "bg-none text-[#B30437]",
        imageSrc: "/home/intern.jpg",
        imageAlt: "Students in leadership mentorship program with executives",
        serviceCards: [
            {
                title: "Executive Shadowing",
                description: "Shadow C-level executives and learn leadership strategies firsthand.",
                iconColor: "text-[#B30437]",
                accentColor: "from-[#B30437] to-[#B30437]/50",
                features: [
                    { icon: "document", label: "Leadership Workshops" },
                    { icon: "search", label: "Strategic Planning" },
                    { icon: "users", label: "Boardroom Access" },
                ],
            },
            {
                title: "Mentorship Network",
                description: "Connect with industry leaders and build lasting professional relationships.",
                iconColor: "text-orange-500",
                accentColor: "from-orange-500 to-orange-300",
                features: [
                    { icon: "briefcase", label: "1:1 Mentoring" },
                    { icon: "lightning", label: "Career Guidance" },
                    { icon: "wrench", label: "Industry Insights" },
                    { icon: "users", label: "Networking Events" },
                    { icon: "database", label: "Resource Library" },
                    { icon: "check", label: "Success Tracking" },
                ],
            },
            {
                title: "Leadership Training",
                description: "Develop essential leadership skills through hands-on training programs.",
                iconColor: "text-[#B30437]",
                accentColor: "from-[#B30437] to-[#B30437]/50",
                features: [
                    { icon: "database", label: "Leadership Library" },
                    { icon: "search", label: "Skill Assessments" },
                    { icon: "check", label: "Certification" },
                ],
            },
        ],
    },
    "real-assignments": {
        title: "Placement",
        highlightText: "Readiness",
        description:
            "Prepare comprehensively for placements with our readiness test program. Assess your skills, get personalized feedback, and access targeted training to excel in interviews and assessments.",
        stats: {
            main: {
                value: "88%",
                label: "Placement Success Rate",
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
            ],
        },
        buttonText: "START READINESS TEST →",
        buttonColor: "bg-[#00D4FF] hover:bg-[#00D4FF]/90",
        imageSrc: "/home/intern2.png",
        imageAlt: "Placement readiness test and training",
        serviceCards: [
            {
                title: "Skill Assessment",
                description: "Comprehensive evaluations to identify strengths and areas for improvement.",
                iconColor: "text-[#00D4FF]",
                accentColor: "from-[#00D4FF] to-[#00D4FF]/50",
                features: [
                    { icon: "document", label: "Aptitude Tests" },
                    { icon: "search", label: "Technical Assessments" },
                    { icon: "users", label: "Soft Skills Evaluation" },
                ],
            },
            {
                title: "Mock Interviews",
                description: "Practice interviews with industry professionals and get detailed feedback.",
                iconColor: "text-orange-500",
                accentColor: "from-orange-500 to-orange-300",
                features: [
                    { icon: "briefcase", label: "HR Rounds" },
                    { icon: "lightning", label: "Technical Rounds" },
                    { icon: "wrench", label: "Group Discussions" },
                    { icon: "users", label: "Panel Interviews" },
                    { icon: "database", label: "Video Practice" },
                    { icon: "check", label: "Feedback Reports" },
                ],
            },
            {
                title: "Interview Prep",
                description: "Targeted training to help you ace your placement interviews.",
                iconColor: "text-[#00D4FF]",
                accentColor: "from-[#00D4FF] to-[#00D4FF]/50",
                features: [
                    { icon: "database", label: "Company Research" },
                    { icon: "search", label: "Resume Review" },
                    { icon: "check", label: "Confidence Building" },
                ],
            },
        ],
    },
    "not-summer": {
        title: "Flexible",
        highlightText: "Internships",
        description:
            "Unlike traditional summer-only programs, our internships run year-round with flexible scheduling. Students can gain practical experience while maintaining their academic commitments through evening and weekend opportunities.",
        stats: {
            main: {
                value: "131,760+ USD",
                label: "Cumulative Stipend (in the first year)",
                bgColor: "bg-gradient-to-r from-[#8B5CF6]/20 to-transparent",
            },
            secondary: [
                {
                    value: "110+",
                    label: "Internships (in the first year)",
                    bgColor: "bg-[#8B5CF6]/10",
                },
                {
                    value: "15+",
                    label: "Countries",
                    bgColor: "bg-[#8B5CF6]/10",
                },
            ],
        },
        buttonText: "VIEW CAREER LAB REPORT →",
        buttonColor: "bg-[#8B5CF6] hover:bg-[#8B5CF6]/90",
        imageSrc: "/home/intern3.png",
        imageAlt:
            "Students in flexible internship program working evenings and weekends",
        serviceCards: [
            {
                title: "Recruitment",
                description: "We build partnerships to recruit and give you visibility over the recruitment pipeline.",
                iconColor: "text-[#8B5CF6]",
                accentColor: "from-[#8B5CF6] to-[#8B5CF6]/50",
                features: [
                    { icon: "document", label: "Document Management" },
                    { icon: "search", label: "Readiness Assessment" },
                    { icon: "users", label: "Vocational Eligibility" },
                ],
            },
            {
                title: "Training",
                description: "Hybrid job training programs with online and in-person components.",
                iconColor: "text-orange-500",
                accentColor: "from-orange-500 to-orange-300",
                features: [
                    { icon: "briefcase", label: "Job Readiness" },
                    { icon: "lightning", label: "Clean Energy" },
                    { icon: "wrench", label: "Technical Skills" },
                    { icon: "users", label: "Team Building" },
                    { icon: "database", label: "Online Modules" },
                    { icon: "check", label: "Certification" },
                ],
            },
            {
                title: "Job Placement",
                description: "Partnerships with nationwide trades associations that hire our graduates.",
                iconColor: "text-[#8B5CF6]",
                accentColor: "from-[#8B5CF6] to-[#8B5CF6]/50",
                features: [
                    { icon: "database", label: "1000+ Employer Database" },
                    { icon: "search", label: "Job Matching" },
                    { icon: "check", label: "Interview Preparation" },
                ],
            },
        ],
    },
    "not-summer-month3": {
        title: "Career",
        highlightText: "Development",
        description:
            "Structured career development programs tailored to your goals. Work with career coaches to identify your strengths, overcome challenges, and create actionable plans for your professional growth.",
        stats: {
            main: {
                value: "95%",
                label: "Career Goals Achievement Rate",
                bgColor: "bg-gradient-to-r from-[#8B5CF6]/20 to-transparent",
            },
            secondary: [
                {
                    value: "1:1",
                    label: "Career Coaching Sessions",
                    bgColor: "bg-[#8B5CF6]/10",
                },
                {
                    value: "100+",
                    label: "Career Paths Supported",
                    bgColor: "bg-[#8B5CF6]/10",
                },
            ],
        },
        buttonText: "VIEW CAREER DEVELOPMENT →",
        buttonColor: "bg-[#8B5CF6] hover:bg-[#8B5CF6]/90",
        imageSrc: "/home/intern3.png",
        imageAlt: "Career development and coaching program",
        serviceCards: [
            {
                title: "Career Coaching",
                description: "Personalized 1:1 sessions with experienced career coaches.",
                iconColor: "text-[#8B5CF6]",
                accentColor: "from-[#8B5CF6] to-[#8B5CF6]/50",
                features: [
                    { icon: "document", label: "Goal Setting" },
                    { icon: "search", label: "Strength Analysis" },
                    { icon: "users", label: "Progress Tracking" },
                ],
            },
            {
                title: "Skill Building",
                description: "Develop essential skills for your chosen career path.",
                iconColor: "text-orange-500",
                accentColor: "from-orange-500 to-orange-300",
                features: [
                    { icon: "briefcase", label: "Professional Skills" },
                    { icon: "lightning", label: "Communication" },
                    { icon: "wrench", label: "Problem Solving" },
                    { icon: "users", label: "Leadership" },
                    { icon: "database", label: "Time Management" },
                    { icon: "check", label: "Critical Thinking" },
                ],
            },
            {
                title: "Career Planning",
                description: "Create actionable roadmaps for your professional journey.",
                iconColor: "text-[#8B5CF6]",
                accentColor: "from-[#8B5CF6] to-[#8B5CF6]/50",
                features: [
                    { icon: "database", label: "Career Mapping" },
                    { icon: "search", label: "Industry Research" },
                    { icon: "check", label: "Milestone Setting" },
                ],
            },
        ],
    },
    "not-summer-month4": {
        title: "Job",
        highlightText: "Applications",
        description:
            "VRise is your comprehensive job application hub. Track applications, get real-time updates, manage interviews, and access resources to perfect your application strategy across multiple employers.",
        stats: {
            main: {
                value: "75,000+",
                label: "Jobs Listed",
                bgColor: "bg-gradient-to-r from-[#8B5CF6]/20 to-transparent",
            },
            secondary: [
                {
                    value: "500+",
                    label: "Partner Companies",
                    bgColor: "bg-[#8B5CF6]/10",
                },
                {
                    value: "30+",
                    label: "Job Categories",
                    bgColor: "bg-[#8B5CF6]/10",
                },
            ],
        },
        buttonText: "VIEW JOB APPLICATIONS →",
        buttonColor: "bg-[#8B5CF6] hover:bg-[#8B5CF6]/90",
        imageSrc: "/home/intern3.png",
        imageAlt: "VRise job application hub",
        serviceCards: [
            {
                title: "Application Tracker",
                description: "Track all your job applications in one centralized dashboard.",
                iconColor: "text-[#8B5CF6]",
                accentColor: "from-[#8B5CF6] to-[#8B5CF6]/50",
                features: [
                    { icon: "document", label: "Status Updates" },
                    { icon: "search", label: "Application History" },
                    { icon: "users", label: "Interview Scheduling" },
                ],
            },
            {
                title: "Job Matching",
                description: "AI-powered recommendations based on your skills and preferences.",
                iconColor: "text-orange-500",
                accentColor: "from-orange-500 to-orange-300",
                features: [
                    { icon: "briefcase", label: "Skill Matching" },
                    { icon: "lightning", label: "Smart Filters" },
                    { icon: "wrench", label: "Salary Insights" },
                    { icon: "users", label: "Culture Fit" },
                    { icon: "database", label: "Job Alerts" },
                    { icon: "check", label: "Match Score" },
                ],
            },
            {
                title: "Application Resources",
                description: "Templates, guides, and tools to perfect your applications.",
                iconColor: "text-[#8B5CF6]",
                accentColor: "from-[#8B5CF6] to-[#8B5CF6]/50",
                features: [
                    { icon: "database", label: "Resume Templates" },
                    { icon: "search", label: "Cover Letters" },
                    { icon: "check", label: "Application Tips" },
                ],
            },
        ],
    },
};

// Helper function to get icon by name
const getIcon = (iconName: string) => {
    switch (iconName) {
        case "document":
            return <DocumentIcon />;
        case "search":
            return <SearchIcon />;
        case "users":
            return <UserGroupIcon />;
        case "briefcase":
            return <BriefcaseIcon />;
        case "lightning":
            return <LightningIcon />;
        case "wrench":
            return <WrenchIcon />;
        case "database":
            return <DatabaseIcon />;
        case "check":
            return <CheckCircleIcon />;
        default:
            return <DocumentIcon />;
    }
};

// Icons for the feature items
const DocumentIcon = () => (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const SearchIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const UserGroupIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LightningIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const WrenchIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const DatabaseIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ChartIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

// Stats icon
const StatsIcon = () => (
    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        <circle cx="8" cy="7" r="1.5" fill="currentColor" />
        <text x="12" y="9" fontSize="4" fill="currentColor" textAnchor="middle">?</text>
    </svg>
);

const StrategicExpansion: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useInViewPlay(sectionRef, "200px", 0.1);

    const [selectedCard, setSelectedCard] = useState<string>("shadow-cxos");
    const currentContent = React.useMemo(() => contentData[selectedCard], [selectedCard]);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handleCardClick = useCallback((cardId: string) => {
        setSelectedCard(cardId);
    }, []);

    // Track scroll position for navigation buttons
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleScroll = () => {
            setCanScrollLeft(slider.scrollLeft > 10);
            setCanScrollRight(slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 10);
        };

        handleScroll(); // Initial check
        slider.addEventListener('scroll', handleScroll);
        return () => slider.removeEventListener('scroll', handleScroll);
    }, [selectedCard]);

    const scrollSlider = useCallback((direction: number) => {
        const slider = sliderRef.current;
        if (!slider) return;
        const cardWidth = slider.clientWidth * 0.82; // 82vw card width
        slider.scrollTo({
            left: slider.scrollLeft + (direction * cardWidth),
            behavior: 'smooth'
        });
    }, []);

    return (
        <section ref={sectionRef} className="mx-[0%] pt-12 bg-white">
            {isVisible && (
                <>
                    <div className="flex-shrink-0 text-center mb-13 sm:mb-13">
                        <h2 className="leading-normal text-[35px] font-semibold text-black">
                            Career Labs at <span className="text-[#B30437]">Charters</span>
                        </h2>
                        <div className="flex justify-center">
                            <p className="text-black text-sm sm:text-base md:text-lg max-w-4xl">
                                Learn from industry leaders, academic experts, and seasoned
                                practitioners who bring real-world experience to your education.
                            </p>
                        </div>
                    </div>
                    {/* Tabs at the top */}
                    <div aria-label="Career Labs categories" className="border-b border-gray-300">
                        <ul className="flex w-[93%] mx-auto overflow-x-auto scrollbar-hide">
                            {cardsData.map((card) => (
                                <li key={card.id} className="flex-1">
                                    <button
                                        onClick={() => handleCardClick(card.id)}
                                        className={`w-full px-3 text-nowrap sm:px-4 py-2 transition-all focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-[#B30437] text-sm ${selectedCard === card.id
                                            ? "text-black border-b-2 border-black"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                        aria-label={`${card.title} program`}
                                        aria-pressed={selectedCard === card.id}
                                    >
                                        <span className="block text-xs text-gray-500">{card.description}</span>
                                        <span className="block font-semibold">{card.title}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="max-w-[85rem] mx-auto">

                {/* Strategic Expansion Header Section with Tabs */}
                <div className="bg-[#F6F4F2] p-4 sm:p-6 md:p-8 ">


                    {/* Content Section */}
                    <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
                        {/* Left Side - Text and Stats */}
                        <div className="flex-1 space-y-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black leading-tight">
                                {currentContent.title}{" "}
                                <em className="italic font-serif text-[#B30437]">
                                    {currentContent.highlightText}
                                </em>
                            </h2>

                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                {currentContent.description}
                            </p>

                            {/* Stats */}
                            <div className="space-y-6">
                                <div className="relative pl-4">
                                    <div
                                        className={`absolute left-0 -top-2 w-16 h-12 ${currentContent.stats.main.bgColor} rounded-lg`}
                                    />
                                    <div className="relative z-10">
                                        <div className="text-2xl lg:text-3xl font-light text-black">
                                            {currentContent.stats.main.value}
                                        </div>
                                        <p className="text-[#B30437] text-xs font-medium">
                                            {currentContent.stats.main.label}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    {currentContent.stats.secondary.map((stat, i) => (
                                        <div key={i} className="relative pl-4">
                                            <div
                                                className={`absolute left-0 top-0 w-8 h-8 ${stat.bgColor} rounded-lg`}
                                            />
                                            <div className="relative z-10">
                                                <div className="text-xl font-light text-black">{stat.value}</div>
                                                <p className="text-[#B30437] text-xs font-medium">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button
                                className={`${currentContent.buttonColor} text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all`}
                            >
                                {currentContent.buttonText}
                            </button>
                        </div>

                        {/* Right Side - Profile Image */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-72 h-80 lg:w-80 lg:h-96">
                                <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg overflow-hidden relative">
                                    <Image
                                        key={selectedCard}
                                        src={currentContent.imageSrc}
                                        alt={currentContent.imageAlt}
                                        fill
                                        loading="lazy"
                                        priority={false}
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 320px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Three Service Cards - Dynamic based on selected tab */}
                    <div className="relative">
                        <div
                            ref={sliderRef}
                            className="md:grid md:grid-cols-3 gap-6 mb-2 flex overflow-x-auto scrollbar-hide snap-x snap-mandatory md:overflow-visible"
                        >
                            {currentContent.serviceCards.map((card, index) => (
                                <div key={index} className="border border-[#D5D0CA] p-6 relative overflow-hidden min-w-[82vw] md:min-w-0 snap-center">
                                    <h3 className="text-lg font-semibold text-black mb-2">{card.title}</h3>
                                    <p className="text-sm text-gray-600 mb-6">
                                        {card.description}
                                    </p>

                                    {/* Middle card (index 1) gets grid layout, others get list layout */}
                                    {index === 1 ? (
                                        <div className="grid grid-cols-2 -mx-6 border-t border-[#D5D0CA]">
                                            {[0, 1, 2].map((rowIndex) => (
                                                <React.Fragment key={rowIndex}>
                                                    {/* Left item */}
                                                    <div className="border-b border-r border-[#D5D0CA] p-3 sm:p-4 flex items-center gap-2">
                                                        <div className="shrink-0">
                                                            {getIcon(card.features[rowIndex]?.icon || "document")}
                                                        </div>
                                                        <span className="text-xs text-gray-700">{card.features[rowIndex]?.label}</span>
                                                    </div>
                                                    {/* Right item */}
                                                    <div className="border-b border-[#D5D0CA] p-3 sm:p-4 flex items-center gap-2">
                                                        <div className="shrink-0">
                                                            {getIcon(card.features[rowIndex + 3]?.icon || "document")}
                                                        </div>
                                                        <span className="text-xs text-gray-700">{card.features[rowIndex + 3]?.label}</span>
                                                    </div>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="-mx-6 border-t border-[#D5D0CA]">
                                            {card.features.map((feature, featureIndex) => (
                                                <div
                                                    key={featureIndex}
                                                    className="border-b border-[#D5D0CA] p-3 sm:p-4 flex items-center gap-2"
                                                >
                                                    <div className="shrink-0 px-2">
                                                        {getIcon(feature.icon)}
                                                    </div>
                                                    <span className="text-xs text-gray-700">{feature.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="-mx-6  py-0.5 px-4">
                                        <span className="text-xs text-gray-500">And more</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Navigation Buttons */}
                        <div className="md:hidden absolute top-1/2 -translate-y-1/2 right-2 pointer-events-none z-10">
                            {canScrollRight && (
                                <button
                                    onClick={() => scrollSlider(1)}
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
                        <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-2 pointer-events-none z-10">
                            {canScrollLeft && (
                                <button
                                    onClick={() => scrollSlider(-1)}
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

                    {/* Emerge Career Unity Section */}
                    <div className="border border-[#D5D0CA] p-4 my-2.5 text-center ">
                        <h3 className="text-2xl font-semibold text-black mb-3">Emerge Career Unity</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
                            Emerge Career has everything you need to run a successful workforce development program, and reduce the workload on your staff.
                        </p>
                    </div>
                    {/* Feature Buttons */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
                        <button className="flex items-center justify-center gap-2 px-2 md:px-4 py-3 border border-[#D5D0CA] transition-colors hover:bg-gray-50">
                            <ChartIcon />
                            <span className="text-xs md:text-sm font-medium">Analytics</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 px-2 md:px-4 py-3 border border-[#D5D0CA] transition-colors hover:bg-gray-50">
                            <ChartIcon />
                            <span className="text-xs md:text-sm font-medium whitespace-nowrap">Workflow Automation</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 px-2 md:px-4 py-3 border border-[#D5D0CA] transition-colors hover:bg-gray-50">
                            <ChartIcon />
                            <span className="text-xs md:text-sm font-medium">Success Plan</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 px-2 md:px-4 py-3 border border-[#D5D0CA] transition-colors hover:bg-gray-50">
                            <ChartIcon />
                            <span className="text-xs md:text-sm font-medium">Case Notes</span>
                        </button>
                    </div>

                    {/* Curved Dotted Lines with Avatars Section */}
                    <div className="relative h-16 hidden md:flex justify-center items-end mt-4">
                        {/* SVG for curved dotted lines */}
                        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 50" preserveAspectRatio="none">
                            {/* Left outer curve - from button 1 to left side of avatars */}
                            <path
                                d="M 125 0 L 125 5 Q 125 15, 160 15 L 390 15 Q 410 15, 410 30 L 410 35 Q 410 42, 425 42 L 435 42"
                                fill="none"
                                stroke="#B30437"
                                strokeWidth="2"
                                strokeDasharray="6 4"
                                opacity="0.6"
                            />
                            {/* Left inner curve - from button 2 to left side of avatars */}
                            <path
                                d="M 375 0 L 375 5 Q 375 15, 400 15 L 430 15 Q 445 15, 445 30 L 445 35 Q 445 42, 455 42 L 465 42"
                                fill="none"
                                stroke="#B30437"
                                strokeWidth="2"
                                strokeDasharray="6 4"
                                opacity="0.6"
                            />
                            {/* Right inner curve - from button 3 to right side of avatars */}
                            <path
                                d="M 625 0 L 625 5 Q 625 15, 600 15 L 570 15 Q 555 15, 555 30 L 555 35 Q 555 42, 545 42 L 535 42"
                                fill="none"
                                stroke="#F97316"
                                strokeWidth="2"
                                strokeDasharray="6 4"
                                opacity="0.6"
                            />
                            {/* Right outer curve - from button 4 to right side of avatars */}
                            <path
                                d="M 875 0 L 875 5 Q 875 15, 840 15 L 610 15 Q 590 15, 590 30 L 590 35 Q 590 42, 575 42 L 565 42"
                                fill="none"
                                stroke="#F97316"
                                strokeWidth="2"
                                strokeDasharray="6 4"
                                opacity="0.6"
                            />
                            {/* Arrow heads pointing INWARD (toward circles) */}
                            <polygon points="440,42 432,38 432,46" fill="#B30437" opacity="0.6" />
                            <polygon points="470,42 462,38 462,46" fill="#B30437" opacity="0.6" />
                            <polygon points="530,42 538,38 538,46" fill="#F97316" opacity="0.6" />
                            <polygon points="560,42 568,38 568,46" fill="#F97316" opacity="0.6" />
                        </svg>

                        {/* Avatar Group */}
                        <div className="relative z-10 top-5 flex items-center justify-center -space-x-3">
                            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Team member" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden shadow-md z-10">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Team member" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-16 h-16 rounded-full border-4 border-yellow-400 overflow-hidden shadow-lg z-20">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Team member" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden shadow-md z-10">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Team member" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Team member" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                    </div>
                </>
            )}
        </section>
    );
};

export default memo(StrategicExpansion);
