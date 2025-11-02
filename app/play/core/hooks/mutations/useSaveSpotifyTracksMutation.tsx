import { useMutation } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useSaveSpotifyTracksMutation = () => {
  const { spotifyApi } = useSpotifyApiContext();

  return useMutation({
    mutationFn: async (tracks: string[]) => {
      // @ts-expect-error: Spotify API is wrongly typed, should be {ids: string[]}
      return await spotifyApi.currentUser.tracks.saveTracks({ ids: tracks });
    },
  });
};
