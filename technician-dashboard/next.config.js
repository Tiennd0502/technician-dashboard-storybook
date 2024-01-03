/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MOCKAPI_BASE_URL: 'https://657ab1bc1acd268f9afb99bb.mockapi.io',
    MOCKAPI_SECOND_URL: 'https://640ab09665d3a01f9804cb0b.mockapi.io',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
}

module.exports = nextConfig
