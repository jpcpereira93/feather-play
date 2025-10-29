import {
  SpotifyPlayableList,
  SpotifyPlayableListSkeleton,
} from "~/core/components";
import { getArtistsString } from "~/core/utils";

import type { Route } from "./+types/page";

import { useGetSpotifyAlbumQuery } from "./hooks";

export default function Album({ params }: Route.ComponentProps) {
  const { albumId } = params;

  const { data: album, isLoading: isLoadingPlaylist } =
    useGetSpotifyAlbumQuery(albumId);

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
      tracks={tracks}
      type={type}
      uri={uri}
    />
  );
}
