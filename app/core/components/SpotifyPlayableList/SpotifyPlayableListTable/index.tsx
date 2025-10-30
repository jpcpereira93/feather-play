import type {
  Page,
  SavedTrack,
  SimplifiedTrack,
  Track,
} from "@spotify/web-api-ts-sdk";

import { useSpotifyPlayerContext } from "~/core/context";
import { getPlaceholderArray } from "~/core/utils";

import {
  SpotifyPlayableListTableRow,
  SpotifyPlayableListTableRowSkeleton,
} from "./SpotifyPlayableListTableRow";

interface SpotifyPlayableListTableProps {
  hasAlbum?: boolean;
  tracks: Page<{ track: Track | SimplifiedTrack } | SavedTrack>;
  onPlayTrack: (uri: string) => void;
}

const SpotifyPlayableListTableHead = ({ hasAlbum }: { hasAlbum?: boolean }) => (
  <thead className="text-sm sticky z-2 top-0 bg-dark-700 h-18 tracking-normal">
    <tr>
      <th className="font-medium w-16 rounded-l-lg">#</th>
      <th className="font-medium text-left">Title</th>
      {hasAlbum && <th className="font-medium text-left">Album</th>}
      <th className="font-medium text-left w-22 rounded-r-lg">Duration</th>
    </tr>
  </thead>
);

export const SpotifyPlayableListTable = ({
  hasAlbum,
  tracks,
  onPlayTrack,
}: SpotifyPlayableListTableProps) => {
  const { currentTrackId, isPlaying } = useSpotifyPlayerContext();

  return (
    <div className="overflow-auto">
      <table className="w-full">
        <SpotifyPlayableListTableHead hasAlbum={hasAlbum} />
        <tbody>
          {tracks.items.map(({ track }, index) => {
            const { artists, duration_ms, id, name, uri } = track;

            return (
              <SpotifyPlayableListTableRow
                album={(track as Track).album}
                artists={artists}
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

export const SpotifyPlayableListTableSkeleton = ({
  hasAlbum,
}: {
  hasAlbum?: boolean;
}) => (
  <table className="w-full">
    <SpotifyPlayableListTableHead hasAlbum={hasAlbum} />
    <tbody>
      {getPlaceholderArray(10).map((value) => (
        <SpotifyPlayableListTableRowSkeleton hasAlbum={hasAlbum} key={value} />
      ))}
    </tbody>
  </table>
);
