import { Heart, Library } from "lucide-react";

import { Section } from "~/core/components/Section";

import { SideMenuPlaylists } from "./SideMenuPlaylists";
import { SideMenuTab } from "./SideMenuTab";

export const SideMenu = () => {
  return (
    <Section>
      <div className="flex flex-col gap-3 h-full">
        <ul className="flex flex-col gap-1">
          <SideMenuTab to="/library">
            <Library />
            Your Library
          </SideMenuTab>
          <SideMenuTab to="/liked-songs">
            <Heart />
            Liked Songs
          </SideMenuTab>
        </ul>
        <div className="px-4">
          <span className="flex h-[2px] w-full bg-slate-700"></span>
        </div>
        <SideMenuPlaylists />
      </div>
    </Section>
  );
};
