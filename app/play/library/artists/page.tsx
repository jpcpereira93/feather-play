import { useCallback } from "react";
import { NavLink } from "react-router";

import { getSpotifyItemImageUrl } from "~/play/core/utils";

import {
  LibraryCard,
  LibraryCarousel,
  LibraryCarouselSkeleton,
} from "~/play/library/components";

import { useGetCurrentSpotifyUserFollowedArtistsQuery } from "./hooks";

export default function Artists() {
  const { data: artists, isLoading: isLoadingArtists } =
    useGetCurrentSpotifyUserFollowedArtistsQuery();

  const getArtistDescription = useCallback(
    (followers: number) => `${followers} followers`,
    [],
  );

  if (isLoadingArtists || !artists) {
    return <LibraryCarouselSkeleton />;
  }

  return (
    <LibraryCarousel>
      {artists.items.map(({ followers, id, images, name }) => (
        <NavLink key={id} to={`/play/artists/${id}`} prefetch="intent">
          <LibraryCard
            img={getSpotifyItemImageUrl(images)}
            key={id}
            title={name}
            subtitle={getArtistDescription(followers.total)}
          />
        </NavLink>
      ))}
    </LibraryCarousel>
  );
}
