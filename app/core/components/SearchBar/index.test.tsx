import { fireEvent, render, screen } from "@testing-library/react";
import { SearchBar } from ".";

test("should not call the onChange callback before the debounce delay", () => {
  const onValueChange = vi.fn();

  render(<SearchBar onValueChange={onValueChange} />);

  const input = screen.getByRole("textbox");

  fireEvent.change(input, { target: { value: "test" } });

  expect(onValueChange).toBeCalledTimes(0);
});

test("should not call the onChange callback before the debounce delay", async () => {
  vi.useFakeTimers();

  const onValueChange = vi.fn();

  render(<SearchBar onValueChange={onValueChange} />);

  const input = screen.getByRole("textbox");

  fireEvent.change(input, { target: { value: "test" } });
  fireEvent.change(input, { target: { value: "test1" } });

  await vi.advanceTimersByTimeAsync(400);

  expect(onValueChange).toBeCalledWith("test1");
});
