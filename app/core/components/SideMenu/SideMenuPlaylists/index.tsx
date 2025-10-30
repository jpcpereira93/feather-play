import { useMemo } from "react";

import { useGetCurrentSpotifyUserPlaylistsQuery } from "~/core/hooks";
import { getPlaceholderArray, getSpotifyItemImageUrl } from "~/core/utils";

import { SideMenuTab, SideMenuTabSkeleton } from "../SideMenuTab";

export const SideMenuPlaylists = () => {
  const { data: userPlaylists, isLoading: isLoadingUserPlaylists } =
    useGetCurrentSpotifyUserPlaylistsQuery();

  const placeholder = useMemo(() => getPlaceholderArray(20), []);

  if (isLoadingUserPlaylists || !userPlaylists) {
    return placeholder.map((value) => <SideMenuTabSkeleton key={value} />);
  }

  return (
    <ul className="flex flex-col h-full px-2 gap-2 overflow-scroll">
      {userPlaylists.items.map(({ id, images, name }) => (
        <SideMenuTab key={id} to={`/playlists/${id}`}>
          <div className="h-6 w-6 rounded overflow-hidden">
            {images && images.length > 0 && (
              <img src={getSpotifyItemImageUrl(images)} alt={name} />
            )}
          </div>
          {name}
        </SideMenuTab>
      ))}
    </ul>
  );
};
