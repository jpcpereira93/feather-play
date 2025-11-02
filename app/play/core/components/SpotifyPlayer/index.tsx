import React from "react";

import { Box } from "~/play/core/components/Box";
import { useSpotifyPlayerContext } from "~/play/core/context";

import { Player } from "./Player";

export const SpotifyPlayer = React.memo(() => {
  const { deviceId, player } = useSpotifyPlayerContext();

  return (
    <div className="h-35 w-full">
      <Box>
        {player && deviceId && <Player deviceId={deviceId} player={player} />}
      </Box>
    </div>
  );
});
