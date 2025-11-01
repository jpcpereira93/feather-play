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
    label: "Browse your library",
  },
  {
    label: "Listen to your saved tracks",
  },
  {
    label: "Listen to your saved playlists",
  },
  {
    label: "Listen to albums",
  },
  {
    label: "Search tracks",
  },
  {
    label: "Save tracks",
  },
];

export function clientLoader() {
  return { carouselImages: CAROUSEL_IMAGES, features: FEATURES };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { carouselImages, features } = loaderData;

  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-scroll snap-mandatory snap-y text-slate-200 tracking-tighter">
      <div className="h-full w-full flex flex-col items-center pt-20 gap-12 snap-center">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-6xl font-black uppercase">FeatherPlay</h1>
          <h2 className="text-2xl font-bold">Feather weight Spotify client.</h2>
          <h3 className="font-semibold text-dark-300">
            No bloat, no screen pollution. Just play and save your favorite
            tracks, albums and playlists.
          </h3>
        </div>
        <Carousel images={carouselImages} />
      </div>
      <section className="h-full w-full snap-center flex flex-col items-center p-20 gap-8">
        <h1 className="text-3xl font-black">What is FeatherPlay?</h1>
        <article className="flex w-2/3 bg-dark-900/50 rounded-xl p-6">
          <p>
            <p className="font-bold">
              FeatherPlay is a lightweight, debloated Spotify client.
              <br />
              <br />
            </p>
            I'll always be thankful to Spotify, for changing the music industry
            and allow us to play our favorite tracks, albums and playlists
            anywhere. For the past few years, even though with good intentions
            to provide more features for their users, in my opinion the app
            become bloated.
            <br />
            <br />
            Most of the time, either while working or gaming, I only want to
            play some saved album or playlist, I don't need to explore, discover
            or see more information about the track/artist.
            <br />
            <br />
            I'm relatively "organized", so I have a large set of playlists that
            match my mood and what I want to listen at the time. If you're like
            me, then FeatherPlay is made for you.
            <br />
            <br />
            <p className="text-2xl text-center font-extrabold">
              FeatherPlay is a modern take to old-school, classic music players
              like Winamp and foobar2000.
            </p>
          </p>
        </article>
      </section>
      <section className="snap-center h-full w-full flex flex-col items-center p-20 gap-20">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-black">No bloat. All the Features.</h1>
          <h2 className="w-2/3 text-2xl text-center text-dark-300/70">
            With zero bloat, FeatherPlay is extremely lean and gives you all the
            features that really matter. No more endless searching through
            Spotify recommendations and history, just switch between your albums
            and playlists effortless and enjoy your music.
          </h2>
        </div>
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-black">No bloat. All the Features.</h1>
          <FeatureList items={features} />
        </div>
      </section>
      <section className="snap-center h-full w-full flex flex-col justify-between items-center py-30 gap-20">
        <div className="h-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl font-black">Sounds good?</h1>
          <p className="text-dark-300/80 italic font-semibold">
            Only one thing left to do...
          </p>
          <NavLink to="">
            <button
              className="bg-brand-600 text-slate-100 px-3 py-2 rounded-md font-black uppercase hover:bg-brand-500 hover:cursor-pointer"
              type="button"
            >
              Get Started
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
            <NavLink to="/terms">Terms</NavLink>
          </div>
          <p className="text-dark-400 font-medium">
            © {new Date().getFullYear()} José Pereira. All rights reserved.
          </p>
        </article>
      </section>
    </div>
  );
}
