import { useCallback } from "react";

import { getSpotifyItemImageUrl } from "~/core/utils";

import { LibraryCard, LibraryCarousel } from "~/library/components";

import { useGetCurrentSpotifyUserFollowedArtistsQuery } from "./hooks";

export default function Artists() {
  const { data: artists } = useGetCurrentSpotifyUserFollowedArtistsQuery();

  const getArtistDescription = useCallback(
    (followers: number) => `${followers} followers`,
    [],
  );

  if (!artists) {
    return null;
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
