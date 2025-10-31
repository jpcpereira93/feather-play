import { useCallback } from "react";

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
        <LibraryCard
          img={getSpotifyItemImageUrl(images)}
          key={id}
          title={name}
          subtitle={getArtistDescription(followers.total)}
        />
      ))}
    </LibraryCarousel>
  );
}
