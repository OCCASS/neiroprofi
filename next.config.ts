/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here
    experimental: {
        reactCompiler: false,
    },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
