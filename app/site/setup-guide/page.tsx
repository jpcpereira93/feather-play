import { redirect } from "react-router";

export async function clientLoader() {
  return redirect("/setup-guide/overview");
}

export default function SetupGuide() {
  return <></>;
}
