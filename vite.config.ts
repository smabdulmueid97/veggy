import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/veggy/", // <-- This must match the repo name
  plugins: [react()],
});
