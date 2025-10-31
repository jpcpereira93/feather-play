/** biome-ignore-all lint/suspicious/noExplicitAny: The Spotify Player doesn't provide types, so we have to use any. */
import { createContext, useContext, useEffect, useRef, useState } from "react";

interface ISpotifyPlayerContext {
  player?: any;
  deviceId?: string;
}

export const SpotifyPlayerContext = createContext<ISpotifyPlayerContext | null>(
  null,
);

export function SpotifyPlayerProvider({
  children,
  accessToken,
}: {
  children: React.ReactNode;
  accessToken: string;
}) {
  const [player, setPlayer] = useState<any | undefined>(undefined);
  const [deviceId, setDeviceId] = useState<string | undefined>(undefined);

  const initialized = useRef(false);
  const initializing = useRef(false);

  useEffect(() => {
    // Avoid multiple instance being created in development mode due to StrictMode
    if (accessToken && !initializing.current && !initialized.current) {
      initializing.current = true;

      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;

      document.body.appendChild(script);

      (window as any).onSpotifyWebPlaybackSDKReady = () => {
        const player = new (window as any).Spotify.Player({
          name: "Web Playback SDK",
          getOAuthToken: (cb: any) => {
            cb(accessToken);
          },
          volume: 0.5,
        });

        setPlayer(player);
        initialized.current = true;

        player.addListener("ready", ({ device_id }: any) => {
          console.log("Ready with Device ID", device_id);

          setDeviceId(device_id);

          initialized.current = true;
          initializing.current = false;
        });

        // player.addListener("not_ready", ({ device_id }) => {
        //   console.log("Device ID has gone offline", device_id);
        // });

        player.connect();
      };
    }
  }, [accessToken]);

  return (
    <SpotifyPlayerContext value={{ player, deviceId }}>
      {children}
    </SpotifyPlayerContext>
  );
}

export function useSpotifyPlayerContext() {
  return useContext(SpotifyPlayerContext);
}
