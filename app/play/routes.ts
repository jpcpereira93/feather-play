import {
  index,
  layout,
  prefix,
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export const playRoutes = [
  ...prefix("library", [
    layout("play/library/layout.tsx", [
      index("play/library/page.tsx"),
      route("albums", "play/library/albums/page.tsx"),
      route("artists", "play/library/artists/page.tsx"),
      route("playlists", "play/library/playlists/page.tsx"),
    ]),
  ]),
  route("liked-songs", "play/liked-songs/page.tsx"),
  route("albums/:albumId", "play/album/page.tsx"),
  route("playlists/:playlistId", "play/playlist/page.tsx"),
] satisfies RouteConfig;
