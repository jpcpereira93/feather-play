import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGetSpotifyAlbumQuery } from "~/play/album/hooks";
import { SpotifyPlayableList } from "~/play/core/components";
import { useDocumentTitle } from "~/play/core/hooks";
import { getArtistsString } from "~/play/core/utils";

interface AlbumHeaderProps {
  albumId: string;
}

export const AlbumHeader = React.memo(({ albumId }: AlbumHeaderProps) => {
  const { setTitle } = useDocumentTitle();
  const { t } = useTranslation();

  const { data: album, isLoading: isLoadingAlbum } =
    useGetSpotifyAlbumQuery(albumId);

  const getArtists = useCallback(
    () => getArtistsString(album?.artists ?? []),
    [album?.artists],
  );

  useEffect(() => {
    if (album) {
      setTitle(
        t("title.album", {
          album: album.name,
          artist: getArtists(),
        }),
      );
    }
  }, [album, getArtists, setTitle, t]);

  if (isLoadingAlbum || !album) {
    return <SpotifyPlayableList.HeaderSkeleton />;
  }

  const { images, name, tracks, type, uri } = album;

  return (
    <SpotifyPlayableList.Header
      description=""
      images={images}
      name={name}
      owner={getArtists()}
      total={tracks.total}
      type={type}
      uri={uri}
    />
  );
});
