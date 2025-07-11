import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mf from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    mf({
      name: "shell",
      remotes: {
        dashboard: "http://localhost:3001/remoteEntry.js",
        profile: "http://localhost:3002/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: { port: 3000 },
});
