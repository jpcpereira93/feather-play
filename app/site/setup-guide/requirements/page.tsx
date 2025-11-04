import { useTranslation } from "react-i18next";

export function meta() {
  return [{ title: "Requirements | FeatherPlay" }];
}

export default function SetupGuideRequirements() {
  const { t } = useTranslation("site");

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-black uppercase">
        {t("setup_guide.requirements.title")}
      </h1>
      <p className="text-justify whitespace-pre-line">
        {t("setup_guide.requirements.content")}
      </p>
    </div>
  );
}
