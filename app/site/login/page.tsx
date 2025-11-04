import { useTranslation } from "react-i18next";
import { Form, redirect } from "react-router";

import type { Route } from "./+types/page";

export function meta() {
  return [{ title: "Login | FeatherPlay" }];
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const spotifyClientId = formData.get("spotifyClientId");

  if (spotifyClientId) {
    localStorage.setItem("spotifyClientId", spotifyClientId as string);

    return redirect("/play");
  }
}

export function clientLoader() {
  const spotifyClientId = localStorage.getItem("spotifyClientId");

  if (spotifyClientId) {
    return redirect("/play");
  }
}

export default function Login() {
  const { t } = useTranslation("site");

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <Form
        className="w-full sm:w-4/5 lg:w-1/2 xl:w-1/3 bg-dark-700 rounded-lg flex flex-col justify-between items-center p-8 gap-15"
        method="post"
      >
        <h1 className="text-3xl uppercase font-black">{t("login.title")}</h1>
        <div className="flex flex-col items-center gap-6 font-semibold">
          <p className="text-center text-wrap whitespace-pre-line">
            {t("login.description")}
          </p>
          <div className="bg-dark-600 p-2 rounded-lg min-w-sm text-sm">
            <input
              className="w-full focus:outline-none"
              placeholder={t("login.form.client_id.placeholder")}
              name="spotifyClientId"
              type="text"
            />
          </div>
        </div>
        <button
          className="w-full p-2 bg-brand-600 text-slate-200 font-bold rounded-lg hover:bg-brand-700 hover:cursor-pointer"
          type="submit"
        >
          {t("login.form.submit")}
        </button>
      </Form>
    </main>
  );
}
