import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { SpotifyPlayableList } from "~/play/core/components";
import { useDocumentTitle } from "~/play/core/hooks";

import { useGetSpotifyPlaylistQuery } from "~/play/playlist/hooks";

interface PlaylistHeaderProps {
  playlistId: string;
}

export const PlaylistHeader = React.memo(
  ({ playlistId }: PlaylistHeaderProps) => {
    const { setTitle } = useDocumentTitle();
    const { t } = useTranslation();

    const { data: playlist, isLoading: isLoadingPlaylist } =
      useGetSpotifyPlaylistQuery(playlistId);

    useEffect(() => {
      if (playlist) {
        setTitle(
          t("title.playlist", {
            playlist: playlist.name,
            owner: playlist.owner.display_name,
          }),
        );
      }
    }, [playlist, setTitle, t]);

    if (isLoadingPlaylist || !playlist) {
      return <SpotifyPlayableList.HeaderSkeleton />;
    }

    const { description, images, name, owner, type, uri } = playlist;

    return (
      <SpotifyPlayableList.Header
        description={description}
        images={images}
        name={name}
        owner={owner.display_name}
        total={0}
        type={type}
        uri={uri}
      />
    );
  },
);
