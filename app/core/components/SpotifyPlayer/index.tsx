import { useRouteLoaderData } from "react-router";

import { Box } from "~/core/components/Box";
import { useSpotifyPlayer } from "~/core/hooks";

import { Player } from "./Player";

export const SpotifyPlayer = () => {
  const rootLoaderData = useRouteLoaderData("root");

  const [player, deviceId] = useSpotifyPlayer(
    rootLoaderData?.spotifyAccessToken,
  );

  return (
    <div className="h-35 w-full">
      <Box>
        {player && deviceId && <Player deviceId={deviceId} player={player} />}
      </Box>
    </div>
  );
};
