import { useQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useGetSpotifyArtistQuery = (artistId: string) => {
  const { spotifyApi } = useSpotifyApiContext();

  return useQuery({
    queryKey: ["spotifyArtist", artistId],
    queryFn: async () => await spotifyApi.artists.get(artistId),
  });
};
