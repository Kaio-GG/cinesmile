/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src/styles"],
  },
  images: {
    domains: ["static.tvmaze.com"],
  },
};

module.exports = nextConfig;
