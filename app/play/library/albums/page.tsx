import type { Artist } from "@spotify/web-api-ts-sdk";
import { useCallback } from "react";
import { NavLink } from "react-router";

import { getArtistsString, getSpotifyItemImageUrl } from "~/play/core/utils";

import {
  LibraryCard,
  LibraryCarousel,
  LibraryCarouselSkeleton,
} from "~/play/library/components";

import { useGetCurrentSpotifyUserAlbumsQuery } from "./hooks";

export default function Albums() {
  const { data: albums, isLoading: isLoadingAlbums } =
    useGetCurrentSpotifyUserAlbumsQuery();

  const getAlbumDescription = useCallback(
    (artists: Artist[], releaseDate: string) => {
      return `${getArtistsString(artists)}\n${releaseDate}`;
    },
    [],
  );

  if (isLoadingAlbums || !albums) {
    return <LibraryCarouselSkeleton />;
  }

  return (
    <LibraryCarousel>
      {albums.items.map(({ album }) => {
        const { id, images, name, artists, release_date } = album;

        return (
          <NavLink key={id} to={`/albums/${id}`}>
            <LibraryCard
              img={getSpotifyItemImageUrl(images)}
              key={id}
              title={name}
              subtitle={getAlbumDescription(artists, release_date)}
            />
          </NavLink>
        );
      })}
    </LibraryCarousel>
  );
}
