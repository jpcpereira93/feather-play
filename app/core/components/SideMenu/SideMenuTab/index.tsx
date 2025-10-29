import type { ReactNode } from "react";

import { Tab } from "~/core/components/Tab";

interface SideMenuTabProps {
  active?: boolean;
  children: ReactNode;
}

export const SideMenuTab = ({ active, children }: SideMenuTabProps) => (
  <Tab active={active}>
    <div className="flex items-center gap-4">{children}</div>
  </Tab>
);
