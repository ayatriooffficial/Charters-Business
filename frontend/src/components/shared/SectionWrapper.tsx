// components/shared/SectionWrapper.tsx
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    borderBottom?: boolean;
    fullWidthBg?: boolean;
    className?: string;
}

export default function SectionWrapper({
    children,
    borderBottom = true,
    fullWidthBg = false,
    className = "",
}: SectionWrapperProps) {
    return (
        <div
            className={`section-corners relative ${borderBottom ? "border-b border-gray-200" : ""} ${className}`}
        >
            <span className="corner" />
            {fullWidthBg ? (
                <div className="full-bleed">{children}</div>
            ) : (
                children
            )}
        </div>
    );
}