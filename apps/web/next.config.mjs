import "./utils/env.mjs";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    // typedRoutes: true,
    serverActions: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  transpilePackages: ["@acme/ui", "@acme/tailwind"],
};

export default nextConfig;