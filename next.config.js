/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{hostname: "picsum.photos"},
			{hostname: "avatars.githubusercontent.com"},
			{hostname: "opengraph.githubassets.com"},
			{hostname: "t1.gstatic.com"},
		]
	},
	// output: "standalone",
	transpilePackages: ["lucide-react"],
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: { ignoreDuringBuilds: true },
}

module.exports = nextConfig
