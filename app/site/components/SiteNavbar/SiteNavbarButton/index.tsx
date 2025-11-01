import { NavLink } from "react-router";

interface SiteNavbarButtonProps {
  label: string;
  to: string;
}

export const SiteNavbarButton = ({ label, to }: SiteNavbarButtonProps) => (
  <NavLink to={to}>
    <button
      className="font-semibold text-dark-300 p-2 text-sm uppercase hover:cursor-pointer hover:text-slate-200"
      type="button"
    >
      {label}
    </button>
  </NavLink>
);
