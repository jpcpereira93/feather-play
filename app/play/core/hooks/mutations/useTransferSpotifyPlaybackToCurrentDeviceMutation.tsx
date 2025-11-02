import { useMutation } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useTransferSpotifyPlaybackToCurrentDeviceMutation = (
  deviceId: string,
) => {
  const { spotifyApi } = useSpotifyApiContext();

  return useMutation({
    mutationFn: async () =>
      await spotifyApi.player.transferPlayback([deviceId]),
  });
};
