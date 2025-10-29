import { useQuery } from "@tanstack/react-query";

import { getSpotifyAlbum } from "~core/services";

export const useGetSpotifyAlbumQuery = (albumId: string) =>
  useQuery({
    queryKey: ["spotifyAlbum", albumId],
    queryFn: () => getSpotifyAlbum(albumId),
  });
