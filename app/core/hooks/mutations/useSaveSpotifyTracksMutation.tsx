import { useMutation } from "@tanstack/react-query";

import { saveTracks } from "~core/services";

export const useSaveSpotifyTracksMutation = () => {
  return useMutation({
    mutationFn: async (tracks: string[]) => await saveTracks(tracks),
  });
};
