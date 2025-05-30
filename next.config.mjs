/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "jlgxwuwuzrfkrkyqwzdt.supabase.co",
                port: "",
                pathname: "/storage/v1/object/public/cabin-images/**",
            },
        ],
    },
    // output: "export", for static site generation
};

export default nextConfig;
