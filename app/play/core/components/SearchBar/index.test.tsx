import { fireEvent, render, screen } from "@testing-library/react";

import { SearchBar } from ".";

const mockSearchQueryRefetch = vi.fn();

vi.mock("~/play/core/hooks", async (importOriginal) => ({
  ...(await importOriginal()),
  usePlaySpotifyItemMutation: () => ({ mutate: vi.fn() }),
  useSpotifySearchQuery: () => ({
    refetch: () => mockSearchQueryRefetch(),
  }),
}));

test("should not call the refetch before the debounce delay", () => {
  const { rerender } = render(<SearchBar />);

  const input = screen.getByRole("textbox");

  fireEvent.change(input, { target: { value: "test" } });

  rerender(<SearchBar />);

  expect(mockSearchQueryRefetch).toBeCalledTimes(0);
});

test("should call the refetch after the debounce delay", async () => {
  vi.useFakeTimers();

  const { rerender } = render(<SearchBar />);

  const input = screen.getByRole("textbox");

  fireEvent.change(input, { target: { value: "test" } });
  fireEvent.change(input, { target: { value: "test1" } });

  await vi.advanceTimersByTimeAsync(400);

  rerender(<SearchBar />);

  expect(mockSearchQueryRefetch).toBeCalledTimes(1);
});
