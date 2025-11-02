import { handleInfiniteScroll } from ".";

test("should run the callback function when the bottom offset is reached", () => {
  const cb = vi.fn();

  handleInfiniteScroll(
    {
      currentTarget: {
        offsetTop: 100,
        scrollHeight: 600,
        scrollTop: 400,
      } as any,
    } as any,
    cb,
    400,
  );

  expect(cb).toHaveBeenCalledOnce();
});

test("should not run the callback function when the bottom offset is not reached", () => {
  const cb = vi.fn();

  handleInfiniteScroll(
    {
      currentTarget: {
        offsetTop: 100,
        scrollHeight: 900,
        scrollTop: 400,
      } as any,
    } as any,
    cb,
    200,
  );

  expect(cb).toHaveBeenCalledTimes(0);
});
