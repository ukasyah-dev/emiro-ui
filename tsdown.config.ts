import { defineConfig } from "tsdown";

export default defineConfig({
  dts: {
    build: true,
  },
  entry: ["./src/components", "./src/constants", "./src/lib/utils"],
});
