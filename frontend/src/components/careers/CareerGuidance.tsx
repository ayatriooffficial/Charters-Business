"use client";
import { useState } from "react";
import Image from "next/image";

const STAR_ICON = "https://files.mastersunion.link/resources/svg/star.svg";
const SMALL_STAR_ICON =
  "https://files.mastersunion.link/resources/svg/smallGradientStar.svg";

const ROADMAP_DATA = [
  {
    id: 1,
    term: "Term 1",
    items: [
      "Psychometric Assessment",
      "1-1 Mentor Allocation",
      "Resume Formatting for Profile Building",
      "LinkedIn Profiling",
      "Professional Photography & Class Photos",
      "Institution of PlaCom",
      "Know all Domains",
      "Case and Business Plan Competition Workshop",
      "Placement Policies",
    ],
    image: "https://files.mastersunion.link/media/img/career-roadmap1.webp",
  },
  {
    id: 2,
    term: "Term 2",
    items: [
      "Finalisation of Company Lists",
      "Company Outreach Plan",
      "Shortlisting Your Top 3 Domains",
      "Presentation Skills Workshop",
      "Industry Engagement Sessions",
      "Personal Branding Workshop",
      "Storytelling Workshop",
      "Career Practicums",
      "Corporate Competitions",
      "Self Assessment Exercises (Tool Based like MBT, Big 5)",
    ],
    image: "https://files.mastersunion.link/media/img/career-roadmap2.webp",
  },
  {
    id: 3,
    term: "Term 3",
    items: [
      "Resume Review #1",
      "Resume Formatting for Profile Building",
      "Behavioural Mocks",
      "Consulting Case Training",
      "Domain-Specific Seminars and Workshops",
      "Team Work & Conflict Management Workshop",
      "Industry/Functional/Role Based Workshops",
    ],
    image: "https://files.mastersunion.link/media/img/career-roadmap3.webp",
  },
  {
    id: 4,
    term: "Term 4",
    items: [
      "Resume Review #2",
      "Stress Management Sessions",
      "Domain-Specific Seminars",
      "Corporate Competitions",
      "Industry/Functional/Role Based Workshops",
      "Mock Interviews",
      "Last Mile Preps",
    ],
    image: "https://files.mastersunion.link/media/img/career-roadmap4.webp",
  },
  {
    id: 5,
    term: "Term 5",
    items: [
      "Business Etiquette & Grooming",
      "Mock Interviews",
      "Last Mile Preps",
      "One-on-one With the Director of Career Preparation",
    ],
    image: "https://files.mastersunion.link/media/img/career-roadmap5.webp",
  },
  {
    id: 6,
    term: "Term 6",
    items: [
      "Peer Best Practices & Experience Sharing",
      "Salary Negotiation Workshops",
      "Mock Interviews",
      "Last Mile Preps",
    ],
    image: "https://files.mastersunion.link/media/img/career-roadmap6.webp",
  },
  {
    id: 7,
    term: "Term 7",
    items: ["Mock Interviews", "Placement Drives", "Last Mile Preps"],
    image: "https://files.mastersunion.link/media/img/career-roadmap7.webp",
  },
  {
    id: 8,
    term: "Term 8",
    items: ["Placement Drives", "Last Mile Preps"],
    image: "https://files.mastersunion.link/media/img/career-roadmap8.webp",
  },
];

export default function CareerGuidance() {
  const [activeTerm, setActiveTerm] = useState(1);

  const activeData = ROADMAP_DATA.find((item) => item.id === activeTerm);

  return (
    <section
      id="guidance"
      aria-label="Guidance"
      className="w-full bg-white py-16"
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Image src={STAR_ICON} alt="star" width={18} height={18} />
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-gray-400">
              ANNUAL ROADMAP
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-3">
            Benefit From a{" "}
            <span style={{ color: "#B30437" }}>Career Pathway</span>
          </h2>
          <p className="text-gray-700 max-w-3xl">
            Leverage the opportunity to engage in workshops, training, panel
            discussions, counselling sessions, and personalised career
            progression plans.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {ROADMAP_DATA.map((term) => (
              <button
                key={term.id}
                onClick={() => setActiveTerm(term.id)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTerm === term.id
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {term.term}
              </button>
            ))}
          </div>
        </div>

        {/* Content  */}
        {activeData && (
          <div
            key={activeData.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn"
          >
            {/* List */}
            <div className="bg-gray-100 rounded-xl p-8 h-[225px] overflow-y-auto">
              <ul className="space-y-4">
                {activeData.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-900"
                  >
                    <Image
                      src={SMALL_STAR_ICON}
                      alt="small star"
                      width={16}
                      height={16}
                      className="flex-shrink-0 mt-1"
                    />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image  */}
            <div className="relative w-full h-[225px] overflow-hidden bg-gray-100">
              <Image
                src={activeData.image}
                alt={`${activeData.term} roadmap`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}
