/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Allows images without Next.js optimization (necessary for static hosting)
  },
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "https://p0rtf0li0-spac3.m0nalisa.workers.dev",
        permanent: false,
      },
      {
        source: "/portfolio/:path*",
        destination: "https://p0rtf0li0-spac3.m0nalisa.workers.dev/:path*",
        permanent: false,
      },
      {
        source: "/actuarium",
        destination: "https://ai-audit-actuarium.pages.dev",
        permanent: false,
      },
      {
        source: "/actuarium/:path*",
        destination: "https://ai-audit-actuarium.pages.dev/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
