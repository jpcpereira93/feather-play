import { useInfiniteQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";
import { selectItemsFromInfinitePages } from "~/play/core/utils";

export const useGetSpotifyPlaylistItemsQuery = (playlistId: string) => {
  const { spotifyApi } = useSpotifyApiContext();

  return useInfiniteQuery({
    queryKey: ["spotifyPlaylistItems", playlistId],
    queryFn: async ({ pageParam }) =>
      await spotifyApi.playlists.getPlaylistItems(
        playlistId,
        undefined,
        undefined,
        20,
        pageParam,
      ),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.next ? lastPage.offset + lastPage.limit : null,
    select: selectItemsFromInfinitePages,
  });
};
