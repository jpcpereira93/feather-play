import type { Image } from "@spotify/web-api-ts-sdk";

export const getSpotifyItemImageUrl = (images?: Image[]) => {
  if (!images || images.length === 0) {
    return "";
  }

  return images[0].url;
};
