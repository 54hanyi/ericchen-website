import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // npm run dev → mode 為 development
    // npm run build → mode 為 production
    base: mode === "production" ? "/ericchen-website/" : "/",
  };
});
