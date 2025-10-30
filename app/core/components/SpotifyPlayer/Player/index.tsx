import {
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { useEffect, useState } from "react";

import { useSpotifyPlayerContext } from "~/core/context";
import {
  useToggleSpotifyRepeatModeMutation,
  useToggleSpotifyShuffleModeMutation,
  useTransferSpotifyPlaybackToCurrentDeviceMutation,
} from "~/core/hooks";
import type { ISpotifyPlayerState } from "~/core/models";

import { PlayerButton } from "../PlayerButton";
import { PlayerVolume } from "../PlayerVolume";
import { TrackProgress } from "../TrackProgress";

interface PlayerProps {
  deviceId: string;
  // biome-ignore lint/suspicious/noExplicitAny: Spotify Player instances doesn't have types.
  player: any;
}

export const Player = ({ deviceId, player }: PlayerProps) => {
  const { setCurrentTrackId, setIsPlaying } = useSpotifyPlayerContext();

  const { mutate: mutateTransferSpotifyPlayback } =
    useTransferSpotifyPlaybackToCurrentDeviceMutation(deviceId);
  const { mutate: mutateToggleSpotifyRepeatMode } =
    useToggleSpotifyRepeatModeMutation();
  const { mutate: mutateToggleSpotifyShuffleMode } =
    useToggleSpotifyShuffleModeMutation();

  const [albumImage, setAlbumImage] = useState<string>();
  const [currentTrackArtists, setCurrentTrackArtists] = useState<string>();
  const [currentTrackName, setCurrentTrackName] = useState<string>();
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [isRepeatMode, setIsRepeatMode] = useState<boolean>(false);
  const [isShuffleMode, setIsShuffleMode] = useState<boolean>(false);

  const onPlayerStateChanged = ({
    paused,
    repeat_mode,
    shuffle,
    track_window: { current_track },
  }: ISpotifyPlayerState) => {
    const { album, artists, id, name } = current_track;

    setCurrentTrackId(id);
    setIsPlaying(!paused);

    setAlbumImage(album.images.at(0)?.url);
    setCurrentTrackArtists(artists.map(({ name }) => name).join(" & "));
    setCurrentTrackName(name);
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
    <div className="relative h-full w-full flex items-center justify-between px-5">
      <div className="flex w-60 md:w-80 shrink-0 items-center gap-3 md:gap-5">
        <div className="h-15 w-15 rounded-xl overflow-hidden bg-dark-600">
          {albumImage && <img src={albumImage} alt="Current track album" />}
        </div>
        <div className="flex flex-col font-semibold text-sm md:text-base">
          <p>{currentTrackName}</p>
          <p className="text-dark-500 text-xs md:text-sm">
            {currentTrackArtists}
          </p>
        </div>
      </div>
      <div className="h-full w-fit flex shrink-0 items-center justify-center gap-4">
        <PlayerButton active={isShuffleMode} onClick={onToggleShuffleModeClick}>
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
        <PlayerButton active={isRepeatMode} onClick={onToggleRepeatModeClick}>
          <Repeat size={20} />
        </PlayerButton>
      </div>
      <div className="flex w-60 md:w-80 justify-end">
        <PlayerVolume player={player} />
      </div>
      <TrackProgress player={player} />
    </div>
  );
};
