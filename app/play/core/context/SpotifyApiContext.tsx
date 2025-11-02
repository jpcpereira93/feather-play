import type { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { createContext, useContext } from "react";

interface ISpotifyApiContext {
  spotifyApi: SpotifyApi;
}

export const SpotifyApiContext = createContext<ISpotifyApiContext>({
  // biome-ignore lint/suspicious/noExplicitAny: Avoid undefined type-check
  spotifyApi: {} as any,
});

export function SpotifyApiProvider({
  children,
  spotifyApi,
}: {
  children: React.ReactNode;
  spotifyApi: SpotifyApi;
}) {
  return (
    <SpotifyApiContext value={{ spotifyApi }}>{children}</SpotifyApiContext>
  );
}

export function useSpotifyApiContext() {
  const context = useContext(SpotifyApiContext);

  if (context === undefined) {
    throw new Error("useSpotifyApiContext must be within SpotifyApiProvider");
  }

  return context;
}
