import { ChevronLeft, ChevronRight, Home } from "lucide-react";

import { IconButton } from "~/core/components/IconButton";
import { SearchBar } from "~/core/components/SearchBar";

import { Avatar } from "./Avatar";
import { NavbarSection } from "./NavbarSection";

export const Navbar = () => {
  const onBackClick = () => console.log("go back");

  const onFrontClick = () => console.log("go front");

  const onHomeClick = () => console.log("go home");

  const onProfileClick = () => console.log("profile click");

  const onSearchBarValueChange = (searchValue: string) =>
    console.log(searchValue);

  return (
    <nav className="w-full flex items-center justify-between py-2">
      <NavbarSection>
        <IconButton onClick={onBackClick}>
          <ChevronLeft />
        </IconButton>
        <IconButton onClick={onFrontClick}>
          <ChevronRight />
        </IconButton>
      </NavbarSection>
      <NavbarSection>
        <IconButton onClick={onHomeClick}>
          <Home />
        </IconButton>
        <SearchBar onValueChange={onSearchBarValueChange} />
      </NavbarSection>
      <IconButton onClick={onProfileClick}>
        <Avatar />
      </IconButton>
    </nav>
  );
};
