/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "picsum.photos" },
			{ hostname: "avatars.githubusercontent.com" },
			{ hostname: "opengraph.githubassets.com" },
			{ hostname: "t1.gstatic.com" },
		],
	},
	transpilePackages: ["lucide-react", "next-mdx-remote"],
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: { ignoreDuringBuilds: true },
	output: "standalone",
}

module.exports = nextConfig
