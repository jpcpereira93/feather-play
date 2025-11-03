import { useTranslation } from "react-i18next";

import { FaqQuestion } from "./components";

export default function FAQ() {
  const { t } = useTranslation("site");

  return (
    <main className="flex flex-col h-full w-full items-center py-10 gap-8 overflow-scroll">
      <h1 className="text-4xl font-black uppercase text-dark-300">
        {t("faq.title")}
      </h1>
      <FaqQuestion title={t("faq.questions.client_id.title")}>
        {t("faq.questions.client_id.answer")}
      </FaqQuestion>
      <FaqQuestion title={t("faq.questions.feature_x.title")}>
        {t("faq.questions.feature_x.answer")}
      </FaqQuestion>
      <FaqQuestion title={t("faq.questions.native_apps.title")}>
        {t("faq.questions.native_apps.answer")}
      </FaqQuestion>
      <FaqQuestion title={t("faq.questions.own_version.title")}>
        {t("faq.questions.own_version.answer")}
      </FaqQuestion>
    </main>
  );
}
