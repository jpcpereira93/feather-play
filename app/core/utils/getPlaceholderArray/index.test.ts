import { getPlaceholderArray } from ".";

test("should return an array with the given size filled with values equal index + 1", () =>
  expect(getPlaceholderArray(5)).toEqual([1, 2, 3, 4, 5]));
