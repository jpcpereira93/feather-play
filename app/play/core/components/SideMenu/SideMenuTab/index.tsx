import type { ReactNode } from "react";
import { NavLink } from "react-router";

import { Tab } from "~/play/core/components/Tab";

interface SideMenuTabProps {
  icon: ReactNode;
  label: string;
  to: string;
}

export const SideMenuTabSkeleton = () => (
  <Tab>
    <div className="flex items-center gap-4 w-full justify-center md:justify-normal px-2">
      <span className="h-6 w-6 rounded bg-dark-600"></span>
      <span className="hidden md:block rounded bg-dark-600 h-3 w-1/3"></span>
    </div>
  </Tab>
);

export const SideMenuTab = ({ icon, label, to }: SideMenuTabProps) => (
  <NavLink to={to} prefetch="intent">
    {({ isActive }) => (
      <Tab active={isActive}>
        <div className="flex items-center gap-4 w-full">
          {icon}
          <span className="hidden md:block">{label}</span>
        </div>
      </Tab>
    )}
  </NavLink>
);
