import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace "Project-Scalix" with your actual repo name
export default defineConfig({
  plugins: [react()],
  base: "/Project-Scalix/",
});
