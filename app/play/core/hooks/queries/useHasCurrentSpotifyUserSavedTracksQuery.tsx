import { useQuery } from "@tanstack/react-query";

import { hasCurrentSpotifyUserSavedTracks } from "~/play/core/services";

export const useHasCurrentSpotifyUserSavedTracksQuery = (tracks: string[]) =>
  useQuery({
    queryKey: ["hasSavedTracks", tracks.join(",")],
    queryFn: () => hasCurrentSpotifyUserSavedTracks(tracks),
    enabled: tracks.length > 0,
  });
