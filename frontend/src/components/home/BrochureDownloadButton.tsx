"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useAuth } from "@/context/AuthContext";
import { Programme } from "@/data/programmes-data/types";

const GlobalLoginModal = dynamic(
  () => import("@/components/shared/GlobalLoginModal"),
  { ssr: false, loading: () => <div /> }
);

interface BrochureDownloadButtonProps {
  programme: Programme;
}

export default function BrochureDownloadButton({ programme }: BrochureDownloadButtonProps) {
  const { user } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

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
    const brochure = programme.layoutBanner?.brochure;
    if (brochure?.downloadUrl) {
      triggerDownload(brochure.downloadUrl, brochure.downloadFilename);
    } else {
      // Fallback
      triggerDownload("", `${programme.slug}-brochure.pdf`);
    }
  };

  useEffect(() => {
    if (user) {
      const pendingKey = `pendingBrochureDownload_${programme.slug}`;
      if (sessionStorage.getItem(pendingKey) === "true") {
        sessionStorage.removeItem(pendingKey);
        console.log(`[BrochureDownloadButton] User authenticated. Triggering brochure download for ${programme.slug}.`);
        triggerBrochureDownload();
        setShowLoginModal(false);
        document.body.style.overflow = "";
      }
    }
  }, [user, programme.slug]);

  const handleDownloadBrochure = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      triggerBrochureDownload();
    } else {
      sessionStorage.setItem(`pendingBrochureDownload_${programme.slug}`, "true");
      setShowLoginModal(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <button
        onClick={handleDownloadBrochure}
        className="w-full md:w-auto cursor-pointer bg-[#222222] hover:bg-[#000000] text-white py-2.5 px-10 md:px-10 flex items-center justify-center gap-2 font-semibold text-sm md:text-xs transition-all duration-300 whitespace-nowrap"
        aria-label={`Download ${programme.card.title} brochure`}
        type="button"
      >
        <span>Brochure</span>
        <img src="/Charters-icon/download.svg"
          alt="Format icon"
          width={15}
          height={15}
          className=" w-[14px] h-[14px] object-contain"
        />
      </button>

      <GlobalLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
}
