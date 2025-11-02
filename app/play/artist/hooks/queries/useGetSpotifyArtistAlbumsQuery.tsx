import { useQuery } from "@tanstack/react-query";

import { sortAlbumsByMostRecent } from "~/play/artist/utils";
import { useSpotifyApiContext } from "~/play/core/context";

export const useGetSpotifyArtistAlbumsQuery = (artistId: string) => {
  const { spotifyApi } = useSpotifyApiContext();

  return useQuery({
    queryKey: ["spotifyArtistAlbums", artistId],
    queryFn: async () => await spotifyApi.artists.albums(artistId),
    select: (data) => ({
      ...data,
      items: sortAlbumsByMostRecent(data.items),
    }),
  });
};
