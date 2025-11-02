import { useInfiniteQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";
import {
  getNextPageParam,
  selectItemsFromInfinitePages,
} from "~/play/core/utils";

export const useGetCurrentSpotifyUserPlaylistsQuery = () => {
  const { spotifyApi } = useSpotifyApiContext();

  return useInfiniteQuery({
    queryKey: ["spotifyUserPlaylists"],
    queryFn: async ({ pageParam }) =>
      await spotifyApi.currentUser.playlists.playlists(20, pageParam),
    initialPageParam: 0,
    getNextPageParam: getNextPageParam,
    select: selectItemsFromInfinitePages,
  });
};
