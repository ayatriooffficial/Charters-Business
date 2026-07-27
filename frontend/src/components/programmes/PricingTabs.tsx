"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ProgrammeAssetConfig } from "@/data/programmes";
import Modal from "@/components/shared/Modal";
import ScholarshipsSection from "./ScholarshipsSection";

const ChartersInterviewAi = dynamic(
    () => import("@/components/home/Chartersinterview_ai"),
    { ssr: false }
);

// Custom SVG Icons
const BookOpenIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3`1h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
);

const BriefcaseIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

const MonitorIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
);

const BarChartIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
);

const TestTubeIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2" />
        <path d="M8.5 2h7" />
        <path d="M14.5 16h-5" />
    </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const BuildingIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
    </svg>
);

const MessageQuestionIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);

const FolderIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
        <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
);

const LaptopIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
);

const RocketIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

interface JobTrack {
    name: string;
    icon: React.ReactNode;
    badge?: string;
    badgeDate?: string;
}

interface PricingTabsProps {
    nextBatchDate?: string;
    data?: Record<string, unknown>;
    assets?: ProgrammeAssetConfig;
    scholarships?: any[];
    scholarshipConfig?: any;
}

const PricingTabs: React.FC<PricingTabsProps> = ({
    nextBatchDate = "3",
    assets,
    scholarships = [],
    scholarshipConfig
}) => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showEmiModal, setShowEmiModal] = useState(false);

    const pricing = assets?.pricing;
    const getIcon = (index: number) => {
        if (index === 2) return <BarChartIcon className="w-5 h-5" />;
        if (index === 3) return <TestTubeIcon className="w-5 h-5" />;
        return <MonitorIcon className="w-5 h-5" />;
    };

    const jobTracks: JobTrack[] = (pricing?.jobTracks || []).map((track: any, index: number) => ({
        name: track.name,
        icon: getIcon(index),
        badge: track.badge,
        badgeDate: track.badgeDate,
    }));

    const placementSupport: string[] = pricing?.placementSupport?.items || [];

    const getBenefitIcon = (index: number) => {
        if (index === 0) return <MessageQuestionIcon className="w-5 h-5" />;
        if (index === 1) return <FolderIcon className="w-5 h-5" />;
        if (index === 2) return <LaptopIcon className="w-5 h-5" />;
        return <RocketIcon className="w-5 h-5" />;
    };

    const emiLabel = pricing?.emiLabel || "";
    const primaryButtonText = pricing?.primaryButton?.text || "";
    const secondaryButtonText = pricing?.secondaryButton?.text || "";
    const seatsPrefix = pricing?.seatsLeft?.prefix;
    const seatsSuffix = pricing?.seatsLeft?.suffix;
    const bannerIcon = pricing?.scholarshipBannerIcon;

    const benefits = pricing?.benefits ? pricing.benefits.map((b: any, i: number) => ({
        icon: getBenefitIcon(i),
        text: b.text,
        isDisclaimer: b.isDisclaimer
    })) : [];

    return (
        <section className="bg-white pt-4 sm:pt-6 md:pt-8">
            <div className="max-w-[85rem] mx-auto">
                <>
                    {/* What's Included Section - Postpaid */}
                    <div className="mb-8 sm:mb-12 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">
                            {pricing.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                            {/* Left Column - Job Tracks */}
                            <div className="space-y-6">
                                {/* Fundamentals */}
                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                                        <BookOpenIcon className="w-5 h-5 text-[#B30437]" />
                                    </div>
                                    <span className="text-gray-900 font-medium pt-2">
                                        {pricing.features?.fundamentals}
                                    </span>
                                </div>

                                {/* Multiple Job Tracks */}
                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                                        <BriefcaseIcon className="w-5 h-5 text-[#B30437]" />
                                    </div>
                                    <div>
                                        <span className="text-gray-900 font-medium">
                                            Multiple Job Tracks
                                        </span>
                                        <div className="mt-3 space-y-3 ml-2 border-l-2 border-gray-200 pl-4">
                                            {jobTracks.map((track, index) => (
                                                <div key={index} className="flex items-start gap-2">
                                                    <div className="flex-shrink-0 w-8 h-8 bg-gray-50 rounded flex items-center justify-center text-gray-600">
                                                        {track.icon}
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-800 text-sm font-medium">
                                                            {track.name}
                                                        </span>
                                                        {track.badge && (
                                                            <div className="flex flex-wrap items-center gap-1 mt-1">
                                                                <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded whitespace-normal">
                                                                    {track.badge}
                                                                </span>
                                                                <span className="text-xs text-orange-600 font-medium">
                                                                    {track.badgeDate}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* 3 Hours Classes */}
                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                                        <ClockIcon className="w-5 h-5 text-[#B30437]" />
                                    </div>
                                    <span className="text-gray-900 font-medium pt-2">
                                        {pricing.features?.classes}
                                    </span>
                                </div>

                                {/* Trainers */}
                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                                        <UsersIcon className="w-5 h-5 text-[#B30437]" />
                                    </div>
                                    <span className="text-gray-900 font-medium pt-2">
                                        {pricing.features?.trainers}
                                    </span>
                                </div>
                            </div>

                            {/* Center Column - Placement Support */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                                        <BuildingIcon className="w-5 h-5 text-[#B30437]" />
                                    </div>
                                    <span className="text-gray-900 font-medium pt-2">
                                        {pricing.features?.opportunities}
                                    </span>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                                        <ShieldIcon className="w-5 h-5 text-[#B30437]" />
                                    </div>
                                    <div>
                                        <span className="text-gray-900 font-medium">
                                            {pricing.placementSupport?.title}
                                        </span>
                                        <ul className="mt-3 space-y-2 text-sm text-[#5f6368]">
                                            {(pricing.placementSupport?.items || placementSupport).map((item: any, index: number) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="text-[#80868b] mt-1">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Benefits */}
                            <div className="space-y-5">
                                {(pricing.benefits?.length ? pricing.benefits.map((b: any, i: number) => ({ ...b, icon: benefits[i]?.icon || benefits[0].icon })) : benefits).map((benefit: any, index: number) => (
                                    <div
                                        key={index}
                                        className={`flex items-start gap-3 ${benefit.isDisclaimer ? "opacity-70" : ""
                                            }`}
                                    >
                                        <div
                                            className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${benefit.isDisclaimer ? "bg-gray-50" : "bg-red-50"
                                                }`}
                                        >
                                            <div
                                                className={
                                                    benefit.isDisclaimer ? "text-[#5f6368]" : "text-[#B30437]"
                                                }
                                            >
                                                {benefit.icon}
                                            </div>
                                        </div>
                                        <span
                                            className={`pt-2 ${benefit.isDisclaimer
                                                ? "text-[#5f6368] text-sm"
                                                : "text-gray-900 font-medium"
                                                }`}
                                        >
                                            {benefit.text}
                                            {benefit.isDisclaimer && (
                                                <span className="ml-1 inline-block w-4 h-4 bg-gray-200 rounded-full text-xs text-center leading-4">
                                                    ⓘ
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pricing Section - Postpaid */}
                    <div className="border-t border-gray-200">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Left - EMI Info */}
                            <div className="space-y-4 sm:space-y-2 py-6 sm:py-8 pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-8">
                                <div className="inline-block text-[#000000] text-[20px] sm:text-[20px] font-medium">
                                    {emiLabel}
                                </div>

                                <div className="flex items-baseline gap-2 sm:gap-4 flex-wrap">
                                    <div>
                                        <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                                            {pricing.emiAmount}
                                        </span>
                                        <span className="text-gray-600 text-sm sm:text-base">/month</span>
                                        <div className="text-xs sm:text-sm text-[#5f6368]">(For {pricing.emiMonths}*)</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                        <div>
                                            <span className="font-semibold text-gray-900">
                                                {pricing.cardFeatures?.freeTrial?.title}
                                            </span>
                                            <div className="text-sm text-[#5f6368]">{pricing.cardFeatures?.freeTrial?.subtitle}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                        <div>
                                            <span className="font-semibold text-gray-900">
                                                {pricing.cardFeatures?.scholarships?.title}
                                            </span>
                                            <div className="text-sm text-[#5f6368]">{pricing.cardFeatures?.scholarships?.subtitle}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Next Batch + CTA */}
                                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6">
                                    <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-3">
                                        <button
                                            onClick={() => setShowLoginModal(true)}
                                            className="w-full sm:w-auto px-6 sm:px-6 py-2 sm:py-2 bg-[#1E8E3E] hover:bg-[#9a0330] text-white text-sm sm:text-base font-semibold transition-colors duration-200 cursor-pointer">
                                            {primaryButtonText}
                                        </button>
                                        <button
                                            onClick={() => setShowEmiModal(true)}
                                            className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-2 border-1 border-black text-[#5f6368] text-sm sm:text-base font-semibold transition-colors duration-200 cursor-pointer">
                                            {secondaryButtonText}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Dynamic Scholarship Content */}
                            <div className="w-full lg:border-l lg:border-gray-300 py-6 sm:py-8">
                                {scholarships && scholarships.length > 0 && (
                                    <ScholarshipsSection
                                        scholarships={scholarships}
                                        config={scholarshipConfig}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </>
            </div>

            {/* Login Modal for Advisory */}
            {showLoginModal && (
                <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-[rgba(0,0,0,0.2)] overflow-y-auto">
                    <div className="w-[80%] 2xl:w-[70%] max-w-[1200px] h-[80vh] max-h-[900px] min-h-[500px] relative bg-white rounded-xl shadow-2xl overflow-hidden animate-scale-up my-auto">
                        <button
                            onClick={() => {
                                setShowLoginModal(false);
                                document.body.style.overflow = "";
                            }}
                            aria-label="Close login modal"
                            className="absolute cursor-pointer top-3 right-3 z-50 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all border border-gray-100"
                        >
                            <Image src="/Charters-icon/Cancel.svg" alt="Close" width={24} height={24} className="opacity-70 hover:opacity-100 transition-opacity" />
                        </button>
                        <div className="w-full h-full bg-white">
                            <ChartersInterviewAi />
                        </div>
                    </div>
                </div>
            )}

            {/* EMI Modal */}
            <Modal isOpen={showEmiModal} onClose={() => setShowEmiModal(false)} className="!max-w-5xl overflow-y-auto">
                <button
                    onClick={() => {
                        setShowEmiModal(false);
                        document.body.style.overflow = "";
                    }}
                    className="absolute top-4 right-4 z-50 bg-white hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center shadow-sm text-gray-600 transition-all border border-gray-200 cursor-pointer"
                >
                    ✕
                </button>
                <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-6">
                        <h2 className="text-2xl font-bold tracking-tight text-[#B30437]">CHARTERS <span className="text-gray-900">BUSINESS</span></h2>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">EMI Plans and Choices</h3>
                        <p className="text-gray-600 text-sm">Pick a tenure and EMI that fits your budget - no surprises, just clarity</p>
                    </div>
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-[#B30437] text-white text-xs uppercase font-medium">
                                <tr>
                                    <th className="px-6 py-4 text-center whitespace-nowrap">Tenure</th>
                                    <th className="px-6 py-4 text-center whitespace-nowrap">Type</th>
                                    <th className="px-6 py-4 text-center whitespace-nowrap">Loan Amount</th>
                                    <th className="px-6 py-4 text-center whitespace-nowrap">Rate</th>
                                    <th className="px-6 py-4 text-center whitespace-nowrap">EMI</th>
                                    <th className="px-6 py-4 text-center whitespace-nowrap">Total Loan Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white text-gray-700">
                                {(pricing.emiPlans || []).map((plan: any, idx: number) => (
                                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-center font-medium whitespace-nowrap">{plan.tenure}</td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap">{plan.type}</td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap">{plan.loanAmount}</td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap">{plan.rate}</td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap">{plan.emi}</td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap">{plan.totalLoanAmount}</td>
                                    </tr>
                                ))}
                                {!(pricing.emiPlans && pricing.emiPlans.length > 0) && (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                            No EMI plans configured for this course.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal>
        </section>
    );
};

export default PricingTabs;
