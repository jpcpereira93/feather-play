import type { ReactNode } from "react";
import { NavLink } from "react-router";

interface NavigableAlbumProps {
  id: string;
  children: ReactNode;
}

export const NavigableAlbum = ({ id, children }: NavigableAlbumProps) => (
  <NavLink to={`/albums/${id}`}>{children}</NavLink>
);
