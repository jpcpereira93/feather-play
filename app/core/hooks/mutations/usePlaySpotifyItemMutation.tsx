import { useMutation } from "@tanstack/react-query";

import { playSpotifyItem } from "~core/services";

export const usePlaySpotifyItemMutation = () => {
  return useMutation({
    mutationFn: async ({ uri, uris }: { uri?: string; uris?: string[] }) =>
      await playSpotifyItem(uri, uris),
  });
};
