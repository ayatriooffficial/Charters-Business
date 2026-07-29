"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useAuth } from "@/context/AuthContext";
import ModalBackdrop from "@/components/shared/ModalBackdrop";

const GlobalLoginModal = dynamic(
  () => import("@/components/shared/GlobalLoginModal"),
  { ssr: false, loading: () => <div /> }
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
    <GlobalLoginModal 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
  );
}
