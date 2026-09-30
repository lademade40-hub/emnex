import type { NextConfig } from "next";

// Cloudflare Pages sets CF_PAGES=1 automatically during its builds.
// On Cloudflare we ship a fully static export (out/ directory);
// everywhere else (z.ai sandbox, Vercel, Netlify) we keep the normal server build.
const isCloudflarePages = Boolean(
  process.env.CF_PAGES || process.env.NEXT_STATIC_EXPORT
);

const nextConfig: NextConfig = {
  output: isCloudflarePages ? "export" : "standalone",
  images: isCloudflarePages
    ? { unoptimized: true, qualities: [75, 85] }
    : { qualities: [75, 85] },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
