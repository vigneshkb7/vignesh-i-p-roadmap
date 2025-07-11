import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mf from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    mf({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: { "./DashboardWidget": "./src/DashboardWidget.jsx" },
      shared: ["react", "react-dom"],
    }),
  ],
  server: { port: 3001 },
});
