import type {
  Image,
  Page,
  SavedTrack,
  SimplifiedTrack,
  Track,
} from "@spotify/web-api-ts-sdk";
import { Play } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { usePlaySpotifyItemMutation } from "~/core/hooks";
import { getSpotifyItemImageUrl } from "~/core/utils";

import {
  SpotifyPlayableListTable,
  SpotifyPlayableListTableSkeleton,
} from "./SpotifyPlayableListTable";

interface SpotifyPlayableListProps {
  description: string;
  hasAlbum?: boolean;
  images: Image[];
  name: string;
  owner: string;
  uri: string;
  tracks: Page<{ track: Track | SimplifiedTrack } | SavedTrack>;
  type: string;
}

export const SpotifyPlayableList = ({
  description,
  hasAlbum,
  images,
  name,
  owner,
  uri,
  tracks,
  type,
}: SpotifyPlayableListProps) => {
  const { mutate: mutatePlaySpotifyItem } = usePlaySpotifyItemMutation();

  const [backgroundColor, setBackgroundColor] = useState<string>();

  const getImgSrc = useCallback(() => getSpotifyItemImageUrl(images), [images]);

  const onPlayClick = () => mutatePlaySpotifyItem({ uri });

  const onPlayTrack = (uri: string) => mutatePlaySpotifyItem({ uris: [uri] });

  useEffect(() => {
    const context = document.createElement("canvas").getContext("2d");

    const imgObj = new Image();
    imgObj.src = getImgSrc();
    imgObj.setAttribute("crossOrigin", "");

    imgObj.onload = () => {
      if (context) {
        context.drawImage(imgObj, 0, 0, 1, 1);
        const i = context.getImageData(0, 0, 1, 1).data;

        const rgba = `rgba(${i[0]},${i[1]},${i[2]},${i[3]})`;

        setBackgroundColor(rgba);
      }
    };
  }, [getImgSrc]);

  return (
    <div className="h-full w-full flex flex-col gap-6">
      <div
        className="flex h-50 w-full p-4 box-border"
        style={{
          background: `linear-gradient(180deg, ${backgroundColor}, transparent)`,
        }}
      >
        <div className="flex h-full w-full items-center justify-between">
          <div className="flex h-full w-4/5 gap-6">
            <div className="h-40 w-40 rounded-lg overflow-hidden">
              <img src={getImgSrc()} alt={name}></img>
            </div>
            <div className="flex flex-col justify-between  overflow-hidden">
              <h2 className="capitalize font-semibold">{type}</h2>
              <div className="flex flex-col gap-1 w-full">
                <h1 className="text-7xl font-black text-dark-300 truncate overflow-hidden">
                  {name}
                </h1>
                <p className="text-sm">{description}</p>
              </div>
              <p className="flex items-center gap-1 text-sm">
                <span className="font-semibold text-dark-300">{owner}</span>•
                <span>{tracks.total} tracks</span>
              </p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center">
            <button
              className="bg-dark-400 text-dark-600 rounded-full p-6 hover:cursor-pointer hover:bg-dark-300"
              onClick={onPlayClick}
              type="button"
            >
              <Play fill="currentColor" size={40} />
            </button>
          </div>
        </div>
      </div>
      <SpotifyPlayableListTable
        hasAlbum={hasAlbum}
        tracks={tracks}
        onPlayTrack={onPlayTrack}
      />
    </div>
  );
};

export const SpotifyPlayableListSkeleton = ({
  hasAlbum,
}: {
  hasAlbum?: boolean;
}) => (
  <div className="h-full w-full flex flex-col pt-4 gap-6">
    <div className="flex h-40 w-full items-center px-4">
      <div className="flex h-full w-4/5 gap-6">
        <div className="h-40 w-40 rounded-lg bg-dark-600"></div>
        <div className="flex flex-col justify-between ">
          <h2 className="font-semibold text-transparent bg-dark-600 rounded-lg">
            Placeholder
          </h2>
          <div className="flex flex-col gap-1">
            <h1 className="text-7xl font-black text-transparent bg-dark-600 rounded-lg">
              Track name
            </h1>
            <p className="text-sm text-transparent bg-dark-600 rounded-lg">
              Placeholder description
            </p>
          </div>
          <p className="flex items-center gap-1 text-sm">
            <span className="font-semibold text-transparent bg-dark-600 rounded-lg">
              Owner Name • xx tracks
            </span>
          </p>
        </div>
      </div>
    </div>
    <SpotifyPlayableListTableSkeleton hasAlbum={hasAlbum} />
  </div>
);
