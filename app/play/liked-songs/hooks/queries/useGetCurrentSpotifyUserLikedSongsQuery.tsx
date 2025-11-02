import { useQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useGetCurrentSpotifyUserLikedSongsQuery = () => {
  const { spotifyApi } = useSpotifyApiContext();

  return useQuery({
    queryKey: ["spotifyUserLikedSongs"],
    queryFn: async () => await spotifyApi.currentUser.tracks.savedTracks(),
  });
};
