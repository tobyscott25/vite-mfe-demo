import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mfe2",
      filename: "remoteEntry.js",
      exposes: {
        "./AppRoot": "./src/AppRoot/index.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 5502,
    strictPort: true,
    open: true, // Open in browser when being developed independently
  },
  preview: {
    port: 5002,
    strictPort: true,
    open: false, // Do not open in browser when being developed as a child
  },
  build: {
    target: "esnext", // needed to final build
  },
});
