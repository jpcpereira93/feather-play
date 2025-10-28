import { useMutation } from "@tanstack/react-query";

import { toggleSpotifyRepeatMode } from "~core/services";

export const useToggleSpotifyRepeatModeMutation = () => {
  return useMutation({
    mutationFn: async (isRepeatMode: boolean) =>
      await toggleSpotifyRepeatMode(isRepeatMode),
  });
};
