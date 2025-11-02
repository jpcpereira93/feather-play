import { useQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useHasCurrentSpotifyUserSavedTracksQuery = (tracks: string[]) => {
  const { spotifyApi } = useSpotifyApiContext();

  return useQuery({
    queryKey: ["hasSavedTracks", tracks.join(",")],
    queryFn: async () =>
      await spotifyApi.currentUser.tracks.hasSavedTracks(tracks),
    enabled: tracks.length > 0,
  });
};
