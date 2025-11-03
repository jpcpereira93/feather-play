import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  SpotifyPlayableList,
  SpotifyPlayableListSkeleton,
} from "~/play/core/components";
import { useDocumentTitle } from "~/play/core/hooks";
import { getArtistsString } from "~/play/core/utils";

import type { Route } from "./+types/page";

import { useGetSpotifyAlbumQuery } from "./hooks";

export default function Album({ params }: Route.ComponentProps) {
  const { albumId } = params;

  const { t } = useTranslation();
  const { setTitle } = useDocumentTitle();

  const { data: album, isLoading: isLoadingPlaylist } =
    useGetSpotifyAlbumQuery(albumId);

  useEffect(() => {
    if (album) {
      setTitle(
        t("title.album", {
          album: album.name,
          artist: getArtistsString(album.artists),
        }),
      );
    }
  }, [album, setTitle, t]);

  if (isLoadingPlaylist || !album) {
    return <SpotifyPlayableListSkeleton />;
  }

  const { artists, images, name, tracks, type, uri } = album;

  return (
    <SpotifyPlayableList
      description={""}
      images={images}
      name={name}
      owner={getArtistsString(artists)}
      total={tracks.total}
      tracks={tracks.items}
      type={type}
      uri={uri}
    />
  );
}
