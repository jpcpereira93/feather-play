import { createContext, useContext, useState } from "react";

interface ISpotifyPlayerContext {
  isPlaying: boolean;
  currentTrackId?: string;
  setCurrentTrackId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SpotifyPlayerContext = createContext<ISpotifyPlayerContext | null>(
  null,
);

export function SpotifyPlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentTrackId, setCurrentTrackId] = useState<string>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <SpotifyPlayerContext
      value={{ currentTrackId, isPlaying, setCurrentTrackId, setIsPlaying }}
    >
      {children}
    </SpotifyPlayerContext>
  );
}

export function useSpotifyPlayerContext() {
  return useContext(SpotifyPlayerContext);
}
