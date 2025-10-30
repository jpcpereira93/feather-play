import { QueryClientProvider } from "@tanstack/react-query";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { queryClient } from "~/core/api";
import { Box, Navbar, SideMenu, SpotifyPlayer } from "~/core/components";
import { SpotifyPlayerProvider } from "~/core/context";
import { authenticateSpotifyUser } from "~/core/services";

import type { Route } from "./+types/root";

import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function clientLoader() {
  const { accessToken } = await authenticateSpotifyUser();

  return { spotifyAccessToken: accessToken.access_token };
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <Meta />
          <Links />
        </head>
        <body
          className="antialiased bg-neutral-100 dark:bg-dark-800 dark:text-dark-400 h-screen w-screen p-2 flex flex-col gap-2 overflow-hidden tracking-tight select-none
"
        >
          <SpotifyPlayerProvider>
            <Navbar />
            <main className="flex flex-col h-full w-full gap-2 overflow-hidden">
              <div className="flex h-full gap-2 overflow-hidden">
                <div className="w-1/3 xl:w-1/4">
                  <SideMenu />
                </div>
                <Box>{children}</Box>
              </div>
              <SpotifyPlayer />
            </main>
          </SpotifyPlayerProvider>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </QueryClientProvider>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
