import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.dcabra.com",
  trailingSlash: "never",

  adapter: vercel({
    maxDuration: 10,
  }),

  integrations: [
    react(),
    sitemap({
      serialize(item) {
        if (item.url === "https://www.dcabra.com/") {
          item.priority = 1;
          item.changefreq = "weekly";
        } else if (item.url.includes("/productos")) {
          item.priority = 0.9;
          item.changefreq = "weekly";
        } else if (item.url.includes("/recetas")) {
          item.priority = 0.7;
          item.changefreq = "monthly";
        } else {
          item.priority = 0.6;
          item.changefreq = "monthly";
        }

        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});