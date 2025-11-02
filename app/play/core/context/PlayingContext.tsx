import { createContext, useContext, useState } from "react";

interface IPlayingContext {
  currentTrackId?: string;
  isPlaying: boolean;
  setCurrentTrackId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

// biome-ignore lint/suspicious/noExplicitAny: Avoid undefined type-check
export const PlayingContext = createContext<IPlayingContext>({} as any);

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
  const context = useContext(PlayingContext);

  if (context === undefined) {
    throw new Error("usePlayingContext must be within PlayingProvider");
  }

  return context;
}
