import React from "react";

import { useGetSpotifyAlbumTracksQuery } from "~/play/album/hooks";
import { SpotifyPlayableList } from "~/play/core/components";

interface AlbumTableProps {
  albumId: string;
}

export const AlbumTable = React.memo(({ albumId }: AlbumTableProps) => {
  const {
    data: albumTracks,
    fetchNextPage: fetchAlbumTracksNextPage,
    isFetchingNextPage: isFetchingAlbumTracksNextPage,
    isLoading: isLoadingAlbumTracks,
  } = useGetSpotifyAlbumTracksQuery(albumId);

  const onLoadMore = () => {
    if (!isFetchingAlbumTracksNextPage) {
      fetchAlbumTracksNextPage();
    }
  };

  if (isLoadingAlbumTracks || !albumTracks) {
    return <SpotifyPlayableList.TableSkeleton />;
  }

  return (
    <SpotifyPlayableList.Table
      onEndReached={onLoadMore}
      tracks={albumTracks.items}
    />
  );
});
