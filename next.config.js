/** @type {import('next').NextConfig} */
const { hostname } = require("os");
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // output: "export",
  images: { unoptimized: true },
};

module.exports = nextConfig;
