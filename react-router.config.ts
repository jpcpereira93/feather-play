import type { Config } from "@react-router/dev/config";

export default {
  basename: "/feather-play/",
  ssr: false, // SPA mode, since it'll be deployed to github pages
} satisfies Config;
