import type {
  Artist,
  SimplifiedAlbum,
  SimplifiedArtist,
} from "@spotify/web-api-ts-sdk";
import classNames from "classnames";
import { AudioLines, Play } from "lucide-react";
import { useState } from "react";

import { NavigableAlbum } from "~/core/components";
import { getArtistsString, msToMinAndSec } from "~/core/utils";

interface SpotifyPlayableListTableRowProps {
  album?: SimplifiedAlbum;
  artists: Artist[] | SimplifiedArtist[];
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
  artists,
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
        "h-15 text-sm  hover:cursor-pointer hover:bg-dark-600",
        { "bg-dark-600": isCurrentPlayingTrack },
      )}
      onDoubleClick={onDoubleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <td className="rounded-l-lg text-center">
        {isCurrentPlayingTrack || isHovering ? (
          <span className="flex items-center justify-center text-dark-300">
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
          <p className="font-semibold text-dark-300">{name}</p>
          <p className="text-xs">{getArtistsString(artists)}</p>
        </div>
      </td>
      {album && (
        <td className="font-semibold hover:underline">
          <NavigableAlbum id={album.id}>{album.name}</NavigableAlbum>
        </td>
      )}
      <td className="rounded-r-lg">{msToMinAndSec(duration)}</td>
    </tr>
  );
};

export const SpotifyPlayableListTableRowSkeleton = ({
  hasAlbum,
}: {
  hasAlbum?: boolean;
}) => (
  <tr className="h-15 text-sm text-transparent ">
    <td className="rounded-l-lg text-center">
      <span className="rounded-lg bg-dark-600">10</span>
    </td>
    <td>
      <div className="flex flex-col gap-1">
        <p className="font-semibold">
          <span className="rounded-lg bg-dark-600">Music name 123</span>
        </p>
        <p className="text-xs">
          <span className="rounded-lg bg-dark-600">Artist name</span>
        </p>
      </div>
    </td>
    {hasAlbum && (
      <td className="font-semibold">
        <span className="rounded-lg bg-dark-600">Album name Album name</span>
      </td>
    )}
    <td className="rounded-r-lg">
      <span className="rounded-lg bg-dark-600">3:00</span>
    </td>
  </tr>
);
