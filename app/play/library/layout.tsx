import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";

import { useDocumentTitle } from "~/play/core/hooks";

import { LibraryTab } from "~/play/library/components";
import type { ILibraryTab } from "~/play/library/models";

const LIBRARY_TABS: ILibraryTab[] = [
  {
    label: "library.tabs.playlists",
    path: "/play/library/playlists",
  },
  {
    label: "library.tabs.artists",
    path: "/play/library/artists",
  },
  {
    label: "library.tabs.albums",
    path: "/play/library/albums",
  },
];

export default function LibraryLayout() {
  const { t } = useTranslation();
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle(t("title.default"));
  }, [setTitle, t]);

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
