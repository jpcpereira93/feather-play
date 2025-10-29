import type { ReactNode } from "react";
import { NavLink } from "react-router";

import { Tab } from "~/core/components/Tab";

interface SideMenuTabProps {
  children: ReactNode;
  to: string;
}

export const SideMenuTab = ({ children, to }: SideMenuTabProps) => (
  <NavLink to={to}>
    {({ isActive }) => (
      <Tab active={isActive}>
        <div className="flex items-center gap-4">{children}</div>
      </Tab>
    )}
  </NavLink>
);
