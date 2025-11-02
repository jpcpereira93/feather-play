import type { ReactNode } from "react";
import { NavLink } from "react-router";

import { Tab } from "~/play/core/components";

interface LibraryTabProps {
  children: ReactNode;
  to: string;
}

export const LibraryTab = ({ children, to }: LibraryTabProps) => (
  <NavLink to={to} prefetch="intent">
    {({ isActive }) => <Tab active={isActive}>{children}</Tab>}
  </NavLink>
);
