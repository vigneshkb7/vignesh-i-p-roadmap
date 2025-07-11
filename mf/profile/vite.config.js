import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mf from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    mf({
      name: "profile",
      filename: "remoteEntry.js",
      exposes: { "./ProfileWidget": "./src/ProfileWidget.jsx" },
      shared: ["react", "react-dom"],
    }),
  ],
  server: { port: 3002 },
});
