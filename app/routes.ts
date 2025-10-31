import {
  index,
  layout,
  prefix,
  type RouteConfig,
} from "@react-router/dev/routes";

import { playRoutes } from "./play/routes";

export default [
  index("home/page.tsx"),
  ...prefix("play", [
    layout("play/layout.tsx", [index("play/page.tsx"), ...playRoutes]),
  ]),
] satisfies RouteConfig;
