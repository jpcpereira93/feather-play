import type { PropsWithChildren } from "react";

import {
  SpotifyPlayableListHeader,
  SpotifyPlayableListHeaderSkeleton,
} from "./SpotifyPlayableListHeader";
import {
  SpotifyPlayableListTable,
  SpotifyPlayableListTableSkeleton,
} from "./SpotifyPlayableListTable";

const SpotifyPlayableList = ({ children }: PropsWithChildren) => {
  return <div className="h-full w-full flex flex-col">{children}</div>;
};

SpotifyPlayableList.Header = SpotifyPlayableListHeader;
SpotifyPlayableList.HeaderSkeleton = SpotifyPlayableListHeaderSkeleton;
SpotifyPlayableList.Table = SpotifyPlayableListTable;
SpotifyPlayableList.TableSkeleton = SpotifyPlayableListTableSkeleton;

export { SpotifyPlayableList };
