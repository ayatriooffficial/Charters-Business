import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // Generate unique build ID each build so old cached chunks are never reused
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    optimizePackageImports: [
      "firebase",
      "cloudinary",
      "next-cloudinary",
    ],
    optimizeCss: true,
    // PPR (Partial Prerendering) keeps above-fold static, streamed below-fold
  },

  images: {
    qualities: [50, 60, 75],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60, // 60 seconds — dev-friendly, revalidates fast
    deviceSizes: [390, 640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.chartersunion.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.chartersunion.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.chartersunion.org",
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
        hostname: "images.chartersunion.link",
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
      {
        protocol: "https",
        hostname: "images.mastersunion.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "files.mastersunion.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
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
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "charters-business.vercel.app",
          },
        ],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        // Only fonts/icons get immutable long cache (they truly never change)
        source: "/:all*(woff2|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Content images: short cache, MUST revalidate on reload
        source: "/:all*(svg|jpg|jpeg|png|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
      {
        // Next.js optimized images: always revalidate
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
      {
        // Cache hashed CSS/JS chunks — but NOT immutable so new deploys take effect
        // on refresh (not just hard refresh). Service worker is the primary cache layer.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
      {
        // Disable bfcache + HTTP cache for HTML pages — forces fresh load every time
        // Prevents Chrome from restoring frozen stale tabs with old SW/scroll state
        source: "/((?!_next/static|favicon|.*\\.(?:svg|jpg|jpeg|png|webp|avif|ico|woff2)).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/apply",
        destination: "/signup",
        permanent: true,
      },
      {
        source: "/digital-growth-&-marketing",
        destination: "/digital-growth-marketing",
        permanent: true,
      },
      {
        source: "/technology-&-business-management",
        destination: "/technology-business-management",
        permanent: true,
      },
    ];
  },
};

export default bundleAnalyzer(nextConfig);
