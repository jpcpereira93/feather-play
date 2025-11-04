import { useInfiniteQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";
import {
  getNextPageParam,
  selectItemsFromInfinitePages,
} from "~/play/core/utils";

export const useGetSpotifyAlbumTracksQuery = (albumId: string) => {
  const { spotifyApi } = useSpotifyApiContext();

  return useInfiniteQuery({
    queryKey: ["spotifyAlbumTracks", albumId],
    queryFn: async ({ pageParam }) => {
      const page = await spotifyApi.albums.tracks(
        albumId,
        undefined,
        20,
        pageParam,
      );

      return {
        ...page,
        items: page.items.map((track) => ({ track })),
      };
    },
    initialPageParam: 0,
    getNextPageParam: getNextPageParam,
    select: selectItemsFromInfinitePages,
  });
};
