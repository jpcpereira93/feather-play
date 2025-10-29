import { useQuery } from "@tanstack/react-query";

import { getCurrentSpotifyUserFollowedArtists } from "~core/services";

export const useGetCurrentSpotifyUserFollowedArtistsQuery = () =>
  useQuery({
    queryKey: ["spotifyUserFollowedArtists"],
    queryFn: getCurrentSpotifyUserFollowedArtists,
  });
