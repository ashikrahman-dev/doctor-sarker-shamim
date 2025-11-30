/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337", // Your Strapi port
                pathname: "/uploads/**",
            },
            {
                protocol: "https",
                hostname: "humble-hero-0bd6231463.media.strapiapp.com", // Your production Strapi domain
                // pathname: "/uploads/**",
            },
            {
                protocol: "https",
                hostname: "smiling-kindness-dfdd723bc6.media.strapiapp.com", // Your production Strapi domain
                // pathname: "/uploads/**",
            },
        ],
    },
    typedRoutes: true,
};

export default nextConfig;
