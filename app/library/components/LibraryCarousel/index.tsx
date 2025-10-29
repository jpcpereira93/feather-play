import React, { type ReactNode, useMemo } from "react";
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
  const placeholder = useMemo(
    () => Array.from(Array(20), (_, index) => index + 1),
    [],
  );

  return (
    <LibraryCarousel>
      {placeholder.map((value) => (
        <LibraryCardSkeleton key={value} />
      ))}
    </LibraryCarousel>
  );
});
