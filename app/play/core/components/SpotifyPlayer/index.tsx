import React from "react";

import { Box } from "~/play/core/components/Box";
import { useSpotifyPlayerContext } from "~/play/core/context";

import { Player } from "./Player";

export const SpotifyPlayer = React.memo(() => {
  const spotifyPlayerContext = useSpotifyPlayerContext();

  return (
    <div className="h-35 w-full">
      <Box>
        {spotifyPlayerContext?.player && spotifyPlayerContext?.deviceId && (
          <Player
            deviceId={spotifyPlayerContext.deviceId}
            player={spotifyPlayerContext.player}
          />
        )}
      </Box>
    </div>
  );
});
