import { useQuery } from "@tanstack/react-query";

import { getCurrentSpotifyUserProfile } from "~core/services";

export const useGetCurrentSpotifyUserProfileQuery = () =>
  useQuery({
    queryKey: ["spotifyUserProfile"],
    queryFn: getCurrentSpotifyUserProfile,
  });
