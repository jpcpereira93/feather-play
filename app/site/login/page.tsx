import { Form, redirect } from "react-router";

export function clientAction() {
  localStorage.setItem("spotifyClientId", "");

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
