/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "avatars.githubusercontent.com",
      "opengraph.githubassets.com",
      "t1.gstatic.com",
    ],
  },
  output: "standalone",
  transpilePackages: ["lucide-react"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: { ignoreDuringBuilds: true },
  
}

module.exports = nextConfig
