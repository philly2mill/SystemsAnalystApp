import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "/systems-analyst-sim/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["SAicon.png"],
      manifest: {
        name: "Systems Analyst Practice",
        short_name: "SA Practice",
        theme_color: "#004aad",
        icons: [
          {
            src: "SAicon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
}));
