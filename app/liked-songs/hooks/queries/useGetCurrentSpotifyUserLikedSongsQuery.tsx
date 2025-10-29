import { useQuery } from "@tanstack/react-query";

import { getCurrentSpotifyUserLikedSongs } from "~core/services";

export const useGetCurrentSpotifyUserLikedSongsQuery = () =>
  useQuery({
    queryKey: ["spotifyUserLikedSongs"],
    queryFn: getCurrentSpotifyUserLikedSongs,
  });
