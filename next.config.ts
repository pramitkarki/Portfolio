import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },

  compress: true,

  experimental: {
    optimizeCss: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ],
      },
      {
        source: "/docs/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Content-Disposition",
            value: "inline",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/email",
        destination: "mailto:pramit8848@gmail.com",
        permanent: true,
      },
      {
        source: "/directresume",
        destination: "/docs/Pramit_Karki_Resume.pdf",
        permanent: true,
      },
      {
        source: "/direct-resume",
        destination: "/docs/Pramit_Karki_Resume.pdf",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/pramitkarki",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
