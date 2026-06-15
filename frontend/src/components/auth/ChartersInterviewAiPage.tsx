'use client';

import dynamic from "next/dynamic";

const ChartersInterviewAi = dynamic(() => import("../home/Chartersinterview_ai"), { ssr: false });

export default function ChartersInterviewAiPage() {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <ChartersInterviewAi />
    </div>
  );
}
