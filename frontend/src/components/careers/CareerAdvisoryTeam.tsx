import Image from "next/image";

import { facultyMembers } from "@/data/faculty";

const ADVISORY_TEAM = [
  ...facultyMembers.slice(0, 5),
  ...facultyMembers.filter(m => m.category === 'finance').slice(0, 3)
];

export default function CareerAdvisoryTeam() {
  return (
    <section id="advisory" aria-label="Career Advisory Team" className="w-full bg-white pb-6 sm:pb-8 md:pb-10 pt-3 sm:pt-4 md:pt-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-4 sm:mb-6 md:mb-8 flex-col text-center px-4 sm:px-5">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-[#80868b] mb-1 sm:mb-2">
            PROFESSIONAL GUIDANCE
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-gray-900">
            Our Career Advisory Team
          </h2>
        </div>

        {/* Team - Revert to 5 cards: xl:grid-cols-5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-gray-300">
          {/* Revert to 5 cards: {ADVISORY_TEAM.map((member, index) => ( */}
          {ADVISORY_TEAM.slice(0, 4).map((member, index) => (
            <article
              key={index}
              className="flex-shrink-0 w-full hover:bg-[#F6F4F2] border-r border-b border-gray-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[651/905] overflow-hidden bg-[#F6F4F2]">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
