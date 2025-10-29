import { useQuery } from "@tanstack/react-query";

import { getCurrentSpotifyUserAlbums } from "~core/services";

export const useGetCurrentSpotifyUserAlbumsQuery = () =>
  useQuery({
    queryKey: ["spotifyUserAlbums"],
    queryFn: getCurrentSpotifyUserAlbums,
  });
