import type { ReactNode } from "react";

interface ArtistSectionProps {
  children: ReactNode;
  title: string;
}

export const ArtistSection = ({ children, title }: ArtistSectionProps) => {
  return (
    <div className="flex flex-col p-6 gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
        {children}
      </ul>
    </div>
  );
};
