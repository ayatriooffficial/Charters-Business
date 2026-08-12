"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { createPortal } from "react-dom";
import ModalBackdrop from "@/components/shared/ModalBackdrop";

const ChartersInterviewAi = dynamic(
  () => import("@/components/home/Chartersinterview_ai"),
  { ssr: false, loading: () => <div /> }
);

interface GlobalLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalLoginModal({ isOpen, onClose }: GlobalLoginModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    onClose();
    document.body.style.overflow = "";
  };

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-[rgba(0,0,0,0.2)] overflow-y-auto">
      <ModalBackdrop onClick={handleClose} />
      <div className="w-[90%] md:w-[80%] max-w-[1200px] h-auto max-h-[90vh] relative z-[99999] my-auto">
        <button
          onClick={handleClose}
          aria-label="Close login modal"
          className="absolute cursor-pointer p-2 top-3 right-3 z-50 bg-[#efefef] hover:bg-[#cccccc] rounded-full w-8 h-8 flex items-center justify-center transition-all border border-gray-100"
        >
          <Image src="/Charters-icon/Cancel.svg" alt="Close" width={24} height={24} className="opacity-70 hover:opacity-100 transition-opacity" />
        </button>
        <div className="w-full h-full overflow-hidden rounded-xl shadow-2xl bg-white">
          <ChartersInterviewAi />
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
