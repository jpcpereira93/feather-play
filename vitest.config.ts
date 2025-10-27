import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    pool: "vmForks",
    clearMocks: true,
    environment: "happy-dom",
    globals: true,
    setupFiles: ["./test/setup-test-env.ts"],
    silent: true,
    watch: false,
  },
});
