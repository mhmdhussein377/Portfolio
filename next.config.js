/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "camo.githubusercontent.com",
      "git-scm.com",
      "www.google.com",
      "w7.pngwing.com",
    ],
  },
};

module.exports = nextConfig
