import { createContext, useContext, useState } from "react";

interface IPlayingContext {
  currentTrackArtists?: string;
  currentTrackId?: string;
  currentTrackName?: string;
  isPlaying: boolean;
  setCurrentTrackArtists: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  setCurrentTrackId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setCurrentTrackName: React.Dispatch<React.SetStateAction<string | undefined>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

// biome-ignore lint/suspicious/noExplicitAny: Avoid undefined type-check
export const PlayingContext = createContext<IPlayingContext>({} as any);

export function PlayingProvider({ children }: { children: React.ReactNode }) {
  const [currentTrackArtists, setCurrentTrackArtists] = useState<string>();
  const [currentTrackId, setCurrentTrackId] = useState<string>();
  const [currentTrackName, setCurrentTrackName] = useState<string>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <PlayingContext
      value={{
        currentTrackArtists,
        currentTrackId,
        currentTrackName,
        isPlaying,
        setCurrentTrackArtists,
        setCurrentTrackId,
        setCurrentTrackName,
        setIsPlaying,
      }}
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
