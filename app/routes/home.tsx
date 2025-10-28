import { spotifyApi } from "~/core/api";

export function meta() {
  return [
    { title: "Spotify Client" },
    { name: "description", content: "Welcome to Spotify Client!" },
  ];
}

export default function Home() {
  console.log(spotifyApi.currentUser);

  return <div />;
}
