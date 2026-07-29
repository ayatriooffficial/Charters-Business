"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import BannerBlock from "./BannerBlock";
import { useAuth } from "@/context/AuthContext";
import dynamic from "next/dynamic";
import { getProgrammeBySlug, ProgramKey } from "@/data/programmes-data";

const GlobalLoginModal = dynamic(
  () => import("@/components/shared/GlobalLoginModal"),
  { ssr: false, loading: () => <div /> }
);

interface LayoutBannerProps {
  type: "placement" | "brochure" | "advisor";
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

  // Handle auto-download and auto-call after login
  useEffect(() => {
    if (user) {
      if (sessionStorage.getItem("pendingBrochureDownload") === "true") {
        sessionStorage.removeItem("pendingBrochureDownload");
        console.log("[LayoutBanner] User authenticated. Triggering brochure download.");
        triggerBrochureDownload();
        setShowLoginModal(false);
        document.body.style.overflow = "";
      }

      const pendingCall = sessionStorage.getItem("pendingAdvisorCall");
      if (pendingCall) {
        sessionStorage.removeItem("pendingAdvisorCall");
        console.log("[LayoutBanner] User authenticated. Triggering advisor call.");
        window.location.href = `tel:${pendingCall}`;
        setShowLoginModal(false);
        document.body.style.overflow = "";
      }
    }
  }, [user]);

  let programKey: ProgramKey | null = null;
  if (isCba) programKey = "certified-business-accountant";
  else if (isDgm) programKey = "digital-growth-&-marketing";
  else if (isTbm) programKey = "technology-&-business-management";

  const programmeData = programKey ? getProgrammeBySlug(programKey) : null;
  const bannerConfig = programmeData?.layoutBanner;

  const fallbackBrochure = {
    imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784656491/charters-placement-report_yj1uj9.avif",
    imageAlt: "Charters Union Career Report 2025",
    programName: "Charters' Union Curriculum",
    subtext: "AI-First Curriculums • 4-6 Month Paid Internships • Global Placements",
    buttonText: "Download Brochure",
    downloadUrl: "",
    downloadFilename: "charters-union-general-brochure.avif"
  };

  const fallbackPlacement = {
    imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784656491/charters-placement-report_yj1uj9.avif",
    imageAlt: "Charters Union Career Report 2025",
    heading: {
      highlight1: " 97%'",
      text1: " of students secured full time job offer by their ",
      highlight2: "4",
      text2: "th month of Internship, with \nthe highest CTC being ",
      highlight3: " ₹12",
      text3: "lakhs/month."
    },
    subtext: "100% Internship Rate • Average Salary Jump 2.35x • Proven track record verified by MarketQuation.",
    buttonText: "Placement Report",
    downloadUrl: "",
    downloadFilename: "charters-placement-report-2025.jpg"
  };

  const fallbackAdvisor = {
    heading: "Want to learn more about ventures and collaborations?",
    buttonText: "Talk to an advisor",
    phoneNumber: "+919836465083"
  };

  const currentBanner = type === "placement"
    ? (bannerConfig?.placement || fallbackPlacement)
    : type === "advisor"
      ? (bannerConfig?.advisor || fallbackAdvisor)
      : (bannerConfig?.brochure || fallbackBrochure);

  const triggerDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const triggerBrochureDownload = () => {
    const banner = bannerConfig?.brochure || fallbackBrochure;
    triggerDownload(banner.downloadUrl, banner.downloadFilename);
  };

  const handleDownloadPlacementReport = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("[LayoutBanner] Downloading placement report");
    const banner = bannerConfig?.placement || fallbackPlacement;
    triggerDownload(banner.downloadUrl, banner.downloadFilename);
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

  const handleCallAdvisor = (e: React.MouseEvent) => {
    e.stopPropagation();
    const phone = "phoneNumber" in currentBanner ? currentBanner.phoneNumber : "";
    if (user) {
      console.log("[LayoutBanner] Logged in user calling advisor");
      window.location.href = `tel:${phone}`;
    } else {
      console.log("[LayoutBanner] Anonymous user click call. Prompting login.");
      sessionStorage.setItem("pendingAdvisorCall", phone as string);
      setShowLoginModal(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="max-w-[85rem] mx-auto bg-white p-2 sm:p-4">
          <BannerBlock
            imageSrc={type !== "advisor" && "imageSrc" in currentBanner ? currentBanner.imageSrc : undefined}
            imageAlt={type !== "advisor" && "imageAlt" in currentBanner ? currentBanner.imageAlt : ""}
            title={
              type === "placement" && "heading" in currentBanner && typeof currentBanner.heading === "object" ? (
                <>
                  <strong>{currentBanner.heading.highlight1}</strong>
                  {currentBanner.heading.text1}
                  <strong>{currentBanner.heading.highlight2}</strong>
                  {currentBanner.heading.text2.split('\n').map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  <strong>{currentBanner.heading.highlight3}</strong>
                  {currentBanner.heading.text3}
                </>
              ) : type === "advisor" && "heading" in currentBanner && typeof currentBanner.heading === "string" ? (
                currentBanner.heading
              ) : "programName" in currentBanner ? (
                `Download ${currentBanner.programName} Brochure`
              ) : null
            }
            subtitle={
              "subtext" in currentBanner ? currentBanner.subtext : undefined
            }
            actionButton={
              type === "placement" ? (
                <button
                  onClick={handleDownloadPlacementReport}
                  className="bg-[#222222] cursor-pointer text-sm text-white px-8 py-2.5 font-semibold flex items-center gap-2 hover:bg-[#202124] transition-colors"
                >
                  <span>{currentBanner.buttonText}</span>
                  <img
                    src="/Charters-icon/download.svg"
                    alt="Download Icon"
                    className="w-4 h-4 object-contain"
                  />
                </button>
              ) : type === "advisor" && "phoneNumber" in currentBanner ? (
                <button
                  onClick={handleCallAdvisor}
                  className="bg-[#222222] cursor-pointer text-sm text-white px-8 py-2.5 font-semibold flex items-center gap-2 hover:bg-[#202124] transition-colors"
                >
                  <span>{currentBanner.buttonText}</span>
                </button>
              ) : (
                <button
                  onClick={handleDownloadBrochure}
                  className="bg-[#222222] cursor-pointer text-sm text-white px-8 py-2.5 font-semibold flex items-center gap-2 hover:bg-[#202124] transition-colors"
                >
                  <span>{currentBanner.buttonText}</span>
                  <img
                    src="/Charters-icon/download.svg"
                    alt="Download Icon"
                    className="w-4 h-4 object-contain"
                  />
                </button>
              )
            }
          />
        </div>
      </div>

      {/* Login Modal for Brochure Download */}
      <GlobalLoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
}
