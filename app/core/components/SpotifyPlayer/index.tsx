import { useRouteLoaderData } from "react-router";

import { Section } from "~/core/components/Section";
import { useSpotifyPlayer } from "~/core/hooks";

import { Player } from "./Player";

export const SpotifyPlayer = () => {
  const rootLoaderData = useRouteLoaderData("root");

  const [player, deviceId] = useSpotifyPlayer(
    rootLoaderData?.spotifyAccessToken,
  );

  return (
    <div className="h-35 w-full">
      <Section>
        {player && deviceId && <Player deviceId={deviceId} player={player} />}
      </Section>
    </div>
  );
};
