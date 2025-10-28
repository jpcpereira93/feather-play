import { useRouteLoaderData } from "react-router";

import { useSpotifyPlayer } from "~/core/hooks";

import { Player } from "./Player";

export const SpotifyPlayer = () => {
  const rootLoaderData = useRouteLoaderData("root");

  const [player, deviceId] = useSpotifyPlayer(
    rootLoaderData?.spotifyAccessToken,
  );

  if (!player || !deviceId) {
    return null;
  }

  return <Player deviceId={deviceId} player={player} />;
};
