import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/edge";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // ...
  adapter: vercel(),
  integrations: [image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), react()],
  output: "server"
});