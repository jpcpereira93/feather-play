import type { ReactNode } from "react";

interface ProfileItemProps {
  icon?: ReactNode;
  label: string;
  onClick: () => void;
}

export const ProfileItem = ({ icon, label, onClick }: ProfileItemProps) => (
  // biome-ignore lint/a11y/useKeyWithClickEvents: a11y
  <li
    className="p-2 rounded-lg flex items-center justify-between hover:cursor-pointer hover:bg-slate-700/60 text-slate-400 text-sm font-semibold tracking-tight"
    onClick={onClick}
  >
    {label}
    {icon}
  </li>
);
