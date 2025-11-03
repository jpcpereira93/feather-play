import { Trans, useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export default function SetupGuideOverview() {
  const { t } = useTranslation("site");

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-black uppercase">
        {t("setup_guide.overview.title")}
      </h1>
      <p className="text-justify whitespace-pre-line">
        <Trans
          ns="site"
          i18nKey="setup_guide.overview.content"
          components={{
            "setting-up-link": (
              <NavLink
                className="font-semibold underline"
                to="/setup-guide/setting-up"
              />
            ),
          }}
        />
      </p>
    </div>
  );
}
