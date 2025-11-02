import { useQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useGetSpotifyArtistTopTracksQuery = (artistId: string) => {
  const { spotifyApi } = useSpotifyApiContext();

  return useQuery({
    queryKey: ["spotifyArtistTopTracks", artistId],
    queryFn: async () => await spotifyApi.artists.topTracks(artistId, "PT"),
  });
};
