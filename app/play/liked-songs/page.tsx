import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { SpotifyPlayableList } from "~/play/core/components";
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
    return (
      <SpotifyPlayableList>
        <SpotifyPlayableList.HeaderSkeleton />
        <SpotifyPlayableList.TableSkeleton />
      </SpotifyPlayableList>
    );
  }

  return (
    <SpotifyPlayableList>
      <SpotifyPlayableList.Header
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
        total={likedSongs.total}
        type="playlist"
      />
      <SpotifyPlayableList.Table
        hasAlbum
        onEndReached={onLoadMore}
        tracks={likedSongs.items}
      />
    </SpotifyPlayableList>
  );
}
