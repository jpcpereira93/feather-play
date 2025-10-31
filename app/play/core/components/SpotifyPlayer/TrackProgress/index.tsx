import { useEffect, useState } from "react";

import type { ISpotifyPlayerState } from "~/play/core/models";

interface TrackProgressProps {
  // biome-ignore lint/suspicious/noExplicitAny: Spotify Player instances doesn't have types.
  player: any;
}

export const TrackProgress = ({ player }: TrackProgressProps) => {
  const [currentTrackPosition, setCurrentTrackPosition] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      player
        .getCurrentState()
        .then(({ duration, position }: ISpotifyPlayerState) => {
          setCurrentTrackPosition((position / duration) * 100);
        });
    }, 500);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [player]);

  return (
    <span className="absolute left-0 right-0 bottom-0 h-2 bg-dark-600">
      <span
        className="absolute h-full bg-dark-500"
        style={{
          width: `${currentTrackPosition}%`,
        }}
      ></span>
    </span>
  );
};
