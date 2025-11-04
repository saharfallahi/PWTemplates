/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: "./",
  images: {
    // برای تصاویر external (مثلاً WordPress)
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    // در حالت static export، بهینه‌سازی سروری تصویر غیرفعال است
    unoptimized: true,
  },
};

module.exports = nextConfig;
