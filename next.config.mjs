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
  output: 'export', // This tells Next.js to generate a static export of your site
};

export default nextConfig;
