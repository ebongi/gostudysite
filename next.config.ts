import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/preview",
        destination: "/#screenshots",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
