import { Heart, Library } from "lucide-react";

import { Box } from "~/core/components/Box";

import { SideMenuPlaylists } from "./SideMenuPlaylists";
import { SideMenuTab } from "./SideMenuTab";

export const SideMenu = () => {
  return (
    <Box>
      <div className="flex flex-col gap-3 h-full py-4">
        <ul className="flex flex-col gap-2 mx-2">
          <SideMenuTab to="/library">
            <Library />
            Your Library
          </SideMenuTab>
          <SideMenuTab to="/liked-songs">
            <Heart />
            Liked Songs
          </SideMenuTab>
        </ul>
        <div className="px-6">
          <span className="flex h-[2px] w-full bg-dark-600"></span>
        </div>
        <SideMenuPlaylists />
      </div>
    </Box>
  );
};
