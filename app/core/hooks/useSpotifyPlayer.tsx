/** biome-ignore-all lint/suspicious/noExplicitAny: The Spotify Player doesn't provide types, so we have to use any. */
import { useEffect, useState } from "react";

export const useSpotifyPlayer = (accessToken: string) => {
  const [player, setPlayer] = useState<any | undefined>(undefined);
  const [deviceId, setDeviceId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (accessToken) {
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

        player.addListener("ready", ({ device_id }: any) => {
          console.log("Ready with Device ID", device_id);
          setDeviceId(device_id);
        });

        // player.addListener("not_ready", ({ device_id }) => {
        //   console.log("Device ID has gone offline", device_id);
        // });

        player.connect();
      };
    }
  }, [accessToken]);

  return [player, deviceId];
};
