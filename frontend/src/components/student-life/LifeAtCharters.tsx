"use client";
import { useState } from "react";
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

const masterclassImages: ImageItem[] = [
    { src: "https://cdn.tetr.com/assets/ih-images/V2/las-masterclass.webp", caption: "Sven Herzing, CTO, Talabat" },
    { src: "https://cdn.tetr.com/assets/ih-images/V2/las-masterclass.webp", caption: "Nishant Sukumaran, Marketing Head, Dabur International" },
    { src: "https://cdn.tetr.com/assets/ih-images/V2/las-masterclass.webp", caption: "Jeff Strachen, VP, Dubai's Department of Economy and Tourism" },
];

const mentorshipImages: ImageItem[] = [
    { src: "https://cdn.tetr.com/assets/ih-images/V2/las-mentorship.webp", caption: "Ziad Shaltuni, Chief Commercial Officer, REALM" },
    { src: "https://cdn.tetr.com/assets/ih-images/V2/las-mentorship.webp", caption: "Yusuf Saber, Ex VP, Talabat" },
    { src: "https://cdn.tetr.com/assets/ih-images/V2/las-mentorship.webp", caption: "Sameer Rana, Group CMO, Beyond ONE" },
    { src: "https://cdn.tetr.com/assets/ih-images/V2/las-mentorship.webp", caption: "Maryam Shahin, Head of Marketing, Ministry of Education UAE" },
];

const firesideImages: ImageItem[] = [
    { src: "https://cdn.tetr.com/assets/ih-images/V2/las-fireside.webp", caption: "Manish Mathur, CFO, Dabur International" },
    { src: "https://cdn.tetr.com/assets/ih-images/V2/las-fireside.webp", caption: "Sylvain Perret, Co-Founder, The Healthy Ice Cream Company" },
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

function MasterclassGrid() {
    return (
        <div className={SCROLL_WRAP}>
            <div className="flex md:grid grid-cols-[1.35fr_1fr] gap-2.5">
                <ImageCard
                    src={masterclassImages[0].src}
                    caption={masterclassImages[0].caption}
                    className={`${CARD_BASE} w-[80%] row-span-2 md:min-h-[430px]`}
                />
                <ImageCard
                    src={masterclassImages[1].src}
                    caption={masterclassImages[1].caption}
                    className={`${CARD_BASE} w-[60%] md:min-h-[210px]`}
                />
                <ImageCard
                    src={masterclassImages[2].src}
                    caption={masterclassImages[2].caption}
                    className={`${CARD_BASE} w-[60%] md:min-h-[210px]`}
                />
            </div>
        </div>
    );
}

function MentorshipGrid() {
    return (
        <div className={SCROLL_WRAP}>
            <div className="flex md:grid grid-cols-[1fr_0.85fr] gap-2.5">
                <ImageCard
                    src={mentorshipImages[0].src}
                    caption={mentorshipImages[0].caption}
                    className={`${CARD_BASE} w-[80%] row-span-2 md:min-h-[430px]`}
                />
                <ImageCard
                    src={mentorshipImages[1].src}
                    caption={mentorshipImages[1].caption}
                    className={`${CARD_BASE} w-[60%] md:min-h-[210px]`}
                />
                <ImageCard
                    src={mentorshipImages[2].src}
                    caption={mentorshipImages[2].caption}
                    className={`${CARD_BASE} w-[60%] md:min-h-[210px]`}
                />
                <ImageCard
                    src={mentorshipImages[3].src}
                    caption={mentorshipImages[3].caption}
                    className={`${CARD_BASE} w-[80%] col-span-2 md:min-h-[180px]`}
                />
            </div>
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
            {/* Hero */}


            {/* Academic Immersions */}
            <div className="bg-white  pt-22 sm:pt-22 border-b border-gray-200">

                {/* Header */}
                <div className=" w-full mx-auto text-center px-4 sm:px-0 px-6 sm:px-10 lg:px-16 pb-10 sm:pb-12 ">
                    <h2 className="leading-none text-black text-2xl sm:text-3xl md:text-[35px] font-bold pb-[17px]">
                        Life at Charters&apos; Union
                        <br />
                        <HighlightText className="mx-2 font-bold">
                            Real-World Learning in Action
                        </HighlightText>
                    </h2>
                    <p className="text-base px-[20px] md:px-[50px] lg:px-[70px] sm:text-lg text-[#5f6368]">
                        Solve real-world problems on foundation and <strong>internshiph</strong> through industies faculty guided mentorship with <strong>CA/US-CMA/CPA/ACCA/CFA</strong> for <strong>CBA™ </strong>(Certified Business Accountant)  and <strong>Growth Engineer, Growth Hacker CMO, CXO</strong> for <strong> DGM™</strong>(Digital Growth & Marketing).

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

                {/* Grid panels */}
                {active === "masterclass" && <MasterclassGrid />}
                {active === "mentorship" && <MentorshipGrid />}
                {active === "fireside" && <FiresideGrid />}
            </div>
        </div>
    );
}