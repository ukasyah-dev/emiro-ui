import type { Config } from "@react-router/dev/config";
import { loader } from "./app/routes/docs/examples.tsx";

const { examples } = loader();

export default {
  ssr: false,
  future: {
    v8_viteEnvironmentApi: true,
  },
  prerender: [
    "/",
    "/docs/getting-started",
    "/docs/components",
    "/docs/examples",
    ...examples.map((example) => `/examples/${example.slug}`),
  ],
} satisfies Config;
