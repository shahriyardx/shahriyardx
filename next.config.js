/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "avatars.githubusercontent.com",
      "opengraph.githubassets.com",
    ],
  },
  output: "standalone",
}

module.exports = nextConfig
