import { Search } from "lucide-react";
import type { ChangeEvent } from "react";

import { debounce } from "~/core/utils";

interface SearchBarProps {
  onValueChange: (value: string) => void;
}

export const SearchBar = ({ onValueChange }: SearchBarProps) => {
  const onChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    onValueChange(value);
  }, 300);

  return (
    <div
      className="bg-slate-700/60 text-slate-400 p-2 rounded-lg min-w-sm flex items-center gap-2 text-sm font-semibold tracking-tight
"
    >
      <Search />
      <input
        className="w-full focus:outline-none"
        placeholder="What do you want to listen to?"
        type="text"
        onChange={onChange}
      />
    </div>
  );
};
