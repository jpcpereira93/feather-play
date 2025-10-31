import { redirect } from "react-router";

export function meta() {
  return [
    { title: "Spotify Client" },
    { name: "description", content: "Welcome to Spotify Client!" },
  ];
}

// export async function clientLoader() {
//   return redirect("/library");
// }

export default function Home() {
  return <div></div>;
}
