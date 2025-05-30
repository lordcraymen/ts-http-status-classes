// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "./src/base/index.ts",
    "./src/http-infos/index.ts",
    "./src/http-successess/index.ts",
    "./src/http-redirects/index.ts",
    "./src/http-server-errors/index.ts",
    "./src/http-client-errors/index.ts",
  ],
  format: ["esm", "cjs"],
  dts: true, // Gibt .d.ts für jeden Entry aus
  splitting: false, // Optional, je nach Usecase
  clean: true, // Räumt output-dir vor Build auf
  outDir: "dist"
});
