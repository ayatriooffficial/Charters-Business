"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useAuth } from "@/context/AuthContext";

const ChartersInterviewAi = dynamic(
  () => import("../home/Chartersinterview_ai"),
  {
    ssr: false,
  }
);

const ProgramHeroActions = () => {
  const { user, navigateToRemoteDashboard } = useAuth();

  const [showInterviewAI, setShowInterviewAI] = useState(false);

  const handleAction = () => {
    if (user) {
      navigateToRemoteDashboard("/dashboard");
      return;
    }

    setShowInterviewAI(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setShowInterviewAI(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
        <button
          onClick={handleAction}
          className="flex items-center justify-center gap-2 bg-white border border-black hover:bg-[#F4F2EE] text-black px-4 sm:px-6 py-2 text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex-shrink-0"
        >
          Download Brochure
        </button>

        <button
          onClick={handleAction}
          className="flex items-center justify-center gap-2 bg-[#222222] hover:bg-[#000000] text-white px-4 sm:px-6 py-2 text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex-shrink-0"
        >
          Apply Now
        </button>
      </div>

      {showInterviewAI && (
        <div className="fixed inset-0 flex items-center mt-14 justify-center z-[9999] bg-[#202124]/20">
          <div className="w-[80%] h-[90%] relative">
            <button
              onClick={handleClose}
              aria-label="Close interview AI"
              className="absolute -top-3 -right-3 z-40 bg-white rounded-full w-7 h-7 flex items-center justify-center shadow-md text-gray-600 hover:text-red-500 transition-colors"
            >
              ✕
            </button>

            <div className="w-full h-full overflow-hidden rounded-xl shadow-2xl">
              <ChartersInterviewAi />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProgramHeroActions;