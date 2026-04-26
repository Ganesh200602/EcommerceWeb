/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash:true
};

module.exports = {
  output:'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",

        port: "",
      },
    ],
  },
  nextConfig,
};
