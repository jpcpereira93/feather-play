import { useTranslation } from "react-i18next";

import { useGetSpotifyArtistQuery } from "~/play/artist/hooks";
import { getSpotifyItemImageUrl } from "~/play/core/utils";

import type { Route } from "./+types/page";

import { ArtistAlbums, ArtistTopTracks } from "./components";

export default function Artist({ params }: Route.ComponentProps) {
  const { artistId } = params;
  const { t } = useTranslation();

  const { data: artist, isLoading: isLoadingArtist } =
    useGetSpotifyArtistQuery(artistId);

  if (isLoadingArtist || !artist) {
    return null;
  }

  const { followers, images, name } = artist;

  return (
    <div className="h-full w-full grid grid-rows-[250px_1fr]">
      <div
        className="h-full overflow-hidden p-5 flex flex-col justify-end"
        style={{
          backgroundImage: `url(${getSpotifyItemImageUrl(images)})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-black text-6xl text-dark-300 uppercase">{name}</h1>
        <h2 className="font-semibold">
          {t("artist.followers", { count: followers.total })}
        </h2>
      </div>
      <div className="h-full w-full flex flex-col overflow-auto">
        <ArtistTopTracks artistId={artistId} />
        <ArtistAlbums artistId={artistId} />
      </div>
    </div>
  );
}
