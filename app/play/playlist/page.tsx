import { SpotifyPlayableList } from "~/play/core/components";

import type { Route } from "./+types/page";
import { PlaylistHeader, PlaylistTable } from "./components";

export default function Playlist({ params }: Route.ComponentProps) {
  const { playlistId } = params;

  return (
    <SpotifyPlayableList>
      <PlaylistHeader playlistId={playlistId} />
      <PlaylistTable playlistId={playlistId} />
    </SpotifyPlayableList>
  );
}
