import { useTranslation } from "react-i18next";

import { useGetSpotifyArtistTopTracksQuery } from "~/play/artist/hooks";
import { usePlaySpotifyItemMutation } from "~/play/core/hooks";
import {
  getPlaceholderArray,
  getSpotifyItemImageUrl,
  msToMinAndSec,
} from "~/play/core/utils";

import { ArtistItem, ArtistItemSkeleton } from "../ArtistItem";
import { ArtistSection } from "../ArtistSection";

interface ArtistTopTracksProps {
  artistId: string;
}

export const ArtistTopTracks = ({ artistId }: ArtistTopTracksProps) => {
  const { t } = useTranslation();

  const { data: topTracks, isLoading: isLoadingTopTracks } =
    useGetSpotifyArtistTopTracksQuery(artistId);

  const { mutate: mutatePlaySpotifyItem } = usePlaySpotifyItemMutation();

  const onTopTrackClick = (uri: string) => {
    mutatePlaySpotifyItem({ uris: [uri] });
  };

  return (
    <ArtistSection title={t("artist.top_tracks.title")}>
      {!isLoadingTopTracks && topTracks
        ? topTracks.tracks.map(({ album, duration_ms, id, name, uri }) => (
            <ArtistItem
              image={getSpotifyItemImageUrl(album.images)}
              key={id}
              onArtistItemClick={onTopTrackClick}
              subtitle={msToMinAndSec(duration_ms)}
              title={name}
              uri={uri}
            />
          ))
        : getPlaceholderArray(10).map((value) => (
            <ArtistItemSkeleton key={value} />
          ))}
    </ArtistSection>
  );
};
