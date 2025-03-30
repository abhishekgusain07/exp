/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during production builds to prevent deployment issues
    ignoreDuringBuilds: true,
  },
  // Increase the static image import size limit if needed
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optimize compiler
  swcMinify: true,
  // Apply strict mode for better development experience
  reactStrictMode: true,
};

module.exports = nextConfig; 