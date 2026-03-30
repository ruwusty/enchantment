// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react"

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "static",

  adapter: netlify(),

  site: 'https://unsw-data-soc.github.io',
  base: '/',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: import.meta.env.PROD ? { "react-dom/server": "react-dom/server.edge" } : undefined,
    }
  },

  integrations: [alpinejs(),react()],
});