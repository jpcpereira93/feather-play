import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

import { useGetSpotifyArtistAlbumsQuery } from "~/play/artist/hooks";
import { getSpotifyItemImageUrl } from "~/play/core/utils";

import { ArtistItem } from "../ArtistItem";
import { ArtistSection } from "../ArtistSection";

interface ArtistAlbumsProps {
  artistId: string;
}

export const ArtistAlbums = ({ artistId }: ArtistAlbumsProps) => {
  const { t } = useTranslation();

  const { data: albums, isLoading: isLoadingAlbums } =
    useGetSpotifyArtistAlbumsQuery(artistId);

  const getArtistAlbumSubtitle = (releaseDate: string, albumType: string) => {
    return `${t(`album.type.${albumType}`)} · ${new Date(releaseDate).getFullYear()}`;
  };

  if (isLoadingAlbums || !albums) {
    return null;
  }

  return (
    <ArtistSection title={t("artist.albums.title")}>
      {albums.items.map(
        ({ album_type, id, images, name, uri, release_date }) => (
          <NavLink key={id} to={`/play/albums/${id}`} prefetch="intent">
            <ArtistItem
              image={getSpotifyItemImageUrl(images)}
              subtitle={getArtistAlbumSubtitle(release_date, album_type)}
              title={name}
              uri={uri}
            />
          </NavLink>
        ),
      )}
    </ArtistSection>
  );
};
