import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // host: true, // or "0.0.0.0"
    allowedHosts: ["alexia-gentled-kris.ngrok-free.dev"],
    // proxy: {
    //   "/api": {
    //     target: "https://salary-advance-app-production.up.railway.app",
    //     changeOrigin: true,
    //     secure: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
});
