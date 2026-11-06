"use client";
import { useState } from "react";
import Image from "next/image";
import HighlightText from "../shared/HighlightObserver";

const tabs = [
    { id: "masterclass", label: "Masterclass" },
    { id: "mentorship", label: "Mentorship Roundtable" },
    { id: "fireside", label: "Fireside" },
] as const;

type Tab = (typeof tabs)[number]["id"];

interface ImageItem {
    src: string;
    caption: string;
}

const firesideImages: ImageItem[] = [
    { src: "https://cdn.charters'union.com/assets/ih-images/V2/las-fireside.webp", caption: "Manish Mathur, CFO, Dabur International" },
    { src: "https://cdn.charters'union.com/assets/ih-images/V2/las-fireside.webp", caption: "Sylvain Perret, Co-Founder, The Healthy Ice Cream Company" },
];

function ImageCard({ src, caption, className = "" }: ImageItem & { className?: string }) {
    return (
        <div className={`relative overflow-hidden bg-gray-100 group ${className}`}>
            <img
                src={src}
                alt={caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 to-transparent px-3 pb-2.5 pt-7">
                <p className="text-white text-xs font-medium">{caption}</p>
            </div>
        </div>
    );
}

// Mobile: fixed-size cards in a horizontal snap-scroll row. md+: original masonry grid.
const SCROLL_WRAP = "overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible";
const CARD_BASE = "shrink-0 h-80 snap-start md:h-auto md:shrink md:w-auto";

function MasterclassSection() {
    return (
        <div className="w-full overflow-hidden">
            <Image
                src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1793733352/chartersunion-industry-classroom_xh0t6x.avif"
                alt="Charters Union Masterclass - Industry Classroom"
                width={2482}
                height={1054}
                className="w-full h-auto object-cover block"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
            />
        </div>
    );
}

function MentorshipSection() {
    return (
        <div className="w-full overflow-hidden">
            <Image
                src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1789934907/charters_job_internship-team_woy8vb.avif"
                alt="Charters Union Mentorship Roundtable - Job & Internship Team"
                width={1600}
                height={1072}
                className="w-full h-auto object-cover block"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
        </div>
    );
}

function FiresideGrid() {
    return (
        <div className={SCROLL_WRAP}>
            <div className="flex md:grid grid-cols-2 gap-2.5">
                <ImageCard
                    src={firesideImages[0].src}
                    caption={firesideImages[0].caption}
                    className={`${CARD_BASE} w-[75%] md:min-h-[390px]`}
                />
                <ImageCard
                    src={firesideImages[1].src}
                    caption={firesideImages[1].caption}
                    className={`${CARD_BASE} w-[75%] md:min-h-[390px]`}
                />
            </div>
        </div>
    );
}

export default function LifeAtCharters() {
    const [active, setActive] = useState<Tab>("masterclass");

    return (
        <div>
            {/* Academic Immersions */}
            <div className="bg-white pt-22 sm:pt-22 border-b border-gray-200">
                {/* Header */}
                <div className="w-full mx-auto text-center px-4 sm:px-0 px-6 sm:px-10 lg:px-16 pb-10 sm:pb-12">
                    <h2 className="leading-none text-black text-2xl sm:text-3xl md:text-[35px] font-bold pb-[17px]">
                        Life at Charters&apos; Union
                        <br />
                        <HighlightText className="mx-2 font-bold">
                            Real-World Learning in Action
                        </HighlightText>
                    </h2>
                    <p className="text-base px-[20px] md:px-[50px] lg:px-[70px] sm:text-lg text-[#5f6368]">
                        Solve real-world problems on foundation and <strong>Internship</strong> through industies faculty guided mentorship with <strong>CA/US-CMA/CPA/ACCA/CFA</strong> for <strong>CBA™ </strong>(Certified Business Accountant)  and <strong>Growth Engineer, Growth Hacker CMO, CXO</strong> for <strong> DGM™</strong>(Digital Growth & Marketing).
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-0 border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActive(tab.id)}
                            className={`shrink-0 px-5 text-sm font-semibold transition-all duration-200 border-b-2 -mb-0.5 whitespace-nowrap ${active === tab.id
                                ? "border-gray-900 text-gray-900"
                                : "border-transparent text-[#5f6368] hover:text-gray-900 hover:bg-gray-100"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Panels */}
                {active === "masterclass" && <MasterclassSection />}
                {active === "mentorship" && <MentorshipSection />}
                {active === "fireside" && <FiresideGrid />}
            </div>
        </div>
    );
}
