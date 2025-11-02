import type { Market } from "@spotify/web-api-ts-sdk";
import { useQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";
import { useGetCurrentSpotifyUserProfileQuery } from "~/play/core/hooks";

export const useGetSpotifyArtistTopTracksQuery = (artistId: string) => {
  const { spotifyApi } = useSpotifyApiContext();
  const { data: userProfile } = useGetCurrentSpotifyUserProfileQuery();

  return useQuery({
    queryKey: ["spotifyArtistTopTracks", artistId],
    queryFn: async () =>
      await spotifyApi.artists.topTracks(
        artistId,
        (userProfile?.country as Market) ?? "US",
      ),
    enabled: !!userProfile?.country,
  });
};
