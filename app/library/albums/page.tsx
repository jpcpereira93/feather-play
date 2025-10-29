import type { Artist } from "@spotify/web-api-ts-sdk";
import { useCallback } from "react";

import { getSpotifyItemImageUrl } from "~/core/utils";

import { LibraryCard, LibraryCarousel } from "~/library/components";

import { useGetCurrentSpotifyUserAlbumsQuery } from "./hooks";

export default function Albums() {
  const { data: albums } = useGetCurrentSpotifyUserAlbumsQuery();

  const getAlbumDescription = useCallback(
    (artists: Artist[], releaseDate: string) => {
      let description = artists[0].name;

      if (artists.length > 1) {
        description += ` feat ${artists
          .slice(1)
          .map(({ name }) => name)
          .join(",")}`;
      }

      return `${description}\n${releaseDate}`;
    },
    [],
  );

  if (!albums) {
    return null;
  }

  return (
    <LibraryCarousel>
      {albums.items.map(({ album }) => {
        const { id, images, name, artists, release_date } = album;

        return (
          <LibraryCard
            img={getSpotifyItemImageUrl(images)}
            key={id}
            title={name}
            subtitle={getAlbumDescription(artists, release_date)}
          />
        );
      })}
    </LibraryCarousel>
  );
}
