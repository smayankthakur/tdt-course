import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder course art ships as local SVG; swap for real photos later.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
