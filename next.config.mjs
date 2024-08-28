/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OPENFORT_PUBLISHABLE_KEY: process.env.OPENFORT_PUBLISHABLE_KEY,
    },
};

export default nextConfig;
