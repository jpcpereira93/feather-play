import { useTranslation } from "react-i18next";

export default function SetupGuideOverview() {
  const { t } = useTranslation("site");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-black uppercase">
        {t("setup_guide.overview.title")}
      </h1>
      <p className="text-justify whitespace-pre-line">
        {t("setup_guide.overview.content")}
      </p>
    </div>
  );
}
