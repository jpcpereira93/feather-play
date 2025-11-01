import { Form, redirect } from "react-router";

export function clientAction() {
  localStorage.setItem("spotifyClientId", "9a7c140d88804735a5d729e30c8d620e");

  return redirect("/play");
}

export default function Login() {
  return (
    <div>
      <Form method="post">
        <input type="text" />
        <button type="submit">ttt</button>
      </Form>
    </div>
  );
}
