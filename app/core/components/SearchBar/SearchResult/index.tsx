interface SearchResultProps {
  artists: string;
  imgSrc: string;
  name: string;
  onSearchResultClick: (uri: string) => void;
  uri: string;
}

export const SearchResult = ({
  artists,
  imgSrc,
  name,
  onSearchResultClick,
  uri,
}: SearchResultProps) => {
  const onClick = () => onSearchResultClick(uri);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: a11y
    <article
      className="m-1 p-2 rounded-lg flex items-center gap-2 hover:cursor-pointer hover:bg-slate-700/60 overflow-hidden"
      onClick={onClick}
    >
      <div className="h-8 w-8 rounded overflow-hidden">
        <img src={imgSrc} alt={name}></img>
      </div>
      <div>
        <p className="w-70 overflow-hidden truncate">{name}</p>
        <p className="text-xs font-medium">{artists}</p>
      </div>
    </article>
  );
};
