import { useQuery } from "@tanstack/react-query";

import { getCurrentSpotifyUserProfile } from "~core/services";

export const useGetCurrentSpotifyUserProfile = () =>
  useQuery({
    queryKey: ["spotifyUserProfile"],
    queryFn: getCurrentSpotifyUserProfile,
  });
