"use client";

import { useState, useEffect, useRef, memo } from "react";
import Image from "next/image";
import HighlightText from "../shared/HighlightObserver";

const CARD_MOBILE_BANNER_SIZES =
  "(max-width: 639px) calc(100vw - 0.5rem), (max-width: 1023px) calc(100vw - 1rem), 680px";
const CARD_DESKTOP_IMAGE_SIZES =
  "(min-width: 1360px) 680px, (min-width: 1024px) 50vw, 100vw";
const PARTNER_LOGO_SIZES = "(max-width: 768px) 100vw, 463px";

const cardsData = [
  {
    id: "creator",
    variant: "editorial",
    badge: "100% Job-Ready Career Conversion",
    title: "AI-Powered Curriculum for",
    subtitle: "Corporate foundation",
    description:
      "",
    mediaSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784538676/world-map-illistarter_syq1gl.avif",
    logos: ["Charters hiring partner around the word"],
  },
  {
    id: "ai-health",
    variant: "health-grid",
    badge: "AI Specializations",
    title: "AI in Healthcare",
    subtitle: "",
    description: "",
    logos: [],
  },
  {
    id: "flagship",
    variant: "flagship",
    badge: "Flagship Programs",
    title: "Flagship Programs",
    subtitle: "",
    description: "",
    logos: [],
    programs: [
      { name: "AI-powered corporate spoken English training", duration: "1st Weeks" },
      { name: "Corporate body language & professional conduct", duration: "3rd Weeks" },
      { name: "LinkedIn profile building & professional networking", duration: "5th Weeks" },
      { name: "1:1 mentorship sessions industries guest faculty", duration: "7th Weeks" },
      { name: "Corporate critical thinking training", duration: "8th Weeks" },
      { name: "leadership development", duration: "10th Weeks" },
      { name: "JD-based resume writing", duration: "11th Weeks" },
      { name: "an AI-powered intranshiph/job search engine", duration: "12th Weeks" },
    ],
  },
];

interface CardLayoutProps {
  card: (typeof cardsData)[0];
}

function CardLayout({ card }: CardLayoutProps) {
  switch (card.variant) {
    case "editorial":
      return <EditorialCard card={card} />;
    case "health-grid":
      return <HealthGridCard card={card} />;
    case "flagship":
      return <FlagshipCard card={card} />;
    default:
      return null;
  }
}

interface EditorialCardProps {
  card: (typeof cardsData)[0];
}

function EditorialCard({ card }: EditorialCardProps) {
  return (
    <div className="flex flex-col h-full w-full overflow-y-visible lg:overflow-y-auto">
      <div className="relative block aspect-video w-full flex-shrink-0 overflow-hidden lg:hidden">
        <Image
          src={card.mediaSrc!}
          alt={`${card.title} visual`}
          fill
          className="w-full h-full object-cover object-left-bottom"
          loading="lazy"
          quality={45}
          sizes={CARD_MOBILE_BANNER_SIZES}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 flex-1">
        <div className="lg:col-span-6 flex flex-col justify-start md:justify-center pt-[20px] sm:pt-[20px] md:pt-[30px] lg:pt-[50px] xl:pt-[50px] 2xl:pt-[50px] pb-[10px] sm:pb-[10px] md:pb-[15px] lg:pb-[20px] xl:pb-[20px] px-3 sm:px-6 lg:px-7 handson-slider-left-col">
          <div className="flex items-center mb-2 sm:mb-3">
            <div className="flex -space-x-2">

              <div className="rounded-full border-1 border-black">
                <p className="inline-fle items-center text-gray-600 text-[12px] sm:text-[12px] sm:text-[14px] lg:text-[14px] py-[3px] px-[20px] font-semibold text-black ">
                  {card.badge}
                </p></div></div></div>




          <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] leading-[1.15] font-semibold text-black mb-1 sm:mb-2">
            {card.title}
            <br />
            {card.subtitle}
          </h2>

          <p className="text-[12px] sm:text-[14px] text-[#5f6368] leading-[1.6] sm:leading-[1.7] max-w-[52ch] mb-4 sm:mb-8">
            Foundation designed on <strong>7 globally recognized bodies</strong> + <strong>Harvard-style case studies</strong> — the closest thing to global certification preparation inside a job-ready program.
          </p>


          <div className="mb-6">
            <p className="text-[11px] font-semibold text-[#80868b] mb-2 uppercase tracking-wider">
              Curriculum structure based on globally recognized bodies
            </p>
            <div className="relative w-full h-[40px] object-contain overflow-hidden">
              <Image
                src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1784554663/charter-academic-partner_o8bib0.avif"
                alt="charter academic partner"
                fill
                sizes={PARTNER_LOGO_SIZES}
                className="object-contain object-left"
              />
            </div>
          </div>

          <div className="mb-2">
            <p className="text-[11px] font-semibold text-[#80868b] pt-2 mb-2 uppercase tracking-wider">
              100% AI-integrated curriculum
            </p>
            <div className="relative object-contain w-full h-[55px] overflow-hidden">
              <Image
                src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1784554663/young_charters_work_on_AI-agents_around_accounting___marketing_hjok0u.avif"
                alt="100% AI-integrated curriculum around accounting and marketing"
                fill
                sizes={PARTNER_LOGO_SIZES}
                className="object-contain object-left"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-6 flex-col relative h-full w-full overflow-hidden">
          <Image
            src={card.mediaSrc!}
            alt={`${card.title} visual`}
            fill
            quality={45}
            sizes="(min-width: 1024px) 493px, 100vw"
            className="object-center scale-[0.99] h-auto object-contain w-full relative!"
          />
          <p className="absolute bottom-2 left-8 right-8 text-[8px] text-[#5f6368] bg-white bg-opacity-75 p-1 rounded">
            Source: *(a)¹Cr:Crore. (b)²CCA: certified corporate accountant.
            (c)³Times™ India Job Postings (median indian salary with 0-5 years
            experience, Jan. 1, 2022 - Dec. 31, 2022).
          </p>
        </div>
      </div>
    </div>
  );
}

interface HealthGridCardProps {
  card: (typeof cardsData)[0];
}

function HealthGridCard({ card }: HealthGridCardProps) {
  return (
    <section className="flex flex-col w-full bg-[#F4F2EE] overflow-hidden h-auto">
      {/* Mobile banner image */}
      <div className="relative block aspect-square w-full flex-shrink-0 overflow-hidden lg:hidden">
        <Image
          src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1784539837/CBA-Stududent-achivement_vlf1cp.avif"
          alt={`${card.title} visual`}
          fill
          className="w-full h-full object-contain"
          loading="lazy"
          quality={40}
          sizes={CARD_MOBILE_BANNER_SIZES}
        />
      </div>

      {/* Main grid — min-h capped at 65vh so it never causes scroll on small laptops */}
      <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
        {/* Left content column */}
        <div className="lg:col-span-6 flex flex-col pt-[20px] sm:pt-[20px] md:pt-[30px] lg:pt-[50px] xl:pt-[50px] 2xl:pt-[50px] pb-[10px] sm:pb-[10px] md:pb-[15px] lg:pb-[20px] xl:pb-[20px]  px-3 sm:px-6 lg:px-7 handson-slider-left-col">
          <div className="flex items-center mb-2 sm:mb-3">
            <div className="flex -space-x-2">

              <div className="rounded-full border-1 border-[#B30437]">
                <p className="inline-fle items-center text-gray-600 text-[12px] sm:text-[12px] sm:text-[14px] lg:text-[14px] px-[20px] py-[3px] font-semibold text-[#B30437] ">
                  Faculty Guided Internship
                </p></div></div></div>

          <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] leading-[1.15] font-semibold text-black mb-1 sm:mb-2">
            In-class Paid Internship
            <br />
            Guided by faculty
          </h2>

          <p className="text-[12px] sm:text-[14px] text-[#5f6368] leading-[1.6] sm:leading-[1.7] max-w-[48ch] mb-4 sm:mb-8">
            <strong>+4 months</strong> of your program, you work inside a real company — in India or across <strong>6 international markets</strong>. You are earning while learning, building a global level portfolio.
          </p>


          <div className="mb-6">
            <p className="text-[11px] font-semibold text-[#80868b] mb-2 uppercase tracking-wider">
              In-class Paid internship across 1,257+ companies
            </p>
            <div className="relative object-contain w-full h-[40px] overflow-hidden">
              <Image
                src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1784554664/charter-intrenshiph-company-around-the-world_dxkfmo.avif"
                alt="Charter intrenshiph company around the world"
                fill
                sizes={PARTNER_LOGO_SIZES}
                className="object-contain object-left"
              />
            </div>
          </div>

          <div className="mb-2">
            <p className="text-[11px] font-semibold text-[#80868b] pt-2 mb-2 uppercase tracking-wider">
              Internship/Job around the 7 countries
            </p>
            <div className="relative object-contain w-full h-[40px] overflow-hidden">
              <Image
                src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1784554662/charter-hiring-company-from-7-countries_go0sp9.avif"
                alt="Meet our creator alums"
                fill
                sizes={PARTNER_LOGO_SIZES}
                className="object-contain object-left"
              />
            </div>
          </div>
        </div>

        {/* Right image column */}
        <div className="hidden lg:block lg:col-span-6 relative">
          <Image
            src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1784539837/CBA-Stududent-achivement_vlf1cp.avif"
            alt="CBA Stududent Achivement"
            fill
            quality={60}
            sizes={CARD_DESKTOP_IMAGE_SIZES}
            className="object-fill object-center"
          />
        </div>
      </div>
    </section>
  );
}

interface FlagshipCardProps {
  card: (typeof cardsData)[0];
}

function FlagshipCard({ card }: FlagshipCardProps) {
  const scrollByAmount = 240;
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col w-full bg-[#C5E2CF] overflow-hidden h-auto">
      <div className="relative block aspect-square w-full flex-shrink-0 overflow-hidden lg:hidden">
        <Image
          src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1784539837/chartersunion-careerpathx_n8ntnl.avif"
          alt={`${card.title} visual`}
          fill
          className="w-full h-full object-contain"
          loading="lazy"
          quality={40}
          sizes={CARD_MOBILE_BANNER_SIZES}
        />
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-x-0 h-auto"
      >
        <div className="lg:col-span-6 flex flex-col pt-[20px] sm:pt-[20px] md:pt-[30px] lg:pt-[50px] xl:pt-[50px] 2xl:pt-[50px] pb-[10px] sm:pb-[10px] md:pb-[15px] lg:pb-[20px] xl:pb-[20px] px-3 sm:px-6 lg:px-8 handson-slider-left-col">
          <div className="flex items-center mb-2 sm:mb-3">
            <div className="flex -space-x-2">
              <div className="rounded-full border border-[#1E8E3E]">
                <p className="inline-flex items-center text-[12px] sm:text-[12px] lg:text-[14px] py-[3px] px-[20px] font-semibold text-[#1E8E3E]">
                  CareerPathx™ Career AI-Engine
                </p>
              </div>
            </div>

          </div>

          <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] leading-[1.15] font-semibold text-black mb-1 sm:mb-2">
            AI-Powered Career
            <br />
            Persona Development
          </h2>

          <p className="text-[12px] sm:text-[14px] text-[#5f6368] leading-[1.6] sm:leading-[1.7] max-w-[52ch] mb-2 sm:mb-6">
            <strong>Month 1 to Final Month</strong>: <strong> AI-Powered Corporate English, Mock Interviews, Leadership Training, LinkedIn Profile, Resume, and 1:1 Mentorship</strong> — All Included
          </p>

          <div className="overflow-hidden">
            <div className="h-[40px] flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#5f6368] uppercase tracking-wide">
                A 7-Month Career Identity Transformation
              </span>
              <div className="flex items-center gap-1">
                <button onClick={scrollLeft} type="button" className="w-6 h-6 cursor-pointer flex items-center justify-center text-[#5f6368] bg-[#78BA9E] transition" aria-label="Scroll left">
                  <img src="/Charters-icon/backarrow.svg"
                    alt="Format icon"
                    width={15}
                    height={15}
                    className=" w-[12px] h-[12px] object-contain"
                  /></button>
                <button onClick={scrollRight} type="button" className="w-6 h-6 cursor-pointer flex items-center justify-center text-[#5f6368] bg-[#78BA9E] transition" aria-label="Scroll right">
                  <img src="/Charters-icon/rightarrow.svg"
                    alt="Format icon"
                    width={15}
                    height={15}
                    className=" w-[12px] h-[12px] object-contain"
                  /></button>
              </div>
            </div>

            <div className="-mx-3 sm:mx-0">
              <div ref={sliderRef} className="flex overflow-x-auto scrollbar-hide h-[160px] sm:h-[180px] items-stretch scroll-smooth divide-x divide-[#016833] border-[#016833]">
                {card.programs?.map((p: { name: string; duration: string }) => (
                  <div key={p.name} className="w-[150px] sm:w-[150px] flex-shrink-0 h-full bg-[#78BA9E] px-4 sm:px-5 py-4 sm:py-5 flex flex-col justify-between">
                    <span className="text-[10px] bg-[#202124] text-white px-2 py-[2px] w-fit">PROGRAM</span>
                    <h3 className="mt-3 text-[15px] sm:text-[14px] font-semibold text-black leading-snug">{p.name}</h3>
                    <p className="text-[12px] text-gray-700">{p.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right image column */}
        <div className="lg:col-span-6 hidden lg:block relative">
          <Image
            src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1784539837/chartersunion-careerpathx_n8ntnl.avif"
            alt="Learner portrait"
            fill
            quality={60}
            sizes={CARD_DESKTOP_IMAGE_SIZES}
            className="object-fill object-center"
          />
        </div>
      </div>
    </section>
  );
}

interface CardComponentProps {
  card: (typeof cardsData)[0];
  index: number;
  activeIndex: number;
  totalCards: number;
}

const CardComponent = memo(
  ({ card, index, activeIndex }: CardComponentProps) => {
    const currentCardIndex = Math.floor(activeIndex);
    const nextCardIndex = currentCardIndex + 1;
    const scrollProgress = activeIndex - currentCardIndex;
    const slideDistance = typeof window !== "undefined" ? (window.innerHeight < 900 ? 880 : 800) : 800;

    const fadeThreshold = 0.4;
    const zoomOutAmount = 0.1;
    const fadeAmount = 0.2;

    const isCurrent = index === currentCardIndex;
    const isNext = index === nextCardIndex;
    const isVisible = isCurrent || isNext;

    let y = 0;
    let opacity = 1;
    let zIndex = 1000;
    let scale = 1;

    if (isCurrent) {
      y = 0;
      zIndex = 1010;

      if (scrollProgress > fadeThreshold) {
        const fadeProgress = (scrollProgress - fadeThreshold) / (1 - fadeThreshold);
        scale = 1 - fadeProgress * zoomOutAmount;
        opacity = 1 - fadeProgress * fadeAmount;
      } else {
        scale = 1;
        opacity = 1;
      }
    } else if (isNext) {
      y = slideDistance * (1 - scrollProgress);
      opacity = 1;
      zIndex = 1020;
      scale = 1;
    } else if (index > currentCardIndex) {
      y = slideDistance;
      opacity = 0;
      zIndex = 1000 - (index - currentCardIndex);
      scale = 1;
    } else {
      y = -8 * (currentCardIndex - index);
      opacity = 0;
      zIndex = 1000 - (currentCardIndex - index);
      scale = 1;
    }

    // Show all 4 borders only when the card is shrinking
    const isScaling = isCurrent && scale < 1;

    return (
      <article
        className={`absolute left-0 right-0 top-2 sm:top-4 md:top-8 lg:top-10 mx-1 sm:mx-2 md:mx-4 lg:mx-auto bg-white text-black overflow-hidden max-w-[85rem] ${isScaling
          ? "border border-gray-200"
          : "border-t border-gray-200"
          }`}
        style={{
          transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
          opacity: isVisible ? opacity : 0,
          zIndex,
          pointerEvents: isVisible ? "auto" : "none",
          willChange: "transform, opacity",
          transformOrigin: "center center",
        }}
        aria-labelledby={`card-title-${card.id}`}
      >
        <div className="h-auto overflow-hidden">
          <CardLayout card={card} />
        </div>
      </article>
    );
  },
);

CardComponent.displayName = "CardComponent";

function Handson() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const [metrics, setMetrics] = useState({ offsetTop: 0, height: 0, headerHeight: 0 });

  const lastProgress = useRef(0);
  const rafId = useRef<number | null>(null);
  const totalCards = cardsData.length;

  useEffect(() => setMounted(true), []);

  // BLOCK 1: MEASURE ONCE (and on resize via ResizeObserver)
  useEffect(() => {
    if (!mounted) return;

    const updateMetrics = () => {
      if (!scrollerRef.current) return;
      const rect = scrollerRef.current.getBoundingClientRect();
      const absoluteTop = rect.top + window.scrollY;
      setMetrics({
        offsetTop: absoluteTop,
        height: scrollerRef.current.offsetHeight,
        headerHeight: headerRef.current?.offsetHeight ?? 0,
      });
    };

    updateMetrics();

    const resizeObserver = new ResizeObserver(() => {
      updateMetrics();
    });

    if (scrollerRef.current) resizeObserver.observe(scrollerRef.current);
    if (headerRef.current) resizeObserver.observe(headerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted || metrics.height === 0) return;

    const handleScroll = () => {
      // Skip if RAF already pending — one frame is enough
      if (rafId.current !== null) return;

      rafId.current = requestAnimationFrame(() => {
        const winH = window.innerHeight;

        // 1. Calculate how far we have scrolled into THIS section
        const rectTop = metrics.offsetTop - window.scrollY;
        const scrollTop = Math.max(0, -rectTop - metrics.headerHeight);
        const maxScroll = Math.max(1, metrics.height - winH - metrics.headerHeight);

        // 2. Calculate progress (0 to 1)
        const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));

        // 3. Map to active index (0 to totalCards - 1)
        const smooth = progress * (totalCards - 1);

        if (Math.abs(smooth - lastProgress.current) > 0.001) {
          setActiveIndex(smooth);
          lastProgress.current = smooth;
        }

        rafId.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [mounted, metrics, totalCards]);

  if (!mounted) {
    return (
      <section className="mx-[0%] text-black bg-white">
        <div
          className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 min-h-screen pt-8 sm:pt-12 md:pt-14"
          aria-labelledby="programs-heading"
        >
          <div className="relative w-full mx-auto">
            <div className="h-screen overflow-hidden">
              <div className="text-center lg:text-center mx-auto relative bg-white pb-2 sm:pb-3 ">
                <p className="text-xs sm:text-sm font-semibold text-[#B30437] tracking-wider mb-2 sm:mb-3" role="text">
                  EXPERIENTIAL EDUCATION
                </p>
                <h2 id="programs-heading" className="leading-none text-black text-2xl sm:text-3xl md:text-[35px] font-bold pb-[17px]">
                  <span className="bg-[#B30437] text-[#ffffff] px-1" style={{ fontWeight: 700 }}>
                    &apos;Global Carrululam&apos;
                  </span>
                  with Top MNC&apos;s
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-[0%] text-black bg-white">
      <div className="max-w-[85rem] mx-auto pt-12 sm:pt-16 md:pt-18" aria-labelledby="programs-heading">
        <div
          ref={scrollerRef}
          className="relative w-full mx-auto"
          style={{ height: `${totalCards * 120}vh` }}
          role="region"
          aria-label="Scroll through learning programs"
        >
          {/* Sticky Header */}
          <div ref={headerRef} className="text-center lg:text-center mx-auto relative bg-white ">
            <p className="text-xs sm:text-sm font-semibold text-[#B30437] tracking-wider mb-2 sm:mb-3" role="text">
              SEVEN MONTHS. A WORLD OF DIFFERENCE
            </p>

            <h2
              id="programs-heading"
              className="leading-none text-black text-2xl sm:text-3xl md:text-[35px] font-bold pb-[17px]"
            >
              AI-Ready{" "}
              <HighlightText className="mx-2 font-bold text-black">
                &apos;Global Curriculum&apos;
              </HighlightText>
              {" "}along with{" "}
              MNC&apos;s
            </h2>


            <h3 className="text-base px-[20px] md:px-[50px] lg:px-[70px] sm:text-lg text-[#5f6368]">
              India&apos;s First <strong>Job-Ready AI-Powered</strong> Global Curriculum with <strong>Paid Internship</strong> in <strong>7 Countries, Business communication training, 1:1 mentorship</strong> — Built for <strong>BCom, BBA, BA, BSc</strong>.
            </h3>
          </div>

          <div className="sticky top-0 h-dvh sm:h-screen overflow-hidden" style={{ willChange: 'transform' }}>
            {cardsData.map((card, index) => {
              const current = Math.floor(activeIndex);
              if (index < current - 1 || index > current + 1) return null;
              return (
                <CardComponent
                  key={card.id}
                  card={card}
                  index={index}
                  activeIndex={activeIndex}
                  totalCards={totalCards}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Handson);
