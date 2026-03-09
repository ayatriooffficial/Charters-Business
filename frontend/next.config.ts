/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
    optimizeCss: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.mastersunion.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.mastersunion.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.mastersunion.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.mastersunion.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.tetr.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },

  compress: true,
  poweredByHeader: false,

  reactStrictMode: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Cache static assets aggressively (images, fonts, icons)
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});