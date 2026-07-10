"use client";

import { useEffect, useRef } from "react";

interface HighlightTextProps {
    children: React.ReactNode;
    className?: string;
    color?: string;
    activeColor?: string;
    bgColor?: string;
    threshold?: number;
}

export default function HighlightText({
    children,
    className = "",
    color = "black",
    activeColor = "#000000",
    bgColor = "#56BAB3",
    threshold = 0.6,
}: HighlightTextProps) {
    const wrapRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Toggle a single class — CSS handles all sequential transitions via transition-delay
                el.classList.toggle("hl-active", entry.isIntersecting);
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <span
            ref={wrapRef}
            className={`hl-wrap ${className}`}
            style={{
                position: "relative",
                display: "inline-block",
                padding: "2px 7px",
                zIndex: 0,
                "--hl-bg": bgColor,
                "--hl-color": color,
                "--hl-active-color": activeColor,
            } as React.CSSProperties}
        >
            {/* top-left dot */}
            <span
                aria-hidden="true"
                className="hl-dot hl-dot-tl"
                style={{
                    position: "absolute",
                    width: 11,
                    height: 11,
                    borderRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderTopLeftRadius: 0,
                    background: bgColor,
                    top: -11,
                    left: -11,
                    transition: "opacity 0.2s ease 0.75s",
                    zIndex: 2,
                }}
            />

            {/* background */}
            <span
                aria-hidden="true"
                className="hl-bg"
                style={{
                    position: "absolute",
                    inset: 0,
                    background: bgColor,
                    transformOrigin: "left center",
                    transition: "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)",
                    zIndex: -1,
                }}
            />

            {/* text */}
            <span
                className="hl-text"
                style={{
                    position: "relative",
                    zIndex: 1,
                    transition: "color 0.15s ease 0.45s",
                }}
            >
                {children}
            </span>

            {/* bottom-right dot */}
            <span
                aria-hidden="true"
                className="hl-dot hl-dot-br"
                style={{
                    position: "absolute",
                    width: 11,
                    height: 11,
                    borderRadius: 5,
                    borderTopLeftRadius: 0,
                    background: bgColor,
                    bottom: -11,
                    right: -11,
                    transition: "opacity 0.2s ease 0.75s",
                    zIndex: 2,
                }}
            />
        </span>
    );
}