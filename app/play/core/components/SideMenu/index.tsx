import { Heart, Library } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Box } from "~/play/core/components/Box";

import { SideMenuPlaylists } from "./SideMenuPlaylists";
import { SideMenuTab } from "./SideMenuTab";

export const SideMenu = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <div className="flex flex-col gap-3 h-full py-4">
        <ul className="flex flex-col gap-2 mx-2">
          <SideMenuTab
            icon={<Library />}
            label={t("side_menu.tabs.library")}
            to="/play/library"
          />
          <SideMenuTab
            icon={<Heart />}
            label={t("side_menu.tabs.liked_songs")}
            to="/play/liked-songs"
          ></SideMenuTab>
        </ul>
        <div className="px-6">
          <span className="flex h-[2px] w-full bg-dark-600"></span>
        </div>
        <SideMenuPlaylists />
      </div>
    </Box>
  );
};
