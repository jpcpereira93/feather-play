import type { Page } from "@spotify/web-api-ts-sdk";

export const getNextPageParam = <T>(lastPage: Page<T>) =>
  lastPage.next ? lastPage.offset + lastPage.limit : null;
