import { useInfiniteQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";
import {
  getNextPageParam,
  selectItemsFromInfinitePages,
} from "~/play/core/utils";

export const useGetCurrentSpotifyUserAlbumsQuery = () => {
  const { spotifyApi } = useSpotifyApiContext();

  return useInfiniteQuery({
    queryKey: ["spotifyUserAlbums"],
    queryFn: async ({ pageParam }) =>
      await spotifyApi.currentUser.albums.savedAlbums(20, pageParam),
    initialPageParam: 0,
    getNextPageParam: getNextPageParam,
    select: selectItemsFromInfinitePages,
  });
};
