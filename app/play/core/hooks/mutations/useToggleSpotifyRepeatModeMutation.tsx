import { useMutation } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useToggleSpotifyRepeatModeMutation = () => {
  const { spotifyApi } = useSpotifyApiContext();

  return useMutation({
    mutationFn: async (isRepeatMode: boolean) =>
      await spotifyApi.player.setRepeatMode(isRepeatMode ? "off" : "track"),
  });
};
