import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const versionRouter = createTRPCRouter({
    version: publicProcedure.query(() => {
        return { version: publicRuntimeConfig.version }
     })
});