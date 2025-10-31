import { debounce } from ".";

test("should call last debounced function after the given delay", async () => {
  vi.useFakeTimers();

  const func = vi.fn();

  const t = debounce(func, 1000);

  t();
  t();
  t();

  await vi.runAllTimersAsync();

  expect(func).toHaveBeenCalledTimes(1);
});

test("should not call the function before the given delay", async () => {
  vi.useFakeTimers();

  const func = vi.fn();

  const t = debounce(func, 1000);

  t();
  t();
  t();

  await vi.advanceTimersByTimeAsync(500);

  expect(func).toHaveBeenCalledTimes(0);
});
