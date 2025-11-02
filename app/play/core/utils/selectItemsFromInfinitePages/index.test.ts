import { selectItemsFromInfinitePages } from ".";

test("should return the merged items from infinite pages", () => {
  const data = {
    pages: [
      { items: ["item1", "item2"], total: 5 },
      { items: ["item3", "item4"], total: 5 },
      { items: ["item5"], total: 5 },
    ],
  };

  expect(selectItemsFromInfinitePages(data as any)).toEqual({
    items: ["item1", "item2", "item3", "item4", "item5"],
    total: 5,
  });
});

test("should handle the empty pages gracefully", () => {
  const data = {
    pages: [],
  };

  expect(selectItemsFromInfinitePages(data as any)).toEqual({
    items: [],
    total: 0,
  });
});
