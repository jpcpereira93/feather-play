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
    className="bg-dark-700 flex justify-center items-center p-2 rounded-lg 
    hover:cursor-pointer hover:bg-dark-600 disabled:bg-dark-700/60 disabled:text-dark-600"
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);
