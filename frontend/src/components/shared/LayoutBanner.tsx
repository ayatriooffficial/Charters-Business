"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import dynamic from "next/dynamic";

const ChartersInterviewAi = dynamic(
  () => import("../home/Chartersinterview_ai"),
  { ssr: false }
);

interface LayoutBannerProps {
  type: "placement" | "brochure";
}

export default function LayoutBanner({ type }: LayoutBannerProps) {
  const pathname = usePathname();
  const { user } = useAuth();

  const [showLoginModal, setShowLoginModal] = useState(false);

  // Normalize pathname to check which course we are on (CBA, DGM, TBM)
  const normalizedPath = pathname ? decodeURIComponent(pathname) : "";
  const cleanPath = normalizedPath.toLowerCase().replace(/\/$/, "") || "/";

  const isCba = cleanPath.includes("certified-business-accountant");
  const isDgm = cleanPath.includes("digital-growth");
  const isTbm = cleanPath.includes("technology");

  // Handle auto-download after login
  useEffect(() => {
    if (user && sessionStorage.getItem("pendingBrochureDownload") === "true") {
      sessionStorage.removeItem("pendingBrochureDownload");
      console.log("[LayoutBanner] User authenticated. Triggering brochure download.");
      triggerBrochureDownload();
      setShowLoginModal(false);
      document.body.style.overflow = "";
    }
  }, [user]);

  const triggerDownload = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPlacementReport = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("[LayoutBanner] Downloading placement report");
    triggerDownload("/home/Capdsdsfture.JPG", "charters-placement-report-2025.jpg");
  };

  const getBrochureDetails = () => {
    if (isCba) {
      return {
        url: "/home/ima11.avif",
        filename: "charters-cba-brochure.avif",
        programName: "Certified Business Accountant (CBA™)"
      };
    }
    if (isDgm) {
      return {
        url: "/home/ima11.avif",
        filename: "charters-dgm-brochure.avif",
        programName: "Digital Growth & Marketing (DGM™)"
      };
    }
    if (isTbm) {
      return {
        url: "/home/ima11.avif",
        filename: "charters-tbm-brochure.avif",
        programName: "Technology & Business Management (TBM™)"
      };
    }
    return {
      url: "/home/ima11.avif",
      filename: "charters-union-general-brochure.avif",
      programName: "Charters' Union Curriculum"
    };
  };

  const triggerBrochureDownload = () => {
    const { url, filename } = getBrochureDetails();
    triggerDownload(url, filename);
  };

  const handleDownloadBrochure = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (user) {
      console.log("[LayoutBanner] Logged in user downloading brochure");
      triggerBrochureDownload();
    } else {
      console.log("[LayoutBanner] Anonymous user click brochure. Prompting login.");
      sessionStorage.setItem("pendingBrochureDownload", "true");
      setShowLoginModal(true);
      document.body.style.overflow = "hidden";
    }
  };

  const { programName } = getBrochureDetails();

  return (
    <>
      <div className="w-full">
        <div className="max-w-[85rem] mx-auto bg-white p-2 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-6 ">

          {/* Left/Middle Content */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 flex-grow text-center md:text-left min-w-0">
            {/* Logo */}
            <div className="w-14 sm:w-14 h-20 relative shrink-0">
              <Image
                src="/career-report.avif"
                alt="Charters Union Career Report 2025"
                fill
                sizes="70px"
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Texts */}
            <div className="flex-grow min-w-0">
              {type === "placement" ? (
                <>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug truncate">
                    <strong> 97%&apos;</strong> of students secured full time job offer by their <strong>4</strong>th month of Internship, with <br></br>the highest CTC being <strong> ₹12</strong>lakhs/month.
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                    100% Internship Rate • Average Salary Jump 2.35x • Proven track record verified by MarketQuation.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug truncate">
                    Download {programName} Brochure
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                    AI-First Curriculums • 4-6 Month Paid Internships • Global Placements
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="shrink-0 flex items-center justify-center w-full md:w-auto">
            {type === "placement" ? (
              <button
                onClick={handleDownloadPlacementReport}
                className="bg-[#222222] cursor-pointer text-sm text-white px-8 py-2.5 font-semibold flex items-center gap-2 hover:bg-[#202124] transition-colors"
              >
                <span>Placement Report</span>
                <img
                  src="/Charters-icon/download.svg"
                  alt="Download Icon"
                  className="w-4 h-4 object-contain"
                />
              </button>
            ) : (
              <button
                onClick={handleDownloadBrochure}
                className="bg-[#222222] cursor-pointer text-sm text-white px-8 py-2.5 font-semibold flex items-center gap-2 hover:bg-[#202124] transition-colors"
              >
                <span>Download Brochure</span>
                <img
                  src="/Charters-icon/download.svg"
                  alt="Download Icon"
                  className="w-4 h-4 object-contain"
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Login Modal for Brochure Download */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-[#202124]/40 backdrop-blur-sm">
          <div className="w-[90%] md:w-[65%] h-[85vh] md:h-[90%] relative bg-white rounded-xl shadow-2xl overflow-hidden animate-scale-up">
            <button
              onClick={() => {
                setShowLoginModal(false);
                document.body.style.overflow = "";
              }}
              aria-label="Close login modal"
              className="absolute top-3 right-3 z-50 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-gray-600 hover:text-black transition-all border border-gray-100 cursor-pointer"
            >
              ✕
            </button>
            <div className="w-full h-full">
              <ChartersInterviewAi />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
