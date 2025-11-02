import { useQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useGetSpotifyPlaylistQuery = (playlistId: string) => {
  const { spotifyApi } = useSpotifyApiContext();

  return useQuery({
    queryKey: ["spotifyPlaylist", playlistId],
    queryFn: async () => await spotifyApi.playlists.getPlaylist(playlistId),
  });
};
