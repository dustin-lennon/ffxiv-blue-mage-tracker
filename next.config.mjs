
import { readFile } from "fs/promises";
import { z } from "zod";

const packageJsonSchema = z.object({ version: z.string() });

const packageJson = packageJsonSchema.parse(
    JSON.parse(
        await readFile(new URL("./package.json", import.meta.url), "utf-8"),
    ),
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        version: packageJson.version,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ffxivcollect.com',
                port: '',
                pathname: '/images/spells/**'
            }
        ]
    }
};

export default nextConfig;
