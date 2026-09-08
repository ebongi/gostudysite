import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/preview",
        destination: "/#top",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/#support",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
