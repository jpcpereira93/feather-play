import type { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const IconButton = ({ children, onClick }: IconButtonProps) => (
  <button
    className="bg-slate-700/60 text-slate-400 flex justify-center items-center p-2 rounded-lg 
    hover:cursor-pointer hover:bg-slate-700"
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);
