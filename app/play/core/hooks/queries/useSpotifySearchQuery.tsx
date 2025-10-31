import { useQuery } from "@tanstack/react-query";

import { searchSpotify } from "~/play/core/services";

export const useSpotifySearchQuery = (searchTerm?: string | null) =>
  useQuery({
    queryKey: ["spotifySearch", searchTerm],
    queryFn: () => searchSpotify(searchTerm ?? ""),
    enabled: !!searchTerm && searchTerm.length > 0,
  });
