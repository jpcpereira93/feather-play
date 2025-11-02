import { render, screen } from "@testing-library/react";

import { FeatureList } from ".";

test("should display all the items", () => {
  const items = [
    { label: "Feature 1" },
    { label: "Feature 2" },
    { label: "Feature 3" },
  ];
  render(<FeatureList items={items} />);

  expect(screen.getByText("Feature 1")).toBeInTheDocument();
  expect(screen.getByText("Feature 2")).toBeInTheDocument();
  expect(screen.getByText("Feature 3")).toBeInTheDocument();
});
