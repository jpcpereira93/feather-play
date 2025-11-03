import type { Artist, SimplifiedArtist } from "@spotify/web-api-ts-sdk";

export const getArtistsString = (artists: Artist[] | SimplifiedArtist[]) => {
  let res = artists[0].name;

  if (artists.length > 1) {
    res += ` ft. ${artists
      .slice(1)
      .map(({ name }) => name)
      .join(",")}`;
  }

  return res;
};
