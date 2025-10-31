import { useQuery } from "@tanstack/react-query";

import { getSpotifyPlaylist } from "~/play/core/services";

export const useGetSpotifyPlaylistQuery = (playlistId: string) =>
  useQuery({
    queryKey: ["spotifyPlaylist", playlistId],
    queryFn: () => getSpotifyPlaylist(playlistId),
  });
