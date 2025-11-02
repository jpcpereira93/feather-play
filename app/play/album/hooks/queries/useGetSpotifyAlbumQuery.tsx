import { useQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useGetSpotifyAlbumQuery = (albumId: string) => {
  const { spotifyApi } = useSpotifyApiContext();

  return useQuery({
    queryKey: ["spotifyAlbum", albumId],
    queryFn: async () => {
      const album = await spotifyApi.albums.get(albumId);

      return {
        ...album,
        tracks: {
          ...album.tracks,
          items: album.tracks.items.map((track) => ({ track })),
        },
      };
    },
  });
};
