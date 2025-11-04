import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";

import "./app.css";
import "./i18n";

const { BASE_URL } = import.meta.env;

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/x-icon", href: `${BASE_URL}favicon.ico` },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "preconnect",
    href: "https://api.spotify.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "preload",
    href: `${BASE_URL}screenshots/1.png`,
    as: "image",
    type: "image/png",
  },
  {
    rel: "preload",
    href: `${BASE_URL}screenshots/2.png`,
    as: "image",
    type: "image/png",
  },
  {
    rel: "preload",
    href: `${BASE_URL}screenshots/3.png`,
    as: "image",
    type: "image/png",
  },
  {
    rel: "preload",
    href: `${BASE_URL}screenshots/4.png`,
    as: "image",
    type: "image/png",
  },
  {
    rel: "preload",
    href: `${BASE_URL}screenshots/5.png`,
    as: "image",
    type: "image/png",
  },
  {
    rel: "preload",
    href: `${BASE_URL}screenshots/6.png`,
    as: "image",
    type: "image/png",
  },
  {
    rel: "preload",
    href: `${BASE_URL}logos/feather-play-logo.png`,
    as: "image",
    type: "image/png",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body
        className="antialiased bg-dark-800 text-dark-400 tracking-tight select-none
"
      >
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
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
