"use client";
import { useEffect, useState, useCallback, ReactNode } from "react";
import { createPortal } from "react-dom";
import ModalBackdrop from "./ModalBackdrop";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export default function Modal({ isOpen, onClose, children, className = "" }: ModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when modal is open by intercepting events, so the scrollbar remains visible
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling via mouse wheel or trackpad
      const preventScroll = (e: Event) => e.preventDefault();
      
      // Prevent scrolling via keyboard
      const preventKeyScroll = (e: KeyboardEvent) => {
        const keys = ['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown'];
        if (keys.includes(e.code)) {
          e.preventDefault();
        }
      };

      // Add listeners to block scrolling
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', preventKeyScroll, { passive: false });

      return () => {
        // Clean up listeners when modal closes
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
        window.removeEventListener('keydown', preventKeyScroll);
      };
    }
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !isMounted) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      style={{ opacity: 1, transition: "opacity 225ms ease-out" }}
    >
      {/* Foggy white backdrop overlay — matches Coursera */}
      <ModalBackdrop onClick={onClose} />
      {/* Modal card */}
      <div 
        className={`relative z-[99999] bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] flex flex-col overflow-hidden ${className}`}
        style={{ opacity: 1, transition: "opacity 225ms ease-out" }}
      >
         {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

