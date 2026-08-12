"use client";

import React from "react";

interface DownloadReportButtonProps {
  label: string;
  filename?: string;
  className?: string;
}

export default function DownloadReportButton({
  label,
  filename = "charters-careers-placement-report.avif",
  className = "inline-flex items-center bg-black px-6 sm:px-8 py-3 sm:py-3 text-xs sm:text-sm font-semibold text-white hover:border-gray-400 transition-colors cursor-pointer",
}: DownloadReportButtonProps) {
  const handleDownload = async () => {
    try {
      const url = "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784611644/charters-placement-report-2026_gyuu4p.avif";
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
    }
  };

  return (
    <button onClick={handleDownload} className={className} type="button">
      {label}
    </button>
  );
}
