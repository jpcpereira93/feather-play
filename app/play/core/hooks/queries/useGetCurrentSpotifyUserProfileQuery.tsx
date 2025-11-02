import { useQuery } from "@tanstack/react-query";

import { useSpotifyApiContext } from "~/play/core/context";

export const useGetCurrentSpotifyUserProfileQuery = () => {
  const { spotifyApi } = useSpotifyApiContext();

  return useQuery({
    queryKey: ["spotifyUserProfile"],
    queryFn: async () => await spotifyApi.currentUser.profile(),
  });
};
