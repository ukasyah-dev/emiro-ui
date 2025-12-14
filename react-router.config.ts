import type { Config } from "@react-router/dev/config";

export default {
  prerender: true,
  ssr: true,
  future: {
    v8_viteEnvironmentApi: true,
  },
} satisfies Config;
