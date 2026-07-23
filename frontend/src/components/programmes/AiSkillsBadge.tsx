"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/shared/Modal";

interface AiSkillsProps {
  data: {
    title: string;
    description: string;
    skills: string[];
  };
}

export default function AiSkillsBadge({ data }: AiSkillsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 px-2 py-[1px] bg-red-50 hover:bg-red-100 text-[#B30437] rounded-s transition-colors group"
      >
        <Image src="/dot-icon.svg" alt="AI Icon" width={16} height={16} />
        <span className="text-[12px] sm:text-[12px] font-semibold group-hover:underline underline-offset-4 decoration-2">New AI skills</span>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-800">{data.title}</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <p className="text-gray-600 mb-6">{data.description}</p>
          <ul className="space-y-3">
            {data.skills.map((skill, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                <span className="text-gray-800">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </>
  );
}
