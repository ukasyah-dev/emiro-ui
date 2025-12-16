import { createHighlighterCore } from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";

export const highlighter = await createHighlighterCore({
  themes: [import("@shikijs/themes/github-light")],
  langs: [
    import("@shikijs/langs/bash"),
    import("@shikijs/langs/css"),
    import("@shikijs/langs/ini"),
    import("@shikijs/langs/javascript"),
    import("@shikijs/langs/tsx"),
    import("@shikijs/langs/typescript"),
  ],
  engine: createOnigurumaEngine(import("shiki/wasm")),
});
