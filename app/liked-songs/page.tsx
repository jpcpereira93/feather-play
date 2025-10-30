import { useTranslation } from "react-i18next";
import {
  SpotifyPlayableList,
  SpotifyPlayableListSkeleton,
} from "~/core/components";
import { useGetCurrentSpotifyUserProfileQuery } from "~/core/hooks";
import { useGetCurrentSpotifyUserLikedSongsQuery } from "./hooks";

export default function LikedSongs() {
  const { t } = useTranslation();

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
      name={t("liked_songs.title")}
      owner={userProfile.display_name}
      tracks={likedSongs}
      type="playlist"
    />
  );
}
