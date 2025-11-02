import { useMutation } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useRemoveSavedSpotifyTracksMutation = () => {
  const { spotifyApi } = useSpotifyApiContext();

  return useMutation({
    mutationFn: async (tracks: string[]) => {
      return await spotifyApi.currentUser.tracks.removeSavedTracks({
        // @ts-expect-error: Spotify API is wrongly typed, should be {ids: string[]}
        ids: tracks,
      });
    },
  });
};
