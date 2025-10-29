import { useGetCurrentSpotifyUserPlaylistsQuery } from "~/core/hooks";
import { getSpotifyItemImageUrl } from "~/core/utils";

import {
  LibraryCard,
  LibraryCarousel,
  LibraryCarouselSkeleton,
} from "~/library/components";

export default function Library() {
  const { data: userPlaylists, isLoading: isLoadingPlaylists } =
    useGetCurrentSpotifyUserPlaylistsQuery();

  if (isLoadingPlaylists || !userPlaylists) {
    return <LibraryCarouselSkeleton />;
  }

  return (
    <LibraryCarousel>
      {userPlaylists.items.map(({ description, id, images, name }) => (
        <LibraryCard
          key={id}
          img={getSpotifyItemImageUrl(images)}
          subtitle={description}
          title={name}
        />
      ))}
    </LibraryCarousel>
  );
}
