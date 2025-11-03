import {
  index,
  layout,
  prefix,
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

import { playRoutes } from "./play/routes";

export default [
  layout("site/layout.tsx", [
    index("site/page.tsx"),
    ...prefix("setup-guide", [
      layout("site/setup-guide/layout.tsx", [
        index("site/setup-guide/page.tsx"),
        route("overview", "site/setup-guide/overview/page.tsx"),
        route("requirements", "site/setup-guide/requirements/page.tsx"),
        route("setting-up", "site/setup-guide/setting-up/page.tsx"),
      ]),
    ]),
    route("faq", "site/faq/page.tsx"),
  ]),
  route("login", "site/login/page.tsx"),
  ...prefix("play", [
    layout("play/layout.tsx", [index("play/page.tsx"), ...playRoutes]),
  ]),
] satisfies RouteConfig;
