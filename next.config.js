/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com", "avatars.githubusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/cv.pdf",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
