import ReactDOM from "react-dom";

// Preload the exact URLs Next.js image optimizer will request:
// - Desktop: w=1080 (our heroData width param)  
// - Mobile:  w=640
// Matching width + quality ensures the browser actually uses the preloaded response.
const MOBILE_BG = "https://res.cloudinary.com/ducgcl4dg/image/upload/v1785503187/chartersUnion-mantor-placed-students-m_n49fnw.avif";
const DESKTOP_BG = "https://res.cloudinary.com/ducgcl4dg/image/upload/v1785502371/ChartersUnion-faculty-alreday-placed-students_l6oqu2.avif";

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