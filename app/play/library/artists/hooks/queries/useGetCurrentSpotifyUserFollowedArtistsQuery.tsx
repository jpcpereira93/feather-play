import { useQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useGetCurrentSpotifyUserFollowedArtistsQuery = () => {
  const { spotifyApi } = useSpotifyApiContext();

  return useQuery({
    queryKey: ["spotifyUserFollowedArtists"],
    queryFn: async () => {
      const { artists } = await spotifyApi.currentUser.followedArtists();

      return artists;
    },
  });
};
