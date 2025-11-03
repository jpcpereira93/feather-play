import { getArtistsString } from ".";

test("should handle the single artist case correctly", () => {
  const artists = [{ name: "Artist 1" } as any];

  expect(getArtistsString(artists)).toBe("Artist 1");
});

test("should handle the 2 artist case correctly", () => {
  const artists = [{ name: "Artist 1" } as any, { name: "Artist 2" } as any];

  expect(getArtistsString(artists)).toBe("Artist 1 ft. Artist 2");
});

test("should handle the multiple artist case correctly", () => {
  const artists = [
    { name: "Artist 1" } as any,
    { name: "Artist 2" } as any,
    { name: "Artist 3" } as any,
  ];

  expect(getArtistsString(artists)).toBe("Artist 1 ft. Artist 2,Artist 3");
});
