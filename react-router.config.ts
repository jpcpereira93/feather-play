import type { Config } from "@react-router/dev/config";

export default {
  ssr: false, // SPA mode, since it'll be deployed to github pages
} satisfies Config;
