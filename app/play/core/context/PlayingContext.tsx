import { createContext, useContext, useState } from "react";

interface IPlayingContext {
  currentTrackId?: string;
  isPlaying: boolean;
  setCurrentTrackId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PlayingContext = createContext<IPlayingContext | null>(null);

export function PlayingProvider({ children }: { children: React.ReactNode }) {
  const [currentTrackId, setCurrentTrackId] = useState<string>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <PlayingContext
      value={{ currentTrackId, isPlaying, setCurrentTrackId, setIsPlaying }}
    >
      {children}
    </PlayingContext>
  );
}

export function usePlayingContext() {
  return useContext(PlayingContext);
}
