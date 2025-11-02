import { getNextPageParam } from ".";

test("should return the next page param correctly", () => {
  expect(
    getNextPageParam({ next: "aaaa", offset: 20, limit: 20 } as any),
  ).toEqual(40);
});

test("should return null when there is no next page", () => {
  expect(
    getNextPageParam({ next: null, offset: 20, limit: 20 } as any),
  ).toEqual(null);
});
