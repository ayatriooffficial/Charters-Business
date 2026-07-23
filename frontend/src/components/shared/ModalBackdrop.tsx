"use client";

interface ModalBackdropProps {
  onClick?: () => void;
  className?: string;
}

export default function ModalBackdrop({ onClick, className = "" }: ModalBackdropProps) {
  return (
    <div 
      className={`fixed inset-0 z-[99998] ${className}`}
      style={{ 
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        opacity: 1,
        transition: "opacity 225ms ease-out"
      }}
      onClick={onClick}
      aria-hidden="true"
    />
  );
}
