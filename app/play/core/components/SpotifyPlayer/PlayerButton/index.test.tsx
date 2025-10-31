import { fireEvent, render, screen } from "@testing-library/react";

import { PlayerButton } from ".";

test("should call the given callback function when button is clicked", () => {
  const onClick = vi.fn();

  render(<PlayerButton onClick={onClick}>test</PlayerButton>);

  const btn = screen.getByRole("button");

  fireEvent.click(btn);

  expect(onClick).toHaveBeenCalledTimes(1);
});

test("should display the button active state correctly", () => {
  const onClick = vi.fn();

  render(
    <PlayerButton active onClick={onClick}>
      test
    </PlayerButton>,
  );

  const btn = screen.getByRole("button");

  expect(btn.className).toContain("text-dark-300");
});
