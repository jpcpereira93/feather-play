import type {
  Image,
  Page,
  PlaylistedTrack,
  Track,
} from "@spotify/web-api-ts-sdk";
import { Play } from "lucide-react";
import { useCallback } from "react";

import { useSpotifyPlayerContext } from "~/core/context";
import { usePlaySpotifyItem } from "~/core/hooks";
import { getSpotifyItemImageUrl } from "~/core/utils";

import { SpotifyPlayableListItem } from "./SpotifyPlayableListItem";

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
  const { currentTrackId, isPlaying } = useSpotifyPlayerContext();

  const { mutate: mutatePlaySpotifyItem } = usePlaySpotifyItem();

  const getImgSrc = useCallback(() => getSpotifyItemImageUrl(images), [images]);

  const onPlayClick = () => mutatePlaySpotifyItem({ uri });

  const onPlayTrack = (uri: string) => mutatePlaySpotifyItem({ uris: [uri] });

  return (
    <div className="h-full w-full flex flex-col p-4 gap-6">
      <div className="flex h-40 w-full items-center">
        <div className="flex h-full w-4/5 gap-6">
          <div className="h-40 w-40 rounded-lg overflow-hidden">
            <img src={getImgSrc()} alt={name}></img>
          </div>
          <div className="flex flex-col justify-between p-2 tracking-tight">
            <h2 className="capitalize font-semibold">{type}</h2>
            <div className="gap-2">
              <h1 className="text-7xl font-black text-slate-300">{name}</h1>
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
      <div className="overflow-auto">
        <table className="w-full">
          <thead className="text-sm sticky z-2 top-0 bg-slate-800 h-15">
            <tr>
              <th className="font-medium w-14 rounded-l-lg">#</th>
              <th className="font-medium text-left">Title</th>
              <th className="font-medium text-left">Album</th>
              <th className="font-medium text-left w-20 rounded-r-lg">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {tracks.items.map(({ track }, index) => {
              const { album, duration_ms, id, name, uri } = track;

              return (
                <SpotifyPlayableListItem
                  album={album}
                  duration={duration_ms}
                  id={id}
                  index={index}
                  isCurrentPlayingTrack={id === currentTrackId && isPlaying}
                  key={id}
                  name={name}
                  onPlay={onPlayTrack}
                  uri={uri}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
