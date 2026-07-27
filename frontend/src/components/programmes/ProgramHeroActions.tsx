"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useAuth } from "@/context/AuthContext";
import ModalBackdrop from "@/components/shared/ModalBackdrop";

const ChartersInterviewAi = dynamic(
  () => import("../home/Chartersinterview_ai"),
  {
    ssr: false,
  }
);

interface ProgramHeroActionsProps {
  actions?: {
    primaryText: string;
    secondaryText: string;
  };
}

const ProgramHeroActions = ({ actions }: ProgramHeroActionsProps) => {
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
          {actions?.secondaryText}
        </button>

        <button
          onClick={handleAction}
          className="flex items-center justify-center gap-2 bg-[#222222] hover:bg-[#000000] text-white px-4 sm:px-6 py-2 text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex-shrink-0"
        >
          {actions?.primaryText}
        </button>
      </div>

      {showInterviewAI && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-[rgba(0,0,0,0.2)] overflow-y-auto">
          <ModalBackdrop onClick={handleClose} />
          <div className="w-[90%] max-w-[1200px] h-[80vh] max-h-[780px] min-h-[500px] relative z-[99999] my-auto">
            <button
              onClick={handleClose}
              aria-label="Close interview AI"
              className="absolute cursor-pointer top-3 right-3 z-50 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all border border-gray-100"
            >
              <Image src="/Charters-icon/Cancel.svg" alt="Close" width={24} height={24} className="opacity-70 hover:opacity-100 transition-opacity" />
            </button>

            <div className="w-full h-full overflow-hidden rounded-xl shadow-2xl bg-white">
              <ChartersInterviewAi />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProgramHeroActions;