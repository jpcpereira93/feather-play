import { useQuery } from "@tanstack/react-query";

import { getCurrentSpotifyUserPlaylists } from "~core/services";

export const useGetCurrentSpotifyUserPlaylistsQuery = () =>
  useQuery({
    queryKey: ["spotifyUserPlaylists"],
    queryFn: getCurrentSpotifyUserPlaylists,
  });
