import { useMemo } from "react";

import { useGetCurrentSpotifyUserPlaylistsQuery } from "~/play/core/hooks";
import {
  getPlaceholderArray,
  getSpotifyItemImageUrl,
  handleInfiniteScroll,
} from "~/play/core/utils";

import { SideMenuTab, SideMenuTabSkeleton } from "../SideMenuTab";

export const SideMenuPlaylists = () => {
  const {
    data: userPlaylists,
    fetchNextPage: fetchUserPlaylistsNextPage,
    isFetchingNextPage: isFetchingUserPlaylistsNextPage,
    isLoading: isLoadingPlaylists,
  } = useGetCurrentSpotifyUserPlaylistsQuery();

  const placeholder = useMemo(() => getPlaceholderArray(20), []);

  const onScroll = (event: React.UIEvent<HTMLUListElement>) => {
    handleInfiniteScroll(event, loadMore, 100);
  };

  const loadMore = () => {
    if (!isFetchingUserPlaylistsNextPage) {
      fetchUserPlaylistsNextPage();
    }
  };

  if (isLoadingPlaylists || !userPlaylists) {
    return placeholder.map((value) => <SideMenuTabSkeleton key={value} />);
  }

  return (
    <ul
      className="flex flex-col h-full px-2 gap-2 overflow-scroll"
      onScroll={onScroll}
    >
      {userPlaylists.items.map(({ id, images, name }) => (
        <SideMenuTab
          icon={
            <div className="h-6 w-6 rounded overflow-hidden">
              {images && images.length > 0 && (
                <img src={getSpotifyItemImageUrl(images)} alt={name} />
              )}
            </div>
          }
          key={id}
          label={name}
          to={`/play/playlists/${id}`}
        />
      ))}
    </ul>
  );
};
