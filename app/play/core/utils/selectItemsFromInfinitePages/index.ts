import type { Page } from "@spotify/web-api-ts-sdk";
import type { InfiniteData } from "@tanstack/react-query";

export function selectItemsFromInfinitePages<T>(data: InfiniteData<Page<T>>) {
  const itemsMerged: T[] = [];
  let itemsTotal = 0;

  data.pages.forEach(({ items, total }) => {
    itemsTotal = total;

    itemsMerged.push(...items);
  });

  return { items: itemsMerged, total: itemsTotal };
}
