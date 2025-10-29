import { redirect } from "react-router";

export async function clientLoader() {
  return redirect("/library/playlists");
}

export default function Library() {
  return <></>;
}
