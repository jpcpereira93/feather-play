import type { Track } from "@spotify/web-api-ts-sdk";
import {
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Section } from "~/core/components/Section";
import {
  useToggleSpotifyRepeatModeMutation,
  useToggleSpotifyShuffleModeMutation,
  useTransferSpotifyPlaybackToCurrentDeviceMutation,
} from "~/core/hooks";

import { PlayerButton } from "../PlayerButton";

interface IPlayerStateChangeEvent {
  duration: number;
  paused: boolean;
  position: number;
  repeat_mode: 0 | 1;
  shuffle: boolean;
  track_window: {
    current_track: Track;
  };
}

interface PlayerProps {
  deviceId: string;
  // biome-ignore lint/suspicious/noExplicitAny: Spotify Player instances doesn't have types.
  player: any;
}

export const Player = ({ deviceId, player }: PlayerProps) => {
  const { mutate: mutateTransferSpotifyPlayback } =
    useTransferSpotifyPlaybackToCurrentDeviceMutation(deviceId);
  const { mutate: mutateToggleSpotifyRepeatMode } =
    useToggleSpotifyRepeatModeMutation();
  const { mutate: mutateToggleSpotifyShuffleMode } =
    useToggleSpotifyShuffleModeMutation();

  const [albumImage, setAlbumImage] = useState<string>();
  const [currentTrackName, setCurrentTrackName] = useState<string>();
  const [currentTrackArtists, setCurrentTrackArtists] = useState<string>();
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [isRepeatMode, setIsRepeatMode] = useState<boolean>(false);
  const [isShuffleMode, setIsShuffleMode] = useState<boolean>(false);

  const onPlayerStateChanged = ({
    duration,
    paused,
    position,
    repeat_mode,
    shuffle,
    track_window: { current_track },
  }: IPlayerStateChangeEvent) => {
    const { album, artists, name } = current_track;
    setAlbumImage(album.images.at(0)?.url);
    setCurrentTrackName(name);
    setCurrentTrackArtists(artists.map(({ name }) => name).join(" & "));
    setIsPaused(paused);
    setIsRepeatMode(!!repeat_mode);
    setIsShuffleMode(shuffle);
  };

  useEffect(() => {
    mutateTransferSpotifyPlayback();
  }, [mutateTransferSpotifyPlayback]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Incorrect check
  useEffect(() => {
    player.addListener("player_state_changed", onPlayerStateChanged);

    return () => {
      player.removeListener("player_state_changed", onPlayerStateChanged);
    };
  }, [player]);

  const onNextTrackClick = () => {
    player.nextTrack();
  };

  const onPreviousTrackClick = () => {
    player.previousTrack();
  };

  const onTogglePlayClick = () => {
    player.togglePlay();
  };

  const onToggleRepeatModeClick = () => {
    mutateToggleSpotifyRepeatMode(isRepeatMode);
  };

  const onToggleShuffleModeClick = () => {
    mutateToggleSpotifyShuffleMode(isShuffleMode);
  };

  return (
    <div className="h-35 w-full">
      <Section>
        <div className="relative h-full w-full flex items-center px-2">
          <div className="flex items-center gap-6">
            <div className="h-18 w-18 rounded-xl overflow-hidden">
              <img src={albumImage} alt="Current track album" />
            </div>
            <div className="flex flex-col gap-1 font-semibold tracking-tight">
              <p>{currentTrackName}</p>
              <p className="text-slate-500 text-sm">{currentTrackArtists}</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 mx-auto h-full w-fit flex items-center gap-4">
            <PlayerButton
              active={isShuffleMode}
              onClick={onToggleShuffleModeClick}
            >
              <Shuffle size={20} />
            </PlayerButton>
            <PlayerButton onClick={onPreviousTrackClick}>
              <SkipBack size={20} fill="currentColor" />
            </PlayerButton>
            <PlayerButton onClick={onTogglePlayClick}>
              {isPaused ? (
                <Play size={38} fill="currentColor" />
              ) : (
                <Pause size={38} fill="currentColor" />
              )}
            </PlayerButton>
            <PlayerButton onClick={onNextTrackClick}>
              <SkipForward size={20} fill="currentColor" />
            </PlayerButton>
            <PlayerButton
              active={isRepeatMode}
              onClick={onToggleRepeatModeClick}
            >
              <Repeat size={20} />
            </PlayerButton>
          </div>
          <div></div>
        </div>
      </Section>
    </div>
  );
};
