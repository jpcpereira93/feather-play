import {
  SpotifyPlayableList,
  SpotifyPlayableListSkeleton,
} from "~/play/core/components";

import type { Route } from "./+types/page";

import {
  useGetSpotifyPlaylistItemsQuery,
  useGetSpotifyPlaylistQuery,
} from "./hooks";

export default function Playlist({ params }: Route.ComponentProps) {
  const { playlistId } = params;

  const { data: playlist, isLoading: isLoadingPlaylist } =
    useGetSpotifyPlaylistQuery(playlistId);
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

  if (
    isLoadingPlaylist ||
    isLoadingPlaylistTracks ||
    !playlist ||
    !playlistTracks
  ) {
    return <SpotifyPlayableListSkeleton hasAlbum />;
  }

  const { description, images, name, owner, type, uri } = playlist;

  return (
    <SpotifyPlayableList
      hasAlbum
      description={description}
      images={images}
      name={name}
      onLoadMore={onLoadMore}
      owner={owner.display_name}
      total={playlistTracks.total}
      tracks={playlistTracks.items}
      type={type}
      uri={uri}
    />
  );
}
