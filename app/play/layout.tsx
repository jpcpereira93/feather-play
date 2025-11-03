import { QueryClientProvider } from "@tanstack/react-query";
import { Outlet, redirect } from "react-router";

import { createSpotifyApi, queryClient } from "~/play/core/api";
import { Box, Navbar, SideMenu, SpotifyPlayer } from "~/play/core/components";
import {
  PlayingProvider,
  SpotifyApiProvider,
  SpotifyPlayerProvider,
} from "~/play/core/context";

import type { Route } from "./+types/layout";

export function meta() {
  return [
    { title: "FeatherPlay - Web player: The feather weight Spotify Client" },
    {
      name: "description",
      content: "FeatherPlay - Web player: The feather weight Spotify Client",
    },
  ];
}

export function shouldRevalidate() {
  return false;
}

export async function clientLoader() {
  const spotifyClientId = localStorage.getItem("spotifyClientId");

  if (!spotifyClientId) {
    return redirect("/login");
  }

  const spotifyApi = createSpotifyApi(spotifyClientId);

  const { accessToken } = await spotifyApi.authenticate();

  return { spotifyAccessToken: accessToken.access_token, spotifyApi };
}

export default function PlayLayout({ loaderData }: Route.ComponentProps) {
  const { spotifyAccessToken, spotifyApi } = loaderData;

  if (!spotifyAccessToken || !spotifyApi) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SpotifyApiProvider spotifyApi={spotifyApi}>
        <SpotifyPlayerProvider accessToken={spotifyAccessToken}>
          <PlayingProvider>
            <div className="h-screen w-screen p-2 flex flex-col gap-2 overflow-hidden">
              <Navbar />
              <main className="flex flex-col h-full w-full gap-2 overflow-hidden">
                <div className="flex h-full gap-2 overflow-hidden">
                  <div className="w-fit md:w-1/3 xl:w-1/4">
                    <SideMenu />
                  </div>
                  <Box>
                    <Outlet />
                  </Box>
                </div>
              </main>
              <SpotifyPlayer />
            </div>
          </PlayingProvider>
        </SpotifyPlayerProvider>
      </SpotifyApiProvider>
    </QueryClientProvider>
  );
}
