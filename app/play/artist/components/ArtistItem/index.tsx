import { Play } from "lucide-react";
import React from "react";

interface ArtistItemProps {
  image: string;
  onArtistItemClick?: (uri: string) => void;
  subtitle: string;
  title: string;
  uri: string;
}

export const ArtistItem = React.memo(
  ({ image, onArtistItemClick, subtitle, title, uri }: ArtistItemProps) => {
    const onClick = () => {
      if (onArtistItemClick) {
        onArtistItemClick(uri);
      }
    };

    return (
      // biome-ignore lint/a11y/useKeyWithClickEvents: a11y
      <li
        className="group hover:rounded-lg hover:cursor-pointer hover:bg-dark-600 p-2 text-sm grid items-center grid-cols-[40px_1fr] hover:grid-cols-[40px_1fr_1.25rem]  gap-2"
        onClick={onClick}
      >
        <div className="rounded-lg overflow-hidden">
          <img src={image} alt={title}></img>
        </div>
        <div className="overflow-hidden truncate">
          <p className="font-bold overflow-hidden truncate">{title}</p>
          <p className="text-xs">{subtitle}</p>
        </div>

        <button className="hidden size-6 group-hover:block" type="button">
          <Play fill="currentColor" size={14} />
        </button>
      </li>
    );
  },
);
