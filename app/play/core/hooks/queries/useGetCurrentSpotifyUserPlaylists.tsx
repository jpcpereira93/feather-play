import { useQuery } from "@tanstack/react-query";

import { getCurrentSpotifyUserPlaylists } from "~/play/core/services";

export const useGetCurrentSpotifyUserPlaylistsQuery = () =>
  useQuery({
    queryKey: ["spotifyUserPlaylists"],
    queryFn: getCurrentSpotifyUserPlaylists,
  });
