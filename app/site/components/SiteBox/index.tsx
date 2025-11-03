import classNames from "classnames";
import type { PropsWithChildren } from "react";

interface SiteBoxProps {
  rounded?: boolean;
}

export const SiteBox = ({
  children,
  rounded,
}: SiteBoxProps & PropsWithChildren) => (
  <div
    className={classNames("flex h-full w-full bg-dark-900/50 p-6", {
      "rounded-xl": rounded,
    })}
  >
    {children}
  </div>
);
