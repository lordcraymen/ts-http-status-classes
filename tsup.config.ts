// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "./src/base/index.ts",
    "./src/http-infos/index.ts",
    "./src/http-successes/index.ts",
    "./src/http-redirects/index.ts",
    "./src/http-server-errors/index.ts",
    "./src/http-client-errors/index.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  outDir: "dist",
  clean: true
});
