import { QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";

import { queryClient } from "~/play/core/api";
import { Box, Navbar, SideMenu, SpotifyPlayer } from "~/play/core/components";
import { SpotifyPlayerProvider } from "~/play/core/context";
import { authenticateSpotifyUser } from "~/play/core/services";

import type { Route } from "./+types/layout";

export async function clientLoader() {
  const { accessToken } = await authenticateSpotifyUser();

  return { spotifyAccessToken: accessToken.access_token };
}

export default function PlayLayout({ loaderData }: Route.ComponentProps) {
  const { spotifyAccessToken } = loaderData;

  return (
    <QueryClientProvider client={queryClient}>
      <SpotifyPlayerProvider>
        <Navbar />
        <main className="flex flex-col h-full w-full gap-2 overflow-hidden">
          <div className="flex h-full gap-2 overflow-hidden">
            <div className="w-1/3 xl:w-1/4">
              <SideMenu />
            </div>
            <Box>
              <Outlet />
            </Box>
          </div>
        </main>
        <SpotifyPlayer accessToken={spotifyAccessToken} />
      </SpotifyPlayerProvider>
    </QueryClientProvider>
  );
}
