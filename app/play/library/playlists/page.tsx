import { NavLink } from "react-router";
import { useGetCurrentSpotifyUserPlaylistsQuery } from "~/play/core/hooks";
import { getSpotifyItemImageUrl } from "~/play/core/utils";

import {
  LibraryCard,
  LibraryCarousel,
  LibraryCarouselSkeleton,
} from "~/play/library/components";

export default function Library() {
  const { data: userPlaylists, isLoading: isLoadingPlaylists } =
    useGetCurrentSpotifyUserPlaylistsQuery();

  if (isLoadingPlaylists || !userPlaylists) {
    return <LibraryCarouselSkeleton />;
  }

  return (
    <LibraryCarousel>
      {userPlaylists.items.map(({ description, id, images, name }) => (
        <NavLink key={id} to={`/playlists/${id}`}>
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
