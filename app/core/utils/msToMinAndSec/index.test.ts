import { msToMinAndSec } from ".";

test("should return the given ms in min:sec", () => {
  expect(msToMinAndSec(200546)).toBe("3:21");
});

test("should handle the < 10s case correctly", () => {
  expect(msToMinAndSec(305906)).toBe("5:06");
});
