import type { ReactNode } from "react";

interface IconButtonProps {
  ariaLabel?: string;
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export const IconButton = ({
  ariaLabel,
  children,
  disabled,
  onClick,
}: IconButtonProps) => (
  <button
    aria-label={ariaLabel}
    disabled={disabled}
    className="bg-slate-700/60 text-slate-400 flex justify-center items-center p-2 rounded-lg 
    hover:cursor-pointer hover:bg-slate-700 disabled:bg-slate-700 disabled:text-slate-500"
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);
