import { fireEvent, render, screen } from "@testing-library/react";

import { IconButton } from ".";

test("should call the given callback function when button is clicked", () => {
  const onClick = vi.fn();

  render(<IconButton onClick={onClick}>test</IconButton>);

  const btn = screen.getByText("test");

  fireEvent.click(btn);

  expect(onClick).toHaveBeenCalledTimes(1);
});
