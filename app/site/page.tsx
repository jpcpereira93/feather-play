import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

import { Carousel, type CarouselImage, FeatureList } from "~/site/components";
import type { IFeatureItem } from "~/site/models";
import type { Route } from "./+types/page";

export function meta() {
  return [
    { title: "FeatherPlay | The feather weight Spotify Client" },
    { name: "description", content: "Welcome to FeatherPlay!" },
  ];
}

const CAROUSEL_IMAGES: CarouselImage[] = [
  {
    label: "Image 1",
    src: "/screenshots/1.png",
  },
  {
    label: "Image 2",
    src: "/screenshots/2.png",
  },
  {
    label: "Image 3",
    src: "/screenshots/3.png",
  },
  {
    label: "Image 4",
    src: "/screenshots/4.png",
  },
  {
    label: "Image 5",
    src: "/screenshots/5.png",
  },
  {
    label: "Image 6",
    src: "/screenshots/6.png",
  },
];

const FEATURES: IFeatureItem[] = [
  {
    label: "home.features.items.browse",
  },
  {
    label: "home.features.items.listen_saved_tracks",
  },
  {
    label: "home.features.items.listen_saved_playlists",
  },
  {
    label: "home.features.items.listen_albums",
  },
  {
    label: "home.features.items.search_tracks",
  },
  {
    label: "home.features.items.save_tracks",
  },
];

export function clientLoader() {
  return { carouselImages: CAROUSEL_IMAGES, features: FEATURES };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { carouselImages, features } = loaderData;

  const { t } = useTranslation("site");

  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-scroll snap-mandatory snap-y text-slate-200 tracking-tighter">
      <div className="h-full w-full flex flex-col items-center pt-20 gap-12 snap-center">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-6xl font-black uppercase">FeatherPlay</h1>
          <h2 className="text-2xl font-bold">{t("home.landing.subtitle")}</h2>
          <h3 className="font-semibold text-dark-300">
            {t("home.landing.description")}
          </h3>
        </div>
        <Carousel images={carouselImages} />
      </div>
      <section className="h-full w-full snap-center flex flex-col items-center p-20 gap-8">
        <h1 className="text-3xl font-black">{t("home.about.title")}</h1>
        <article className="flex w-2/3 bg-dark-900/50 rounded-xl p-6">
          <div>
            <span className="font-bold">
              {t("home.about.content.header")}
              <br />
              <br />
            </span>
            <p className="whitespace-pre-line">
              {t("home.about.content.description")}
            </p>
            <span className="flex pt-3 text-2xl text-center font-extrabold">
              {t("home.about.content.catch_phrase")}
            </span>
          </div>
        </article>
      </section>
      <section className="snap-center h-full w-full flex flex-col items-center p-20 gap-20">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-black">{t("home.features.title")}</h1>
          <h2 className="w-2/3 text-2xl text-center text-dark-300/70">
            {t("home.features.description")}
          </h2>
        </div>
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-black">{t("home.features.title")}</h1>
          <FeatureList items={features} />
        </div>
      </section>
      <section className="snap-center h-full w-full flex flex-col justify-between items-center py-30 gap-20">
        <div className="h-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl font-black">{t("home.get_started.title")}</h1>
          <p className="text-dark-300/80 italic font-semibold">
            {t("home.get_started.subtitle")}
          </p>
          <NavLink to="">
            <button
              className="bg-brand-600 text-slate-100 px-3 py-2 rounded-md font-black uppercase hover:bg-brand-500 hover:cursor-pointer"
              type="button"
            >
              {t("home.get_started.button.label")}
            </button>
          </NavLink>
        </div>
        <article className="w-1/3 bg-dark-900/50 rounded-xl p-6 flex flex-col gap-4 text-sm font-bold">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jpcpereira93"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-pereira-437104139"
              target="_blank"
              rel="noopener noreferrer"
            >
               Linkedin
            </a>
            <NavLink to="/terms">{t("home.footer.terms")}</NavLink>
          </div>
          <p className="text-dark-400 font-medium">
            © {new Date().getFullYear()} José Pereira.{" "}
            {t("home.footer.rights_reserved")}
          </p>
        </article>
      </section>
    </div>
  );
}
