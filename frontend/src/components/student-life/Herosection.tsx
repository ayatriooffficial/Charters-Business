import Link from "next/link";
import Image from "next/image";
import { scholarshipBanner } from "@/data/applyPageData";
import Breadcrumbs from "../shared/Breadcrumbs";
import HighlightText from "../shared/HighlightObserver";
type Stat = { value: string; label: string; detail: string; gradient?: string };
const HERO_HEADING = "CareerPathx™ gives 100% Career Growth";
const HERO_TAGLINE =
    "Benefit from an exceptional track record of our students success";

const HERO_STATS: Stat[] = [
    {
        value: "579",
        label: "Startups",
        detail: "formed as part of Charters' Union internship Initiation Program",
        gradient: "bg-[#222222}",
    },
    {
        value: "₹ 1.3 Cr",
        label: "Combined placement packege 25/26",
        detail: "of all Accountant & Digital maketing in Term 1 to Term 4 (Cohort 2025/26)",
        gradient: "bg-[#222222]",
    },
];

const HERO_CTA = {
    label: "Download Placement Report",
    href: "#download-report",
};
const HERO_IMAGE = {
    src: "https://images.mastersunion.link/uploads/26122024/mahakgroup.webp",
    alt: "Fireside chat about career growth",
};

export default function Hersection() {
    return (
        <>
            <div role="banner" className="w-full mt-10">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4 sm:pb-6 md:pb-8">
                    <Breadcrumbs compact />

                    <section className="mt-3 sm:mt-4 flex flex-col gap-6 sm:gap-10 md:flex-row md:items-center">

                        {/* Left*/}
                        <section className="flex flex-1 flex-col justify-center">
                            <h1
                                id="careers-hero-title"
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
                            >
                                {HERO_HEADING}
                            </h1>

                            <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm text-gray-600 md:text-base">
                                {HERO_TAGLINE}
                            </p>

                            {/* Stats */}
                            <div
                                role="list"
                                aria-label="Key outcomes"
                                className="mt-6 sm:mt-8 flex w-full flex-row gap-6 sm:gap-8 md:gap-10"
                            >
                                {/* Stat 1 */}
                                <div role="listitem" className="flex flex-1 flex-col gap-2">
                                    <p
                                        className={[
                                            "text-3xl sm:text-4xl font-extrabold leading-none text-[#222222] bg-clip-text",
                                            HERO_STATS[0].gradient ?? "",
                                        ].join(" ")}
                                    >
                                        {HERO_STATS[0].value}
                                    </p>
                                    <p className="text-xs sm:text-sm font-semibold">
                                        {HERO_STATS[0].label}{" "}
                                        <span className="font-normal text-gray-600">
                                            {HERO_STATS[0].detail}
                                        </span>
                                    </p>
                                </div>

                                {/* Divider — visible only on md+ */}
                                <div
                                    className="hidden md:block h-16 w-px bg-gray-300 self-center"
                                    aria-hidden="true"
                                />

                                {/* Stat 2 */}
                                <div role="listitem" className="flex flex-1 flex-col gap-2">
                                    <p
                                        className={[
                                            "text-3xl sm:text-4xl font-extrabold leading-none text-transparent bg-clip-text",
                                            HERO_STATS[1].gradient ?? "",
                                        ].join(" ")}
                                    >
                                        {HERO_STATS[1].value}
                                    </p>
                                    <p className="text-xs sm:text-sm font-semibold">
                                        {HERO_STATS[1].label}{" "}
                                        <span className="font-normal text-gray-600">
                                            {HERO_STATS[1].detail}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-6 sm:mt-10">
                                <Link
                                    href={HERO_CTA.href}
                                    className="inline-flex items-center  bg-[#222222] hover:bg-[#000000]  px-4 sm:px-6 py-2 sm:py-2 text-xs sm:text-sm font-semibold text-white"
                                >
                                    {HERO_CTA.label}

                                </Link>
                            </div>
                        </section>

                        {/* Right: Image */}
                        <section className="w-full md:flex-1">
                            <div className="relative aspect-video w-full overflow-hidden border border-gray-200 bg-gray-100">
                                <Image
                                    src={HERO_IMAGE.src}
                                    alt={HERO_IMAGE.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </section>

                    </section>
                </div>
            </div>

            <section className="bg-white pt-10 sm:pt-12 pb-2 sm:pb-3 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    A{" "}
                    <HighlightText className="mx-2 font-bold">
                        Kaleidoscope
                    </HighlightText>{" "}
                    of Diversity
                </h2>
            </section>

            <div className="w-full border-gray-200 md:mx-auto flex flex-col items-center justify-center">

                <div
                    className="md:border-x pt-2 pb-8 border-gray-200 md:w-[90%] max-w-[85rem]"
                    aria-label="Scholarship information"
                >
                    <div className="px-4 sm:px-6 lg:px-8">
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black text-center">
                            {scholarshipBanner.text}{" "}
                            <strong className="font-bold">{scholarshipBanner.highlight}</strong>{" "}
                            for undergraduate and postgraduate candidates.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
