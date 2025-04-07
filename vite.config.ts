import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@views": path.resolve(__dirname, "./src/shared/views"),
      "@context": path.resolve(__dirname, "./src/app/context"),
      "@utils": path.resolve(__dirname, "./src/shared/utils"),
      "@constants": path.resolve(__dirname, "./src/shared/constants"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@firebase": path.resolve(__dirname, "./src/firebase"),
    },
  },
});
