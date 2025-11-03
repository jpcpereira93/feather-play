import classNames from "classnames";
import { NavLink } from "react-router";

interface SetupGuideSideMenuItemProps {
  label: string;
  to: string;
}

export const SetupGuideSideMenuItem = ({
  label,
  to,
}: SetupGuideSideMenuItemProps) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <li
          className={classNames(
            "w-full p-2 rounded-lg hover:cursor-pointer hover:bg-dark-600 hover:text-dark-300",
            { "bg-dark-600 text-dark-300": isActive },
          )}
        >
          {label}
        </li>
      )}
    </NavLink>
  );
};
