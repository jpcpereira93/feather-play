import type { SimplifiedAlbum } from "@spotify/web-api-ts-sdk";
import classNames from "classnames";
import { AudioLines, Play } from "lucide-react";
import { useState } from "react";

import { msToMinAndSec } from "~/core/utils";

interface SpotifyPlayableListTableRowProps {
  album: SimplifiedAlbum;
  duration: number; // in ms
  id: string;
  index: number;
  isCurrentPlayingTrack: boolean;
  name: string;
  onPlay: (uri: string) => void;
  uri: string;
}

export const SpotifyPlayableListTableRow = ({
  album,
  duration,
  index,
  isCurrentPlayingTrack,
  name,
  onPlay,
  uri,
}: SpotifyPlayableListTableRowProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const onDoubleClick = () => onPlay(uri);

  const onMouseEnter = () => setIsHovering(true);

  const onMouseLeave = () => setIsHovering(false);

  return (
    <tr
      className={classNames(
        "h-15 text-sm tracking-tight hover:cursor-pointer hover:bg-slate-700",
        { "bg-slate-700": isCurrentPlayingTrack },
      )}
      onDoubleClick={onDoubleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <td className="rounded-l-lg text-center">
        {isCurrentPlayingTrack || isHovering ? (
          <span className="flex items-center justify-center text-slate-300">
            {isHovering ? (
              <Play fill="currentColor" size={14} onClick={onDoubleClick} />
            ) : (
              <AudioLines size={14} />
            )}
          </span>
        ) : (
          <span>{index + 1}</span>
        )}
      </td>
      <td>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-slate-300">{name}</p>
          <p className="text-xs">{name}</p>
        </div>
      </td>
      <td className="font-semibold">{album.name}</td>
      <td className="rounded-r-lg">{msToMinAndSec(duration)}</td>
    </tr>
  );
};

export const SpotifyPlayableListTableRowSkeleton = () => (
  <tr className="h-15 text-sm text-transparent tracking-tight">
    <td className="rounded-l-lg text-center">
      <span className="rounded-lg bg-slate-700">10</span>
    </td>
    <td>
      <div className="flex flex-col gap-1">
        <p className="font-semibold">
          <span className="rounded-lg bg-slate-700">Music name</span>
        </p>
        <p className="text-xs">
          <span className="rounded-lg bg-slate-700">Artist name</span>
        </p>
      </div>
    </td>
    <td className="font-semibold">
      <span className="rounded-lg bg-slate-700">Album name</span>
    </td>
    <td className="rounded-r-lg">
      <span className="rounded-lg bg-slate-700">3:00</span>
    </td>
  </tr>
);
