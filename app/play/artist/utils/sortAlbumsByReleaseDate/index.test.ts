import { sortAlbumsByMostRecent } from ".";

test("should return 1 when second album is the most recent", () => {
  expect(
    sortAlbumsByMostRecent([
      { release_date: "2025-01-02" } as any,
      { release_date: "2025-02-01" } as any,
      { release_date: "2025-01-05" } as any,
      { release_date: "2024-06-10" } as any,
    ]),
  ).toEqual([
    {
      release_date: "2025-02-01",
    },
    {
      release_date: "2025-01-05",
    },
    {
      release_date: "2025-01-02",
    },
    {
      release_date: "2024-06-10",
    },
  ]);
});
