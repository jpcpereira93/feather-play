import type { Image } from "@spotify/web-api-ts-sdk";
import { Heart, Library } from "lucide-react";

import { Section } from "~/core/components/Section";
import { useGetCurrentSpotifyUserPlaylistsQuery } from "~/core/hooks";

import { SideMenuTab } from "./SideMenuTab";

export const SideMenu = () => {
  const { data: userPlaylists } = useGetCurrentSpotifyUserPlaylistsQuery();

  const getPlaylistImageUri = (images: Image[]) => {
    return images[0].url;
  };

  return (
    <Section>
      <div className="flex flex-col gap-3 h-full">
        <ul className="flex flex-col gap-1">
          <SideMenuTab active>
            <Library />
            Your Library
          </SideMenuTab>
          <SideMenuTab>
            <Heart />
            Liked Songs
          </SideMenuTab>
        </ul>
        <div className="px-4">
          <span className="flex h-[2px] w-full bg-slate-700"></span>
        </div>
        {userPlaylists && (
          <ul className="flex flex-col h-full gap-1 overflow-scroll">
            {userPlaylists.items.map(({ id, images, name }) => (
              <SideMenuTab key={id}>
                <div className="h-8 w-8 rounded overflow-hidden">
                  {images && images.length > 0 && (
                    <img src={getPlaylistImageUri(images)} alt={name} />
                  )}
                </div>
                {name}
              </SideMenuTab>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
};
