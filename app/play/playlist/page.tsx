import {
  SpotifyPlayableList,
  SpotifyPlayableListSkeleton,
} from "~/play/core/components";

import type { Route } from "./+types/page";

import { useGetSpotifyPlaylistQuery } from "./hooks";

export default function Playlist({ params }: Route.ComponentProps) {
  const { playlistId } = params;

  const { data: playlist, isLoading: isLoadingPlaylist } =
    useGetSpotifyPlaylistQuery(playlistId);

  if (isLoadingPlaylist || !playlist) {
    return <SpotifyPlayableListSkeleton hasAlbum />;
  }

  const { description, images, name, owner, tracks, type, uri } = playlist;

  return (
    <SpotifyPlayableList
      hasAlbum
      description={description}
      images={images}
      name={name}
      owner={owner.display_name}
      tracks={tracks}
      type={type}
      uri={uri}
    />
  );
}
