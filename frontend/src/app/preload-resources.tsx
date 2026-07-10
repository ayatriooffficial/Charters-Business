import ReactDOM from "react-dom";

// Preload the exact URLs Next.js image optimizer will request:
// - Desktop: w=1080 (our heroData width param)  
// - Mobile:  w=640
// Matching width + quality ensures the browser actually uses the preloaded response.
const MOBILE_BG =
  "/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fducgcl4dg%2Fimage%2Fupload%2Fq_auto%3Aeco%2Ff_auto%2Fcharters-business%2FBackground-M&w=640&q=75";
const DESKTOP_BG =
  "/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fducgcl4dg%2Fimage%2Fupload%2Fq_auto%3Aeco%2Ff_auto%2Fcharters-business%2Fbackground&w=1080&q=75";

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
  return null;
}