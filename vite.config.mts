import copy from "rollup-plugin-copy";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: "src/module.ts",
      output: {
        dir: "dist",
        entryFileNames: "scripts/module.js",
        format: "es",
      },
    },
  },
  plugins: [
    copy({
      targets: [{ src: "static/module.json", dest: "dist" }],
      hook: "writeBundle",
    }),
  ],
});
