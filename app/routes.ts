import {
  index,
  layout,
  prefix,
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  index("home/page.tsx"),
  ...prefix("library", [
    layout("library/layout.tsx", [
      index("library/page.tsx"),
      route("albums", "library/albums/page.tsx"),
      route("artists", "library/artists/page.tsx"),
      route("playlists", "library/playlists/page.tsx"),
    ]),
  ]),
  route("liked-songs", "liked-songs/page.tsx"),
] satisfies RouteConfig;
