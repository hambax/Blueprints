import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        app: resolve(__dirname, "src/main.jsx")
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "assets/index.css";
          }

          return "assets/[name][extname]";
        },
        chunkFileNames: "assets/[name].js",
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.facadeModuleId?.endsWith("/src/main.jsx")) {
            return "assets/app.js";
          }

          return "assets/[name].js";
        }
      }
    }
  }
});
