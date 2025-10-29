import classNames from "classnames";
import type { ReactNode } from "react";

interface TabProps {
  active?: boolean;
  children: ReactNode;
}

export const Tab = ({ active, children }: TabProps) => (
  <li
    className={classNames(
      "flex items-center p-3 rounded-xl text-sm font-bold tracking-tighter hover:cursor-pointer hover:bg-slate-700",
      { "bg-slate-700": active },
    )}
  >
    {children}
  </li>
);
