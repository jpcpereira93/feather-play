import type { ReactNode } from "react";

interface LibraryCarouselProps {
  children: ReactNode[];
}

export const LibraryCarousel = ({ children }: LibraryCarouselProps) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full px-4 gap-4 overflow-scroll">
    {children}
  </div>
);
