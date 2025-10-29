import { SpotifyPlayableList } from "~/core/components";
import type { Route } from "./+types/page";

import { useGetSpotifyPlaylistQuery } from "./hooks";

export default function Playlist({ params }: Route.ComponentProps) {
  const { playlistId } = params;

  const { data } = useGetSpotifyPlaylistQuery(playlistId);

  if (!data) {
    return null;
  }

  const { description, images, name, owner, tracks, type, uri } = data;

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
