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
  experimental: {
    serverActions: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: { ignoreDuringBuilds: true },
}

module.exports = nextConfig
