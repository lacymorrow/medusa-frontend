const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  eslint: {
    // ignoreDuringBuilds: false,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.

    ignoreBuildErrors: true,

    // !! WARN !!
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },

      // DigitalOcean Spaces storage
      {
        protocol: "https",
        hostname: "fl-web.nyc3.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "fl-web.nyc3.cdn.digitaloceanspaces.com",
      },

      // TODO: Remove this
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))

module.exports = nextConfig
