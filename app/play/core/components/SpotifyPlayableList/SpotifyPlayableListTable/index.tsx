import type {
  SavedTrack,
  SimplifiedTrack,
  Track,
} from "@spotify/web-api-ts-sdk";
import { useTranslation } from "react-i18next";

import { usePlayingContext } from "~/play/core/context";
import { getPlaceholderArray, handleInfiniteScroll } from "~/play/core/utils";

import {
  SpotifyPlayableListTableRow,
  SpotifyPlayableListTableRowSkeleton,
} from "./SpotifyPlayableListTableRow";

interface SpotifyPlayableListTableBaseProps {
  hasAlbum?: boolean;
}

interface SpotifyPlayableListTableProps {
  tracks: { track: Track | SimplifiedTrack }[] | SavedTrack[];
  onEndReached: () => void;
  onPlayTrack: (uri: string) => void;
}

const SpotifyPlayableListTableHead = ({
  hasAlbum,
}: SpotifyPlayableListTableBaseProps) => {
  const { t } = useTranslation();

  return (
    <thead className="text-sm sticky z-2 top-0 bg-dark-700 h-18 tracking-normal">
      <tr>
        <th className="font-medium w-16 rounded-l-lg">#</th>
        <th className="font-medium text-left">
          {t("playable_list.table.header.columns.title")}
        </th>
        {hasAlbum && (
          <th className="font-medium text-left">
            {t("playable_list.table.header.columns.album")}
          </th>
        )}
        <th className="font-medium text-left w-22 rounded-r-lg">
          {t("playable_list.table.header.columns.duration")}
        </th>
      </tr>
    </thead>
  );
};

export const SpotifyPlayableListTable = ({
  hasAlbum,
  onEndReached,
  onPlayTrack,
  tracks,
}: SpotifyPlayableListTableProps & SpotifyPlayableListTableBaseProps) => {
  const { currentTrackId, isPlaying } = usePlayingContext();

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    handleInfiniteScroll(event, onEndReached, 200);
  };

  return (
    <div className="overflow-auto" onScroll={onScroll}>
      <table className="w-full">
        <SpotifyPlayableListTableHead hasAlbum={hasAlbum} />
        <tbody>
          {tracks.map(({ track }, index) => {
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
}: SpotifyPlayableListTableBaseProps) => (
  <table className="w-full">
    <SpotifyPlayableListTableHead hasAlbum={hasAlbum} />
    <tbody>
      {getPlaceholderArray(10).map((value) => (
        <SpotifyPlayableListTableRowSkeleton hasAlbum={hasAlbum} key={value} />
      ))}
    </tbody>
  </table>
);
