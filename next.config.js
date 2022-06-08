/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/user",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
