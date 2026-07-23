import ReactDOM from "react-dom";

// Preload the exact URLs Next.js image optimizer will request:
// - Desktop: w=1080 (our heroData width param)  
// - Mobile:  w=640
// Matching width + quality ensures the browser actually uses the preloaded response.
const MOBILE_BG = "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784549510/chartersUnion-mantor-placed-students-m_homu0z.avif";
const DESKTOP_BG = "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784546558/chartersUnion-mantor-placed-students_hwtwko.avif";

// Optimized Logo URLs matching sizes in Navbar.tsx
const MOBILE_LOGO =
  "/_next/image?url=%2FChaters_Union.avif&w=128&q=50";
const DESKTOP_LOGO =
  "/_next/image?url=%2FChaters_Union.avif&w=256&q=50";

export function PreloadResources() {
  ReactDOM.preload(MOBILE_BG, {
    as: "image",
    fetchPriority: "high",
    media: "(max-width: 767px)",
  });
  ReactDOM.preload(DESKTOP_BG, {
    as: "image",
    fetchPriority: "high",
    media: "(min-width: 768px)",
  });

  // Preload logo depending on viewport size to prevent lazy-load
  ReactDOM.preload(MOBILE_LOGO, {
    as: "image",
    fetchPriority: "high",
    media: "(max-width: 640px)",
  });
  ReactDOM.preload(DESKTOP_LOGO, {
    as: "image",
    fetchPriority: "high",
    media: "(min-width: 641px)",
  });

  return null;
}