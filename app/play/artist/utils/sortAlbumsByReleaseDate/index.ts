import type { SimplifiedAlbum } from "@spotify/web-api-ts-sdk";

export const sortAlbumsByMostRecent = (albums: SimplifiedAlbum[]) =>
  albums.sort((a, b) => b.release_date.localeCompare(a.release_date));
