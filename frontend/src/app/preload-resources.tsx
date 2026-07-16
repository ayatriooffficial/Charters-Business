import ReactDOM from "react-dom";

// Preload the exact URLs Next.js image optimizer will request:
// - Desktop: w=1080 (our heroData width param)  
// - Mobile:  w=640
// Matching width + quality ensures the browser actually uses the preloaded response.
const MOBILE_BG = "/backgroundm.jpg";
const DESKTOP_BG =
  "/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fducgcl4dg%2Fimage%2Fupload%2Fq_auto%3Aeco%2Ff_auto%2Fcharters-business%2Fbackground&w=1080&q=75";

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