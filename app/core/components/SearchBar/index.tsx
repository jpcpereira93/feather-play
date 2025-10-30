import { Search, X } from "lucide-react";
import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  usePlaySpotifyItemMutation,
  useSpotifySearchQuery,
} from "~/core/hooks";
import {
  debounce,
  getArtistsString,
  getSpotifyItemImageUrl,
} from "~/core/utils";

import { SearchResult } from "./SearchResult";

export const SearchBar = () => {
  const { t } = useTranslation();

  const inputRef = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState<string | undefined>();
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { data: searchResults, refetch } = useSpotifySearchQuery(searchTerm);
  const { mutate: playSpotifyItemMutate } = usePlaySpotifyItemMutation();

  const onChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchTerm(value);
  }, 300);

  const onClear = () => {
    setSearchTerm(undefined);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const onBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSearchResultClick = (uri: string) =>
    playSpotifyItemMutate({ uris: [uri] });

  // biome-ignore lint/correctness/useExhaustiveDependencies: Should run when searchTerm changes
  useEffect(() => {
    if (searchTerm !== undefined) {
      refetch();
    }
  }, [searchTerm, refetch]);

  return (
    <div
      className="relative bg-dark-700 p-2 rounded-lg min-w-sm flex items-center gap-2 text-sm font-semibold 
"
    >
      <Search />
      <input
        className="w-full focus:outline-none"
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={t("search.placeholder")}
        ref={inputRef}
        type="text"
      />
      {searchTerm && searchTerm.length > 0 && (
        <button
          className="hover:cursor-pointer"
          onClick={onClear}
          type="button"
        >
          <X size={18} />
        </button>
      )}
      {isFocused && searchResults && (
        <div className="absolute top-12 left-0 right-0 z-50 h-100 bg-dark-700 rounded-lg p-2 overflow-scroll">
          {searchResults.tracks.items.map(
            ({ album, artists, id, name, uri }) => (
              <SearchResult
                artists={getArtistsString(artists)}
                imgSrc={getSpotifyItemImageUrl(album.images)}
                key={id}
                name={name}
                onSearchResultClick={onSearchResultClick}
                uri={uri}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
};
