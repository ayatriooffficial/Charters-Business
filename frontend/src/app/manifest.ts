import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Master Union - Business Education Platform",
    short_name: "Master Union",
    description: "Premium business education platform with hands-on learning",
    start_url: "/",
    display: "standalone",
    background_color: "#FEFEF3",
    theme_color: "#B30437",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
    ],
  };
}
