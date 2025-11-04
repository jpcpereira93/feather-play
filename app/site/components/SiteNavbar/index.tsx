import { repository } from "package.json";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

import GithubLogo from "./github.svg?react";
import { SiteNavbarButton } from "./SiteNavbarButton";
import { SiteNavbarSeparator } from "./SiteNavbarSeparator";

export const SiteNavbar = () => {
  const { t } = useTranslation("site");

  return (
    <nav className="sticky w-full p-2 flex items-center justify-between bg-dark-900">
      <NavLink to="/">
        <button
          className="flex items-center text-slate-200 tracking-tighter font-black uppercase text-lg hover:cursor-pointer"
          type="button"
        >
          <img
            className="h-6 w-6"
            src={`${import.meta.env.BASE_URL}logos/feather-play-logo.png`}
            alt="FeatherPlay"
          ></img>
          FeatherPlay
        </button>
      </NavLink>
      <div className="flex items-center justify-end gap-4">
        <SiteNavbarButton label={t("navbar.setup_guide")} to="/setup-guide" />
        <SiteNavbarButton label={t("navbar.faq")} to="/faq" />
        <NavLink to="login">
          <button
            className="bg-brand-600 text-slate-100 px-3 py-1 rounded-md font-black uppercase hover:bg-brand-500 hover:cursor-pointer"
            type="button"
          >
            {t("navbar.login")}
          </button>
        </NavLink>
        <SiteNavbarSeparator />
        <a href={repository.url} target="_blank" rel="noopener noreferrer">
          <button
            className="h-4 w-4 hover:text-slate-200 hover:cursor-pointer"
            type="button"
          >
            <GithubLogo fill="currentColor" />
          </button>
        </a>
      </div>
    </nav>
  );
};
