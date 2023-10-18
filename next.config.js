/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'macquariecloudservices.com',
      },
    ],
  },
};

module.exports = nextConfig;
