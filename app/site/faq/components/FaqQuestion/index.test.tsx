import { fireEvent, render, screen } from "@testing-library/react";

import { FaqQuestion } from ".";

test("should not display the content when question is closed", () => {
  render(
    <FaqQuestion title="Title">
      <div>Content</div>
    </FaqQuestion>,
  );

  expect(screen.queryByText("Content")).toBeNull();
});

test("should  display the content when question is open", async () => {
  render(
    <FaqQuestion title="Title">
      <div>Content</div>
    </FaqQuestion>,
  );

  fireEvent.click(screen.getByText("Title"));

  expect(screen.getByText("Content")).toBeInTheDocument();
});
