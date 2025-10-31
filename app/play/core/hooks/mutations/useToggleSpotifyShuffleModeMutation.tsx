import { useMutation } from "@tanstack/react-query";

import { toggleSpotifyShuffleMode } from "~/play/core/services";

export const useToggleSpotifyShuffleModeMutation = () => {
  return useMutation({
    mutationFn: async (isShuffleMode: boolean) =>
      await toggleSpotifyShuffleMode(isShuffleMode),
  });
};
