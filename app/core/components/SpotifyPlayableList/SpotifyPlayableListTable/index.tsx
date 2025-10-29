import type { Page, PlaylistedTrack, Track } from "@spotify/web-api-ts-sdk";

import { useSpotifyPlayerContext } from "~/core/context";
import { getPlaceholderArray } from "~/core/utils";
import {
  SpotifyPlayableListTableRow,
  SpotifyPlayableListTableRowSkeleton,
} from "./SpotifyPlayableListTableRow";

interface SpotifyPlayableListTableProps {
  tracks: Page<PlaylistedTrack<Track>>;
  onPlayTrack: (uri: string) => void;
}

const SpotifyPlayableListTableHead = () => (
  <thead className="text-sm sticky z-2 top-0 bg-slate-800 h-15">
    <tr>
      <th className="font-medium w-14 rounded-l-lg">#</th>
      <th className="font-medium text-left">Title</th>
      <th className="font-medium text-left">Album</th>
      <th className="font-medium text-left w-20 rounded-r-lg">Duration</th>
    </tr>
  </thead>
);

export const SpotifyPlayableListTable = ({
  tracks,
  onPlayTrack,
}: SpotifyPlayableListTableProps) => {
  const { currentTrackId, isPlaying } = useSpotifyPlayerContext();

  return (
    <div className="overflow-auto">
      <table className="w-full">
        <SpotifyPlayableListTableHead />
        <tbody>
          {tracks.items.map(({ track }, index) => {
            const { album, duration_ms, id, name, uri } = track;

            return (
              <SpotifyPlayableListTableRow
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
  );
};

export const SpotifyPlayableListTableSkeleton = () => (
  <table className="w-full">
    <SpotifyPlayableListTableHead />
    <tbody>
      {getPlaceholderArray(10).map((value) => (
        <SpotifyPlayableListTableRowSkeleton key={value} />
      ))}
    </tbody>
  </table>
);
