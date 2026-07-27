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
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        opacity: 1,
        transition: "opacity 225ms ease-out"
      }}
      onClick={onClick}
      aria-hidden="true"
    />
  );
}
