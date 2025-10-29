import type { Artist } from "@spotify/web-api-ts-sdk";

export const getArtistsString = (artists: Artist[]) => {
  let res = artists[0].name;

  if (artists.length > 1) {
    res += ` feat ${artists
      .slice(1)
      .map(({ name }) => name)
      .join(",")}`;
  }

  return res;
};
