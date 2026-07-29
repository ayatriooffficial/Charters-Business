"use client";
import React from "react";
import type { CurriculumSkillsData } from "@/data/programmes-data/types";

export default function CurriculumSkills({ data }: { data?: CurriculumSkillsData }) {
  if (!data) return null;

  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="flex flex-wrap justify-center items-center gap-2 px-2">
        {data.previewSkills.slice(0, 10).map((skill, index) => (
          <span
            key={index}
            className="px-4 py-[3px] bg-[#E2E8F0] text-gray-800 text-sm font-medium rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
