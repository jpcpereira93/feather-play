import { NavLink } from "react-router";
import { useGetCurrentSpotifyUserPlaylistsQuery } from "~/play/core/hooks";
import { getSpotifyItemImageUrl } from "~/play/core/utils";

import {
  LibraryCard,
  LibraryCarousel,
  LibraryCarouselSkeleton,
} from "~/play/library/components";

export default function Library() {
  const {
    data: userPlaylists,
    fetchNextPage: fetchUserPlaylistsNextPage,
    isFetchingNextPage: isFetchingUserPlaylistsNextPage,
    isLoading: isLoadingPlaylists,
  } = useGetCurrentSpotifyUserPlaylistsQuery();

  const onLoadMore = () => {
    if (!isFetchingUserPlaylistsNextPage) {
      fetchUserPlaylistsNextPage();
    }
  };

  if (isLoadingPlaylists || !userPlaylists) {
    return <LibraryCarouselSkeleton />;
  }

  return (
    <LibraryCarousel onLoadMore={onLoadMore}>
      {userPlaylists.items.map(({ description, id, images, name }) => (
        <NavLink key={id} to={`/play/playlists/${id}`} prefetch="intent">
          <LibraryCard
            img={getSpotifyItemImageUrl(images)}
            subtitle={description}
            title={name}
          />
        </NavLink>
      ))}
    </LibraryCarousel>
  );
}
