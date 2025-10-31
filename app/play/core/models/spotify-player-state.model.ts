import type { Track } from "@spotify/web-api-ts-sdk";

export interface ISpotifyPlayerState {
  duration: number;
  paused: boolean;
  position: number;
  repeat_mode: 0 | 1;
  shuffle: boolean;
  track_window: {
    current_track: Track;
  };
}
