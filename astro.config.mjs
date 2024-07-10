import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://arianrdcas.github.io",
  base: "/Andy",
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind()],
});