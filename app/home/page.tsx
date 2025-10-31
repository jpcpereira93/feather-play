import { NavLink } from "react-router";

export function meta() {
  return [
    { title: "Spotify Client" },
    { name: "description", content: "Welcome to Spotify Client!" },
  ];
}

export default function Home() {
  return (
    <div>
      <nav>
        <NavLink to="/play">login</NavLink>
      </nav>
    </div>
  );
}
