import { useGetCurrentSpotifyUserPlaylistsQuery } from "~/core/hooks";
import { getSpotifyItemImageUrl } from "~/core/utils";

import { LibraryCard } from "~/library/components";

export default function Library() {
  const { data: userPlaylists } = useGetCurrentSpotifyUserPlaylistsQuery();

  if (!userPlaylists) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full px-4 gap-4 overflow-scroll">
      {userPlaylists.items.map(({ description, id, images, name }) => (
        <LibraryCard
          key={id}
          img={getSpotifyItemImageUrl(images)}
          subtitle={description}
          title={name}
        />
      ))}
    </div>
  );
}
