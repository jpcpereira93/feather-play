import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  SpotifyPlayableList,
  SpotifyPlayableListSkeleton,
} from "~/play/core/components";
import {
  useDocumentTitle,
  useGetCurrentSpotifyUserProfileQuery,
} from "~/play/core/hooks";

import { useGetCurrentSpotifyUserLikedSongsQuery } from "~/play/liked-songs/hooks";

export default function LikedSongs() {
  const { t } = useTranslation();
  const { setTitle } = useDocumentTitle();

  const {
    data: likedSongs,
    fetchNextPage: fetchLikedSongsNextPage,
    isLoading: isLoadingLikedSongs,
    isFetchingNextPage: isFetchingLikedSongsNextPage,
  } = useGetCurrentSpotifyUserLikedSongsQuery();
  const { data: userProfile, isLoading: isLoadingUserProfile } =
    useGetCurrentSpotifyUserProfileQuery();

  useEffect(() => {
    setTitle(t("title.liked_songs"));
  }, [setTitle, t]);

  const onLoadMore = () => {
    if (!isFetchingLikedSongsNextPage) {
      fetchLikedSongsNextPage();
    }
  };

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
      onLoadMore={onLoadMore}
      owner={userProfile.display_name}
      tracks={likedSongs.items}
      total={likedSongs.total}
      type="playlist"
    />
  );
}
