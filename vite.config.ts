import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import rehypeShikiFromHighlighter from "@shikijs/rehype/core";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { highlighter } from "./highlighter";

export default defineConfig({
  plugins: [
    mdx({
      rehypePlugins: [
        [
          rehypeShikiFromHighlighter,
          highlighter,
          {
            theme: "github-light",
          },
        ],
      ],
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
