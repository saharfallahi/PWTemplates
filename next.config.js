/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // برای تصاویر external (مثلاً WordPress)
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    // برای تصاویر static در public folder
    unoptimized: false, // فعال کردن optimization برای performance بهتر
  },
};

module.exports = nextConfig;
