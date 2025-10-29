import {
  SpotifyPlayableList,
  SpotifyPlayableListSkeleton,
} from "~/core/components";
import { useGetCurrentSpotifyUserProfileQuery } from "~/core/hooks";

import { useGetCurrentSpotifyUserLikedSongsQuery } from "./hooks";

export default function LikedSongs() {
  const { data: likedSongs, isLoading: isLoadingLikedSongs } =
    useGetCurrentSpotifyUserLikedSongsQuery();
  const { data: userProfile, isLoading: isLoadingUserProfile } =
    useGetCurrentSpotifyUserProfileQuery();

  if (
    isLoadingLikedSongs ||
    isLoadingUserProfile ||
    !likedSongs ||
    !userProfile
  ) {
    return <SpotifyPlayableListSkeleton hasAlbum />;
  }

  return (
    <SpotifyPlayableList
      hasAlbum
      description=""
      images={[
        {
          url: "https://misc.scdn.co/liked-songs/liked-songs-300.png",
          height: 300,
          width: 300,
        },
      ]}
      uri={`${userProfile.uri}:collection`}
      name="Liked Songs"
      owner={userProfile.display_name}
      tracks={likedSongs}
      type="playlist"
    />
  );
}
