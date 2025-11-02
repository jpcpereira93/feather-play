import { useQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useGetCurrentSpotifyUserPlaylistsQuery = () => {
  const { spotifyApi } = useSpotifyApiContext();

  return useQuery({
    queryKey: ["spotifyUserPlaylists"],
    queryFn: async () => await spotifyApi.currentUser.playlists.playlists(),
  });
};
