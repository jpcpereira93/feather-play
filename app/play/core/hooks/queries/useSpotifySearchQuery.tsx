import { useQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useSpotifySearchQuery = (searchTerm?: string | null) => {
  const { spotifyApi } = useSpotifyApiContext();

  return useQuery({
    queryKey: ["spotifySearch", searchTerm],
    queryFn: async () => await spotifyApi.search(searchTerm ?? "", ["track"]),
    enabled: !!searchTerm && searchTerm.length > 0,
  });
};
