"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ProgrammeAssetConfig, ScholarshipData } from "@/data/programmes";
import Modal from "@/components/shared/Modal";
import HighlightText from "@/components/shared/HighlightObserver";

const GlobalLoginModal = dynamic(
    () => import("@/components/shared/GlobalLoginModal"),
    { ssr: false, loading: () => <div /> }
);



interface PricingAndScholarshipSectionProps {
    assets?: ProgrammeAssetConfig;
    scholarships?: ScholarshipData[];
    scholarshipConfig?: {
        subtitle?: string;
        title: { prefix: string; highlight: string; };
        description: string;
    };
    imageSrc?: string;
    imageAlt?: string;
}

const renderFooterWithBold = (text: string) => {
    const parts = text.split(/(Net Banking|Credit\/Debit Cards)/g);
    return parts.map((part, i) =>
        /Net Banking|Credit\/Debit Cards/.test(part) ? (
            <strong key={i} className="font-bold text-gray-900">
                {part}
            </strong>
        ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
        )
    );
};

const PricingAndScholarshipSection: React.FC<PricingAndScholarshipSectionProps> = ({
    assets,
    scholarships = [],
    scholarshipConfig,
    imageSrc,
    imageAlt = "Programme",
}) => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showEmiModal, setShowEmiModal] = useState(false);

    const pricingCard = assets?.pricing?.pricingCard;
    const emiPlans = assets?.pricing?.emiPlans || [];
    const heroSrc = imageSrc || assets?.heroImage || "/images/certified-business-accountant-student-sunitha-raj-got-jobs.png";

    const highlightFeatures = useMemo(
        () => (pricingCard?.highlightFeatures || []).slice(0, 4),
        [pricingCard]
    );

    if (!pricingCard) {
        return null;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white">
            {/* LEFT — Hero image (50/50) */}
            <div className="relative w-full min-h-[320px] sm:min-h-[420px] lg:min-h-[640px]">
                <Image
                    src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1786642832/chartersunion-student-build-ai-agent-for-scale_ifrulw.avif"
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>

            {/* RIGHT — Pricing card with everything inside */}
            <div className="p-5 sm:p-6 lg:p-8 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                    {pricingCard.title}
                </h2>

                {/* Starts at + highlighted value (HighlightText sema effect) */}
                <div className="mt-4 flex items-baseline gap-2 flex-wrap">
                    <span className="text-base sm:text-lg font-semibold text-gray-900">
                        {pricingCard.startingAtLabel}
                    </span>
                    <HighlightText className="font-bold text-xl sm:text-2xl">
                        {pricingCard.startingAtValue}
                    </HighlightText>
                    {pricingCard.startingAtSuffix && (
                        <span className="text-base sm:text-lg text-gray-900">
                            {pricingCard.startingAtSuffix}
                        </span>
                    )}
                </div>

                {/* No-cost EMI + View Plans (non-clickable card for now) */}
                <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="text-sm sm:text-base text-gray-700">
                        {pricingCard.noCostEmiText}
                    </span>
                    {/* <span
                        className="px-4 py-1.5 bg-[#B30437] text-white text-sm font-semibold rounded select-none"
                        aria-disabled="true"
                    >
                        {pricingCard.viewPlansLabel}
                    </span> */}
                </div>

                {/* Admission Fee | Tuition Fee */}
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-dashed border-gray-300 pt-4">
                    <div>
                        <div className="text-sm text-gray-700">
                            {pricingCard.admissionFeeLabel}
                        </div>
                        <div className="mt-1 text-lg font-bold text-gray-900">
                            <HighlightText className="font-bold">
                                {pricingCard.admissionFeeValue}
                            </HighlightText>
                        </div>
                        {/* <div className="text-sm text-[#B30437] mt-1">
                            {pricingCard.admissionGstText}
                        </div> */}
                    </div>
                    <div className="border-l border-dashed border-gray-300 pl-4">
                        <div className="text-sm text-gray-700">
                            {pricingCard.tuitionFeeLabel}
                        </div>
                        <div className="mt-1 text-lg font-bold text-gray-900">
                            <HighlightText className="font-bold">
                                {pricingCard.tuitionFeeValue}
                            </HighlightText>
                        </div>
                        {/* <div className="text-sm text-[#B30437] mt-1">
                            {pricingCard.tuitionGstText}
                        </div> */}
                    </div>
                </div>

                {/* Total */}
                <div className="mt-4 border-t border-dashed border-gray-300 pt-4 flex items-baseline gap-2 flex-wrap">
                    <span className="text-base sm:text-lg font-semibold text-gray-900">
                        {pricingCard.totalLabel}
                    </span>
                    <HighlightText className="font-bold text-xl sm:text-2xl">
                        {pricingCard.totalValue}
                    </HighlightText>
                </div>

                {/* 4 green-tick highlights */}
                <ul className="mt-6 space-y-2">
                    {highlightFeatures.map((line, i) => {
                        const spaceIdx = line.indexOf(" ");
                        const bold = spaceIdx === -1 ? line : line.slice(0, spaceIdx);
                        const rest = spaceIdx === -1 ? "" : line.slice(spaceIdx + 1);
                        return (
                            <li key={i} className="flex items-start gap-2">

                                <span className="text-sm sm:text-base text-gray-800">
                                    <span className="font-semibold text-gray-900">{bold}</span>
                                    {rest && <> {rest}</>}
                                </span>
                            </li>
                        );
                    })}
                </ul>

                {/* Optional: primary CTA + VIEW EMI */}
                {(pricingCard.ctaPrimary || pricingCard.ctaSecondary) && (
                    <div className="mt-6 flex flex-wrap gap-3">
                        {pricingCard.ctaPrimary && (
                            <button
                                onClick={() => setShowLoginModal(true)}
                                className="px-6 py-2 bg-[#1E8E3E] hover:bg-[#9a0330] text-white text-sm sm:text-base font-semibold cursor-pointer rounded"
                            >
                                {pricingCard.ctaPrimary}
                            </button>
                        )}
                        {pricingCard.ctaSecondary && (
                            <button
                                onClick={() => setShowEmiModal(true)}
                                className="px-6 py-2 border border-gray-900 text-gray-900 text-sm sm:text-base font-semibold cursor-pointer rounded"
                            >
                                {pricingCard.ctaSecondary}
                            </button>
                        )}
                    </div>
                )}

                {/* Financial Aid heading */}
                {scholarshipConfig?.subtitle && (
                    <div className="mt-6 border-t border-dashed border-gray-300 pt-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                            {scholarshipConfig.subtitle}
                        </h3>
                    </div>
                )}

                {/* 4 static scholarship rows: green tick + title (no dropdown) */}
                {scholarships.length > 0 && (
                    <ul className="mt-4 space-y-2">
                        {scholarships.slice(0, 4).map((scholarship) => (
                            <li key={scholarship.id} className="flex items-start gap-2">
                                <span className="text-sm sm:text-base text-gray-800">
                                    <span >
                                        {scholarship.title.split(" ").slice(0, 1).join(" ")}
                                    </span>
                                    {scholarship.title.split(" ").length > 1 && (
                                        <>{scholarship.title.split(" ").slice(1).join(" ")}</>
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* FOOTER: dotted line + footerNote with "Net Banking" and "Credit/Debit Cards" bold */}
                <div className="mt-6 border-t border-dashed border-gray-300 pt-4">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {renderFooterWithBold(pricingCard.footerNote)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PricingAndScholarshipSection;
