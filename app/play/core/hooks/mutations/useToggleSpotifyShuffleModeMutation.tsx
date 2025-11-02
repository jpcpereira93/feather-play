import { useMutation } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useToggleSpotifyShuffleModeMutation = () => {
  const { spotifyApi } = useSpotifyApiContext();

  return useMutation({
    mutationFn: async (isShuffleMode: boolean) =>
      await spotifyApi.player.togglePlaybackShuffle(!isShuffleMode),
  });
};
