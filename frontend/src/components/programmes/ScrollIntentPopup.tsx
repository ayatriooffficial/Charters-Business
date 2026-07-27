"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useAuth } from "@/context/AuthContext";
import ModalBackdrop from "@/components/shared/ModalBackdrop";

const ChartersInterviewAi = dynamic(
  () => import("../home/Chartersinterview_ai"),
  { ssr: false }
);

export default function ScrollIntentPopup() {
  const { user } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const hasReachedBottom = useRef(false);
  const lastScrollY = useRef(0);
  const triggerPointY = useRef(0);

  useEffect(() => {
    // If the user is already logged in, or we already showed it this session, do nothing.
    // Also ensuring we run this in the browser environment.
    if (typeof window === "undefined" || user || sessionStorage.getItem("scrollPopupShown")) return;

    // Small delay before tracking to let page layout stabilize
    const timeout = setTimeout(() => {
      lastScrollY.current = window.scrollY;
    }, 500);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll depth percentage
      const scrollPercentage = ((currentScrollY + windowHeight) / documentHeight) * 100;

      // If we reach > 90% depth, mark as reached bottom and record the Y position
      if (scrollPercentage > 90 && !hasReachedBottom.current) {
        hasReachedBottom.current = true;
        triggerPointY.current = currentScrollY;
      }

      // If we have reached the bottom, and are now scrolling UP by at least 50px
      if (hasReachedBottom.current && currentScrollY < lastScrollY.current) {
         if (triggerPointY.current - currentScrollY > 50) {
            setShowPopup(true);
            sessionStorage.setItem("scrollPopupShown", "true");
            document.body.style.overflow = "hidden";
            window.removeEventListener("scroll", handleScroll);
         }
      } else {
         // update the trigger point if they keep scrolling down
         if (hasReachedBottom.current && currentScrollY > lastScrollY.current) {
            triggerPointY.current = currentScrollY;
         }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [user]);

  const handleClose = () => {
    setShowPopup(false);
    document.body.style.overflow = "";
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-[rgba(0,0,0,0.2)] overflow-y-auto">
      <ModalBackdrop onClick={handleClose} />
      <div className="w-[90%] lg:w-[70%] min-[1400px]:w-[80%] max-w-[1200px] h-[80vh] max-h-[900px] min-h-[500px] relative z-[99999] my-auto">
        <button
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute cursor-pointer top-3 right-3 z-50 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all border border-gray-100"
        >
          <Image src="/Charters-icon/Cancel.svg" alt="Close" width={24} height={24} className="opacity-70 hover:opacity-100 transition-opacity" />
        </button>

        <div className="w-full h-full overflow-hidden rounded-xl shadow-2xl bg-white">
          <ChartersInterviewAi />
        </div>
      </div>
    </div>
  );
}
