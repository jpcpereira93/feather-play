import classNames from "classnames";
import type { ReactNode } from "react";

interface PlayerButtonProps {
  active?: boolean;
  children: ReactNode;
  onClick: () => void;
}

export const PlayerButton = ({
  active,
  children,
  onClick,
}: PlayerButtonProps) => (
  <button
    className={classNames("hover:cursor-pointer hover:text-dark-300", {
      "text-dark-300": active,
    })}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);
