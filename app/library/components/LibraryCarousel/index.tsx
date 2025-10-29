import React, { type ReactNode, useMemo } from "react";

import { getPlaceholderArray } from "~/core/utils";

import { LibraryCardSkeleton } from "../LibraryCard";

interface LibraryCarouselProps {
  children: ReactNode[];
}

export const LibraryCarousel = ({ children }: LibraryCarouselProps) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full px-4 gap-4 overflow-scroll">
    {children}
  </div>
);

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
