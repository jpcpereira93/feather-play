import { Trans, useTranslation } from "react-i18next";

export default function SetupGuideRequirements() {
  const { t } = useTranslation("site");

  return (
    <div className="flex flex-col gap-6 overflow-y-scroll">
      <h1 className="text-3xl font-black uppercase">
        {t("setup_guide.setting_up.title")}
      </h1>
      <p className="text-justify whitespace-pre-line pr-6 select-text">
        <Trans
          ns="site"
          i18nKey="setup_guide.setting_up.content"
          components={{
            "spotify-dashboard-link": (
              // biome-ignore lint/a11y/useAnchorContent: a11y
              <a
                className="font-semibold underline"
                href="https://developer.spotify.com/dashboard"
                rel="noopener noreferrer"
                target="_blank"
              />
            ),
            "spotify-guide-link": (
              // biome-ignore lint/a11y/useAnchorContent: a11y
              <a
                className="font-semibold underline"
                href="https://developer.spotify.com/documentation/web-api/concepts/apps"
                rel="noopener noreferrer"
                target="_blank"
              />
            ),
            semibold: <span className="font-semibold" />,
            screenshot: (
              <div
                className="h-90"
                style={{
                  backgroundImage: 'url("/screenshots/create-spotify-app.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              ></div>
            ),
            underline: <span className="underline" />,
          }}
        />
      </p>
    </div>
  );
}
