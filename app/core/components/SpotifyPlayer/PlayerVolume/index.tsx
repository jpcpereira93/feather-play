import { Volume2, VolumeOff } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { PlayerButton } from "../PlayerButton";

interface PlayerVolumeProps {
  // biome-ignore lint/suspicious/noExplicitAny: Spotify Player instances doesn't have types.
  player: any;
}

export const PlayerVolume = ({ player }: PlayerVolumeProps) => {
  const volumeRef = useRef<HTMLDivElement>(null);
  const cursorPercentageRef = useRef<number>(0.5);

  const [volume, setVolume] = useState<number>(0.5);

  const onSliderClick = useCallback(() => {
    setVolume(cursorPercentageRef.current);
  }, []);

  const onSliderMouseMove = useCallback((ev: MouseEvent) => {
    if (volumeRef.current) {
      const { left, width } = volumeRef.current.getBoundingClientRect();

      cursorPercentageRef.current = (ev.clientX - left) / width;
    }
  }, []);

  const onVolumeClick = () => {
    setVolume((volume) => (volume > 0 ? 0 : 1));
  };

  useEffect(() => {
    player.getVolume().then((volume: number) => setVolume(volume));

    if (volumeRef.current) {
      volumeRef.current.addEventListener("mousemove", onSliderMouseMove);
      volumeRef.current.addEventListener("click", onSliderClick);
    }

    return () => {
      if (volumeRef.current) {
        volumeRef.current.removeEventListener("mousemove", onSliderMouseMove);
        volumeRef.current.removeEventListener("click", onSliderClick);
      }
    };
  }, [player, onSliderClick, onSliderMouseMove]);

  useEffect(() => {
    player.setVolume(volume).then();
  }, [player, volume]);

  return (
    <div className="flex items-center gap-2">
      <PlayerButton onClick={onVolumeClick}>
        {volume > 0 ? <Volume2 size={20} /> : <VolumeOff size={20} />}
      </PlayerButton>
      <span
        ref={volumeRef}
        className="relative h-2 w-20 bg-slate-600/50 rounded-full overflow-hidden hover:cursor-pointer"
      >
        <span
          className="absolute h-full bg-slate-500"
          style={{
            width: `${volume * 100}%`,
          }}
        ></span>
      </span>
    </div>
  );
};
