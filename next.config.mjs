import { readFile } from "fs/promises";

const packageJson = JSON.parse(
    await readFile(new URL("./package.json", import.meta.url), "utf-8")
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        version: packageJson.version,
    },
};

export default nextConfig;
