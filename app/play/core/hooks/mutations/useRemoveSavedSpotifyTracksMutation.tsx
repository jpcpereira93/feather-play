import { useMutation } from "@tanstack/react-query";

import { removeSavedTracks } from "~/play/core/services";

export const useRemoveSavedSpotifyTracksMutation = () => {
  return useMutation({
    mutationFn: async (tracks: string[]) => await removeSavedTracks(tracks),
  });
};
