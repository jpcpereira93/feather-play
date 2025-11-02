import { useMutation } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const usePlaySpotifyItemMutation = () => {
  const { spotifyApi } = useSpotifyApiContext();

  return useMutation({
    mutationFn: async ({ uri, uris }: { uri?: string; uris?: string[] }) =>
      await spotifyApi.player.startResumePlayback("", uri, uris),
  });
};
