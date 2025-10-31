import { getSpotifyItemImageUrl } from ".";

test("should return an empty url when there is no images", () => {
  expect(getSpotifyItemImageUrl()).toBe("");
});

test("should return an empty url when the images list is empty", () => {
  expect(getSpotifyItemImageUrl([])).toBe("");
});

test("should return the image url correctly", () => {
  expect(getSpotifyItemImageUrl([{ url: "www.example.com" } as any])).toBe(
    "www.example.com",
  );
});
