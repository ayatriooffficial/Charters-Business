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

        {/* Team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-l border-t border-gray-300">
          {ADVISORY_TEAM.map((member, index) => (
            <article
              key={index}
              className="flex-shrink-0 w-full hover:bg-[#F4F2EE] border-r border-b border-gray-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#F4F2EE]">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-[16px] font-semibold text-black">
                  {member.title}
                </h2>

                <p className="text-[#5f6368] text-[12px] font-semibold mt-1">
                  by {member.name}
                </p>

                <div className="h-px bg-gray-400 my-3" />

                <p className="text-sm text-[#5f6368] mb-4">
                  {member.experience}
                </p>

                <p className="text-[14px] font-semibold mb-2">
                  Research Publications
                </p>

                <p className="text-[12px] font-semibold-gray-700 mb-4">
                  {member.teaching}
                </p>

                {/* Logo */}
                <div className="mt-2 h-10 flex items-center justify-start">
                  {member.logoSrc ? (
                    <Image
                      src={member.logoSrc}
                      alt={member.name}
                      width={100}
                      height={30}
                      className="h-8 w-auto max-w-full object-contain bg-white rounded-md px-2 py-1"
                    />
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
