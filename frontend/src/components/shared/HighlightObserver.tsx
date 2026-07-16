"use client";

import { useEffect, useRef } from "react";

interface HighlightTextProps {
    children: React.ReactNode;
    className?: string;
}

export default function HighlightText({
    children,
    className = "",
}: HighlightTextProps) {
    const wrapRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                el.classList.toggle("hl-active", entry.isIntersecting);
            },
            { threshold: 0.6 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <span ref={wrapRef} className={`hl-wrap ${className}`}>
            <span aria-hidden="true" className="hl-dot hl-dot-tl" />
            <span aria-hidden="true" className="hl-bg" />
            <span className="hl-text">{children}</span>
            <span aria-hidden="true" className="hl-dot hl-dot-br" />
        </span>
    );
}
