import React from "react";

import { SpotifyPlayableList } from "~/play/core/components";

import { useGetSpotifyPlaylistItemsQuery } from "~/play/playlist/hooks";

interface PlaylistTableProps {
  playlistId: string;
}

export const PlaylistTable = React.memo(
  ({ playlistId }: PlaylistTableProps) => {
    const {
      data: playlistTracks,
      fetchNextPage: fetchPlaylistTracksNextPage,
      isFetchingNextPage: isFetchingPlaylistTracksNextPage,
      isLoading: isLoadingPlaylistTracks,
    } = useGetSpotifyPlaylistItemsQuery(playlistId);

    const onLoadMore = () => {
      if (!isFetchingPlaylistTracksNextPage) {
        fetchPlaylistTracksNextPage();
      }
    };

    if (isLoadingPlaylistTracks || !playlistTracks) {
      return <SpotifyPlayableList.TableSkeleton hasAlbum />;
    }

    return (
      <SpotifyPlayableList.Table
        hasAlbum
        onEndReached={onLoadMore}
        tracks={playlistTracks.items}
      />
    );
  },
);
