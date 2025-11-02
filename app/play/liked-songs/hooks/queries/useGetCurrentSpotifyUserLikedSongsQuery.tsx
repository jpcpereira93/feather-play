import { useInfiniteQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";
import { selectItemsFromInfinitePages } from "~/play/core/utils";

export const useGetCurrentSpotifyUserLikedSongsQuery = () => {
  const { spotifyApi } = useSpotifyApiContext();

  return useInfiniteQuery({
    queryKey: ["spotifyUserLikedSongs"],
    queryFn: async ({ pageParam }) =>
      await spotifyApi.currentUser.tracks.savedTracks(20, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.offset + lastPage.limit,
    select: selectItemsFromInfinitePages,
  });
};
