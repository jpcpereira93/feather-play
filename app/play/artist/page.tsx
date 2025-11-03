import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useGetSpotifyArtistQuery } from "~/play/artist/hooks";

import { useDocumentTitle } from "~/play/core/hooks";
import { getSpotifyItemImageUrl } from "~/play/core/utils";

import type { Route } from "./+types/page";

import { ArtistAlbums, ArtistTopTracks } from "./components";

export default function Artist({ params }: Route.ComponentProps) {
  const { artistId } = params;

  const { t } = useTranslation();
  const { setTitle } = useDocumentTitle();

  const { data: artist, isLoading: isLoadingArtist } =
    useGetSpotifyArtistQuery(artistId);

  useEffect(() => {
    if (artist) {
      setTitle(
        t("title.artist", {
          artist: artist.name,
        }),
      );
    }
  }, [artist, setTitle, t]);

  return (
    <div className="h-full w-full grid grid-rows-[250px_1fr]">
      {!isLoadingArtist && artist ? (
        <div
          className="h-full overflow-hidden p-5 flex flex-col justify-end"
          style={{
            backgroundImage: `url(${getSpotifyItemImageUrl(artist.images)})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1 className="font-black text-6xl text-dark-300 uppercase">
            {artist.name}
          </h1>
          <h2 className="font-semibold">
            {t("artist.followers", { count: artist.followers.total })}
          </h2>
        </div>
      ) : (
        <div className="bg-dark-600"></div>
      )}
      <div className="h-full w-full flex flex-col overflow-auto">
        <ArtistTopTracks artistId={artistId} />
        <ArtistAlbums artistId={artistId} />
      </div>
    </div>
  );
}
