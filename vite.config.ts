import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/feather-play/",
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), svgr()],
  server: {
    host: "127.0.0.1", // Needed for local development security issues on spotify auth
  },
});
