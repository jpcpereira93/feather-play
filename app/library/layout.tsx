import { Outlet } from "react-router";

import { LibraryTab } from "~/library/components";

export default function LibraryLayout() {
  return (
    <div className="flex flex-col h-full gap-6">
      <div className="flex gap-2 px-4 py-2">
        <LibraryTab to="/library/playlists">Playlists</LibraryTab>
        <LibraryTab to="/library/artists">Artists</LibraryTab>
        <LibraryTab to="/library/albums">Albums</LibraryTab>
      </div>
      <Outlet />
    </div>
  );
}
