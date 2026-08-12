"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useAuth } from "@/context/AuthContext";
import ModalBackdrop from "@/components/shared/ModalBackdrop";

const GlobalLoginModal = dynamic(
  () => import("@/components/shared/GlobalLoginModal"),
  { ssr: false, loading: () => <div /> }
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
          className="flex items-center justify-center gap-2 bg-white border border-black hover:bg-[#F6F4F2] text-black px-4 sm:px-6 py-2 text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex-shrink-0"
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

      <GlobalLoginModal
        isOpen={showInterviewAI}
        onClose={() => setShowInterviewAI(false)}
      />
    </>
  );
};

export default ProgramHeroActions;