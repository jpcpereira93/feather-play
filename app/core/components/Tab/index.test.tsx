import { render, screen } from "@testing-library/react";

import { Tab } from ".";

test("should display the tab active state correctly", () => {
  render(<Tab active>test</Tab>);

  const tab = screen.getByText("test");

  expect(tab.className).toContain("bg-dark-600");
});
