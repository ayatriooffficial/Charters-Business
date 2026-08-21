
"use client";

import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

const GlobalLoginModal = dynamic(() => import("@/components/shared/GlobalLoginModal"), { ssr: false, loading: () => <div /> });

const triggerDownload = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Download failed:", error);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
const heroData = {
  availableBadge: "Available Now",
  title: "From Fresher to Global Career: AI in Every Class, Faculty-Guided Paid Internships, Job-Ready Training Built for top MNCs",
  description:
    "Kolkata's AI-first Job Ready training institute. 3 programs: Certified Business Accountant, Digital Growth & Marketing, Technology & Business Management. AICPA/ACCA/HBS/Google aligned. 4–6 month paid internship in 7 countries. Corporate English. AI interview coaching. Placement support. Book free democlass.",
  desktopBackgroundImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1785502371/ChartersUnion-faculty-alreday-placed-students_l6oqu2.avif",
  mobileBackgroundImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1785503187/chartersUnion-mantor-placed-students-m_n49fnw.avif",
  cta: {
    buttonText: "Placement Report",
    buttonAriaLabel: "2025 Placement Report",
  },
};

function ChartersUnionHero() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <div className="h-[44px] md:h-[80px]" />
      <section
        className="relative w-full h-auto overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <h1 id="hero-heading" className="sr-only">
          {heroData.title}
        </h1>

        {/* Banner */}
        <div
          className="absolute top-[10%] md:top-[20%] left-1/2 -translate-x-1/2 z-10 w-max max-w-[95%] cursor-pointer transition-transform hover:scale-[1.02]"
          onClick={() => {
            setIsLoginModalOpen(true);
            document.body.style.overflow = 'hidden';
          }}
        >
          <div className="bg-[#222222] border border-gray-200 p-[2px] flex items-center gap-1 sm:gap-1.5 w-full">
            <div className="bg-white text-[#222222] px-1 py-[2px] text-[8px] sm:text-[12px] md:text-[12px] font-bold tracking-wide shrink-0">
              Free!
            </div>
            <div className="text-white text-[10px] sm:text-[12px] md:text-[12px] font-semibold flex items-center justify-center whitespace-nowrap gap-0.5">
              <span>1:1 Career Counselling with CareerPathx™</span>
            </div>
            <div className="px-[2px] sm:px-[2px] flex items-center justify-center shrink-0">

            </div>
          </div>
        </div>

        <div className="relative w-full aspect-[375/667] sm:aspect-[4/3] md:aspect-[1920/940] max-h-[85vh] overflow-hidden">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={heroData.desktopBackgroundImage}
              width={1920}
              height={940}
            />
            <img
              src={heroData.mobileBackgroundImage}
              sizes="100vw"
              width={750}
              height={1334}
              alt="From Fresher to Global Career: AI in Every Class, Faculty-Guided Paid Internships, Job-Ready Training Built for top MNCs"
              fetchPriority="high"
              decoding="sync"
              className="relative w-full h-full object-contain md:object-cover"
            />
          </picture>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden absolute bottom-[8%] left-0 right-0 flex justify-center px-4 sm:px-4 md:px4">
          <div className="flex flex-col gap-2 sm:gap-3 items-center justify-center w-full w-full">

            {/* JOIN WEBINAR BUTTON */}
            <button
              aria-label={heroData.cta.buttonAriaLabel}
              onClick={() => triggerDownload("https://res.cloudinary.com/ducgcl4dg/image/upload/v1784611644/charters-placement-report-2026_gyuu4p.avif", "charters-placement-report-2025.avif")}
              className="w-full bg-[#B30437] hover:bg-[#222222] text-white cursor-pointer py-3 px-3 text-[11px] sm:text-xs font-medium transition-all duration-300 whitespace-nowrap"
            >
              {heroData.cta.buttonText}
            </button>

            {/* TRACK CAREER BUTTON */}
            <Link href="/career-path" className="w-full">
              <button
                className="w-full bg-white hover:bg-[#efefef] cursor-pointer text-black py-3 px-2 border border-black text-[11px] sm:text-xs font-medium transition-all duration-300 whitespace-nowrap"
              >
                Track Your Career Path
              </button>
            </Link>

          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex absolute bottom-[22%] left-0 right-0 justify-center">
          <div className="flex flex-row gap-4 items-center">

            {/* JOIN WEBINAR BUTTON */}
            <button
              aria-label={heroData.cta.buttonAriaLabel}
              onClick={() => triggerDownload("https://res.cloudinary.com/ducgcl4dg/image/upload/v1784611644/charters-placement-report-2026_gyuu4p.avif", "charters-placement-report-2025.avif")}
              className="bg-[#B30437] hover:bg-[#B30437] text-white cursor-pointer py-2 px-10 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              {heroData.cta.buttonText}
            </button>

            {/* TRACK CAREER BUTTON */}
            <Link href="/career-path">
              <button
                className="bg-white hover:bg-[#F6F4F2] cursor-pointer text-black py-2 px-8 border border-black text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Track Your Career Path
              </button>
            </Link>

          </div>
        </div>

        <GlobalLoginModal
          isOpen={isLoginModalOpen}
          onClose={() => {
            setIsLoginModalOpen(false);
            document.body.style.overflow = 'auto';
          }}
        />
      </section>
    </>
  );
}

export default ChartersUnionHero;