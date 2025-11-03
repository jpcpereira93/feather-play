import { useTranslation } from "react-i18next";

import { SetupGuideSideMenuItem } from "./SetupGuideSideMenuItem";

export const SetupGuideSideMenu = () => {
  const { t } = useTranslation("site");

  return (
    <ul className="w-full flex flex-col font-black text-sm uppercase gap-2">
      <SetupGuideSideMenuItem
        label={t("setup_guide.side_menu.overview")}
        to="/setup-guide/overview"
      />
      <SetupGuideSideMenuItem
        label={t("setup_guide.side_menu.requirements")}
        to="/setup-guide/requirements"
      />
      <SetupGuideSideMenuItem
        label={t("setup_guide.side_menu.setting_up")}
        to="/setup-guide/setting-up"
      />
    </ul>
  );
};
