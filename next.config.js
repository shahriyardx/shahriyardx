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
  transpilePackages: ["lucide-react"],
}

module.exports = nextConfig
