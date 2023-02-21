require('dotenv').config({ path: `.env` });
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    YOUR_VARIABLE_NAME: process.env.YOUR_VARIABLE_NAME
  },
  images: {
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
      },
    ]
  },
}
module.exports = nextConfig
