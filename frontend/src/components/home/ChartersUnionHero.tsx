
"use client";

import Link from "next/link";

const triggerDownload = (url: string, filename: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const heroData = {
  availableBadge: "Available Now",
  title: "From Fresher to Global Career: AI in Every Class, Faculty-Guided Paid Internships, Job-Ready Training Built for top MNCs",
  description:
    "Kolkata's AI-first Job Ready training institute. 3 programs: Certified Business Accountant, Digital Growth & Marketing, Technology & Business Management. AICPA/ACCA/HBS/Google aligned. 4–6 month paid internship in 7 countries. Corporate English. AI interview coaching. Placement support. Book free democlass.",
  desktopBackgroundImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784546558/chartersUnion-mantor-placed-students_hwtwko.avif",
  mobileBackgroundImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784549510/chartersUnion-mantor-placed-students-m_homu0z.avif",
  cta: {
    buttonText: "Placement Report",
    buttonAriaLabel: "2025 Placement Report",
  },
};

function ChartersUnionHero() {
  return (
    <>
      <div className="h-[44px] md:h-[80px]" />
      <section
        className="relative w-full h-[calc(100vh-106px)] min-h-[545px] md:h-auto overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <h1 id="hero-heading" className="sr-only">
          {heroData.title}
        </h1>

        <div className="relative w-full h-full md:h-auto">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={heroData.desktopBackgroundImage}
            />
            <img
              src={heroData.mobileBackgroundImage}
              sizes="100vw"
              alt="From Fresher to Global Career: AI in Every Class, Faculty-Guided Paid Internships, Job-Ready Training Built for top MNCs"
              fetchPriority="high"
              decoding="sync"
              className="absolute inset-0 h-full w-full object-cover object-center md:relative md:h-auto md:w-full md:object-contain"
            />
          </picture>
        </div>

        {/* Mobile Content — hidden on md+ */}
        <div className="md:hidden relative h-full w-full px-4 flex flex-col items-center justify-center pb-10">
          <div className="flex flex-col items-center text-center space-y-3 w-full max-w-sm">
            {/* Badge */}
            <span className="inline-block bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">
              {heroData.availableBadge}
            </span>

            {/* Title */}
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {heroData.title}
              </h2>
            </div>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-white" />

            {/* Description */}
            <p className="text-white/90 text-sm leading-relaxed">
              {heroData.description}
            </p>
            {/* CTA Buttons */}
            <div className="w-full mt-2 flex flex-col gap-3">

              <Link href="/career-path" className="w-full">
                <button
                  aria-label="Track your career path"
                  className="w-full bg-[#202124] hover:bg-[#B30437] text-white py-3 px-8 rounded-lg text-sm font-semibold"
                >
                  Track Your Career Path
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex absolute bottom-[22%] left-0 right-0 justify-center">
          <div className="flex flex-row gap-4 items-center">

            {/* JOIN WEBINAR BUTTON */}
            <button
              aria-label={heroData.cta.buttonAriaLabel}
              onClick={() => triggerDownload("/home/Capdsdsfture.JPG", "charters-placement-report-2025.jpg")}
              className="bg-[#B30437] hover:bg-[#B30437] text-white cursor-pointer  py-2 px-10 text-sm font-medium transition-all duration-300 hover:scale-105"    >
              {heroData.cta.buttonText}
            </button>

            {/* TRACK CAREER BUTTON */}
            <Link href="/career-path">
              <button
                className="bg-white hover:bg-[#efefef] cursor-pointer text-black py-2 px-8 border border-black text-sm font-medium transition-all duration-300 hover:scale-105"      >
                Track Your Career Path
              </button>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}

export default ChartersUnionHero;