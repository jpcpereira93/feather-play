import type {
  Image,
  Page,
  PlaylistedTrack,
  Track,
} from "@spotify/web-api-ts-sdk";
import { Play } from "lucide-react";
import { useCallback } from "react";

import { usePlaySpotifyItem } from "~/core/hooks";
import { getSpotifyItemImageUrl } from "~/core/utils";

import {
  SpotifyPlayableListTable,
  SpotifyPlayableListTableSkeleton,
} from "./SpotifyPlayableListTable";

interface SpotifyPlayableListProps {
  description: string;
  images: Image[];
  name: string;
  owner: string;
  uri: string;
  tracks: Page<PlaylistedTrack<Track>>;
  type: string;
}

export const SpotifyPlayableList = ({
  description,
  images,
  name,
  owner,
  uri,
  tracks,
  type,
}: SpotifyPlayableListProps) => {
  const { mutate: mutatePlaySpotifyItem } = usePlaySpotifyItem();

  const getImgSrc = useCallback(() => getSpotifyItemImageUrl(images), [images]);

  const onPlayClick = () => mutatePlaySpotifyItem({ uri });

  const onPlayTrack = (uri: string) => mutatePlaySpotifyItem({ uris: [uri] });

  return (
    <div className="h-full w-full flex flex-col p-4 gap-6">
      <div className="flex h-40 w-full items-center justify-between">
        <div className="flex h-full w-4/5 gap-6">
          <div className="h-40 w-40 rounded-lg overflow-hidden">
            <img src={getImgSrc()} alt={name}></img>
          </div>
          <div className="flex flex-col justify-between tracking-tight overflow-hidden">
            <h2 className="capitalize font-semibold">{type}</h2>
            <div className="flex flex-col gap-1 w-full">
              <h1 className="text-7xl font-black text-slate-300 truncate overflow-hidden">
                {name}
              </h1>
              <p className="text-sm">{description}</p>
            </div>
            <p className="flex items-center gap-1 text-sm">
              <span className="font-semibold text-slate-300">{owner}</span>•
              <span>{tracks.total} tracks</span>
            </p>
          </div>
        </div>
        <div className="flex h-full items-center justify-center">
          <button
            className="bg-slate-400 text-slate-700 rounded-full p-6 hover:cursor-pointer hover:bg-slate-300"
            onClick={onPlayClick}
            type="button"
          >
            <Play fill="currentColor" size={40} />
          </button>
        </div>
      </div>
      <SpotifyPlayableListTable tracks={tracks} onPlayTrack={onPlayTrack} />
    </div>
  );
};

export const SpotifyPlayableListSkeleton = () => (
  <div className="h-full w-full flex flex-col p-4 gap-6">
    <div className="flex h-40 w-full items-center">
      <div className="flex h-full w-4/5 gap-6">
        <div className="h-40 w-40 rounded-lg bg-slate-700"></div>
        <div className="flex flex-col justify-between tracking-tight">
          <h2 className="font-semibold text-transparent bg-slate-700 rounded-lg">
            Placeholder
          </h2>
          <div className="flex flex-col gap-1">
            <h1 className="text-7xl font-black text-transparent bg-slate-700 rounded-lg">
              Track name
            </h1>
            <p className="text-sm text-transparent bg-slate-700 rounded-lg">
              Placeholder description
            </p>
          </div>
          <p className="flex items-center gap-1 text-sm">
            <span className="font-semibold text-transparent bg-slate-700 rounded-lg">
              Owner Name • xx tracks
            </span>
          </p>
        </div>
      </div>
    </div>
    <SpotifyPlayableListTableSkeleton />
  </div>
);
