import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // FSWD is nested inside the CFI-WEBINAR repo; pin the root so Next
  // doesn't resolve against the parent project's lockfile.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
