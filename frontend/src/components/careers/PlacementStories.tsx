"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";


const STORIES_DATA = [
  {
    name: "Shreya Kulkarni",
    role: "Product Manager II, Microsoft",
    image: "https://files.mastersunion.link/media/img/pl-shreya.png",
    linkedin: "https://www.linkedin.com/in/shreyaakulkarni/",
    testimonial:
      "Mentors like Aditya Turalapati (PM2, Microsoft) and Sumit Kumar provided vital guidance, while the PM curriculum, live projects, and global placement approach thoroughly prepared me.",
  },
  {
    name: "Deep Bhatia",
    role: "Investment Banking Associate, Axis Capital",
    image: "https://files.mastersunion.link/media/img/pl-deep.png",
    linkedin: "https://www.linkedin.com/in/deep-bhatia/",
    testimonial:
      "The support at Masters' Union was incredible—faculty, the career prep team made the placement journey seamless. Mock interviews honed my technical skills for Investment Banking roles.",
  },
  {
    name: "CA Harsh Nahar",
    role: "Senior Business Analyst, Kearney",
    image: "https://files.mastersunion.link/media/img/pl-harsh.png",
    linkedin: "https://www.linkedin.com/in/harsh-nahar/",
    testimonial:
      "From being elected Vice President to organizing Case Union, India's largest case competition conclave, the experience was filled with rewarding challenges.",
  },
  {
    name: "Shruti Kumari",
    role: "Manager - Brand Marketing, Flipkart",
    image: "https://files.mastersunion.link/media/img/pl-shruti.png",
    linkedin: "https://www.linkedin.com/in/shruti-kumaari/",
    testimonial:
      "Masters' Union provided me with unparalleled exposure to the e-commerce landscape, which significantly shaped my understanding of the sector.",
  },
  {
    name: "Kakaraparthi Sri Badarinadh",
    role: "Senior Specialist- Strategic Accounts, Talabat (Dubai)",
    image: "https://files.mastersunion.link/media/img/pl-kakara.png",
    linkedin: "https://www.linkedin.com/in/sri-badarinadh/",
    testimonial:
      "Masters' Union's innovative case-based teaching was key to my interview success, helping me approach real-world challenges with a structured and analytical mindset.",
  },
  {
    name: "Tilottama Ghosh",
    role: "Associate, Kotak Investment Bank",
    image: "https://files.mastersunion.link/media/img/pl-tilottama.png",
    linkedin: "https://www.linkedin.com/in/tilottamaghosh/",
    testimonial:
      "The program's focus on financial modelling and investment strategies helped me build a strong foundation, while industry mentorship enhanced my ability to solve complex challenges.",
  },
];

const LINKEDIN_ICON = "https://files.mastersunion.link/resources/svg/linkedin.svg";
const ARROW_ICON = "https://files.mastersunion.link/resources/svg/gradient-right-arrow.svg";


export default function PlacementStories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 300);
    }
  };

  return (
    <section id="stories" aria-label="Stories" className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header*/}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Placements <span style={{ color: "#B30437" }}>Stories</span>
          </h2>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition ${
                canScrollLeft
                  ? "border-gray-300 hover:border-gray-400"
                  : "border-gray-200 opacity-40 cursor-not-allowed"
              }`}
              aria-label="Previous"
            >
              <Image
                src={ARROW_ICON}
                alt="Previous"
                width={20}
                height={20}
                className="rotate-180"
              />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition ${
                canScrollRight
                  ? "border-gray-300 hover:border-gray-400"
                  : "border-gray-200 opacity-40 cursor-not-allowed"
              }`}
              aria-label="Next"
            >
              <Image src={ARROW_ICON} alt="Next" width={20} height={20} />
            </button>
          </div>
        </div>

        {/*Cards */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollButtons}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {STORIES_DATA.map((story, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[340px] snap-start rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative w-full h-[280px] bg-gray-100">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                  sizes="340px"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
                  <Link
                    href={story.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 hover:opacity-75 transition"
                  >
                    <Image src={LINKEDIN_ICON} alt="LinkedIn" width={20} height={20} />
                  </Link>
                </div>

                <p className="text-sm font-medium mb-4" style={{ color: "#B30437" }}>
                  {story.role}
                </p>

                <hr className="border-gray-200 mb-4" />

                <p className="text-sm text-gray-600 leading-relaxed">
                  {story.testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
