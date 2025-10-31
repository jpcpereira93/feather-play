import { Box } from "~/play/core/components/Box";
import { useSpotifyPlayer } from "~/play/core/hooks";

import { Player } from "./Player";

interface SpotifyPlayerProps {
  accessToken: string;
}

export const SpotifyPlayer = ({ accessToken }: SpotifyPlayerProps) => {
  const [player, deviceId] = useSpotifyPlayer(accessToken);

  return (
    <div className="h-35 w-full">
      <Box>
        {player && deviceId && <Player deviceId={deviceId} player={player} />}
      </Box>
    </div>
  );
};
