import { useMutation } from "@tanstack/react-query";

import { transferSpotifyPlaybackToCurrentDevice } from "~core/services";

export const useTransferSpotifyPlaybackToCurrentDeviceMutation = (
  deviceId: string,
) => {
  return useMutation({
    mutationFn: async () =>
      await transferSpotifyPlaybackToCurrentDevice(deviceId),
  });
};
