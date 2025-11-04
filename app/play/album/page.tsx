import { SpotifyPlayableList } from "~/play/core/components";
import type { Route } from "./+types/page";
import { AlbumHeader, AlbumTable } from "./components";

export default function Album({ params }: Route.ComponentProps) {
  const { albumId } = params;

  return (
    <SpotifyPlayableList>
      <AlbumHeader albumId={albumId} />
      <AlbumTable albumId={albumId} />
    </SpotifyPlayableList>
  );
}
