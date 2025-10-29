import {
  SpotifyPlayableList,
  SpotifyPlayableListSkeleton,
} from "~/core/components";

import type { Route } from "./+types/page";

import { useGetSpotifyPlaylistQuery } from "./hooks";

export default function Playlist({ params }: Route.ComponentProps) {
  const { playlistId } = params;

  const { data: playlist, isLoading: isLoadingPlaylist } =
    useGetSpotifyPlaylistQuery(playlistId);

  if (isLoadingPlaylist || !playlist) {
    return <SpotifyPlayableListSkeleton />;
  }

  const { description, images, name, owner, tracks, type, uri } = playlist;

  return (
    <SpotifyPlayableList
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
