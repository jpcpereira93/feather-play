import { useQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useGetCurrentSpotifyUserAlbumsQuery = () => {
  const { spotifyApi } = useSpotifyApiContext();

  return useQuery({
    queryKey: ["spotifyUserAlbums"],
    queryFn: async () => await spotifyApi.currentUser.albums.savedAlbums(),
  });
};
