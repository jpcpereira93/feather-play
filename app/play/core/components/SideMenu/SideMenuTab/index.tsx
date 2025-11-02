import type { ReactNode } from "react";
import { NavLink } from "react-router";

import { Tab } from "~/play/core/components/Tab";

interface SideMenuTabProps {
  children: ReactNode;
  to: string;
}

export const SideMenuTabSkeleton = () => (
  <Tab>
    <div className="flex items-center gap-4 w-full">
      <span className="h-8 w-8 rounded bg-dark-600"></span>
      <span className="rounded bg-dark-600 h-3 w-1/3"></span>
    </div>
  </Tab>
);

export const SideMenuTab = ({ children, to }: SideMenuTabProps) => (
  <NavLink to={to} prefetch="intent">
    {({ isActive }) => (
      <Tab active={isActive}>
        <div className="flex items-center gap-4">{children}</div>
      </Tab>
    )}
  </NavLink>
);
