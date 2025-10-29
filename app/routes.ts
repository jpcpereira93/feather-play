import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("home/page.tsx"),
  route("library", "library/page.tsx"),
  route("liked-songs", "liked-songs/page.tsx"),
] satisfies RouteConfig;
