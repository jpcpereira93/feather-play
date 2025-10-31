import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";

import { LibraryTab } from "~/play/library/components";
import type { ILibraryTab } from "~/play/library/models";

const LIBRARY_TABS: ILibraryTab[] = [
  {
    label: "library.tabs.playlists",
    path: "/library/playlists",
  },
  {
    label: "library.tabs.artists",
    path: "/library/artists",
  },
  {
    label: "library.tabs.albums",
    path: "/library/albums",
  },
];

export default function LibraryLayout() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex gap-2 px-8 py-4">
        {LIBRARY_TABS.map(({ label, path }) => (
          <LibraryTab key={path} to={path}>
            {t(label)}
          </LibraryTab>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
