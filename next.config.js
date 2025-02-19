/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
      },
      {
        hostname: "firebasestorage.googleapis.com",
        protocol: "https",
      },
      {
        hostname: "i.pravatar.cc",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig
