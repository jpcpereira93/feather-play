import React, { type ReactNode, useMemo } from "react";

import { getPlaceholderArray, handleInfiniteScroll } from "~/play/core/utils";

import { LibraryCardSkeleton } from "../LibraryCard";

interface LibraryCarouselProps {
  children: ReactNode[];
  onLoadMore?: () => void;
}

export const LibraryCarousel = ({
  children,
  onLoadMore,
}: LibraryCarouselProps) => {
  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    if (onLoadMore) {
      handleInfiniteScroll(event, onLoadMore, 500);
    }
  };

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full px-8 py-4 gap-4 overflow-scroll"
      onScroll={onScroll}
    >
      {children}
    </div>
  );
};

export const LibraryCarouselSkeleton = React.memo(() => {
  const placeholder = useMemo(() => getPlaceholderArray(20), []);

  return (
    <LibraryCarousel>
      {placeholder.map((value) => (
        <LibraryCardSkeleton key={value} />
      ))}
    </LibraryCarousel>
  );
});
