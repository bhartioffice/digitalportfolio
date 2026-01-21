import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isNetlify = process.env.NETLIFY === "true";

  return {
    plugins: [react()],
    base: isNetlify ? "/" : mode === "production" ? "/digitalportfolio/" : "/",
  };
});
