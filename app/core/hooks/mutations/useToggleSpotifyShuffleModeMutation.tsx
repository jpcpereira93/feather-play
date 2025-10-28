import { useMutation } from "@tanstack/react-query";

import { toggleSpotifyShuffleMode } from "~core/services";

export const useToggleSpotifyShuffleModeMutation = () => {
  return useMutation({
    mutationFn: async (isShuffleMode: boolean) =>
      await toggleSpotifyShuffleMode(isShuffleMode),
  });
};
