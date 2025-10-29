import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { IconButton } from "~/core/components/IconButton";
import { SearchBar } from "~/core/components/SearchBar";

import { Avatar } from "./Avatar";
import { NavbarSection } from "./NavbarSection";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goneBackRef = useRef(false);

  const [goneBack, setGoneBack] = useState<number>(0);
  const [history, setHistory] = useState<number>(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Location is needed to trigger the code to run.
  useEffect(() => {
    if (!goneBackRef.current) {
      setHistory((curr) => curr + 1);
      setGoneBack(0);
    }

    goneBackRef.current = false;
  }, [location]);

  const onBackClick = () => {
    goneBackRef.current = true;
    setHistory((curr) => curr - 1);
    setGoneBack((curr) => curr + 1);
    navigate(-1);
  };

  const onFrontClick = () => {
    goneBackRef.current = false;
    setHistory((curr) => curr + 1);
    setGoneBack((curr) => curr - 1);
    navigate(+1);
  };

  const onHomeClick = () => navigate("/library");

  const onProfileClick = () => console.log("profile click");

  const onSearchBarValueChange = (searchValue: string) =>
    console.log(searchValue);

  return (
    <nav className="w-full flex items-center justify-between py-2">
      <NavbarSection>
        <IconButton
          ariaLabel="Go back"
          disabled={history < 2}
          onClick={onBackClick}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          ariaLabel="Go forward"
          disabled={goneBack === 0}
          onClick={onFrontClick}
        >
          <ChevronRight />
        </IconButton>
      </NavbarSection>
      <NavbarSection>
        <IconButton ariaLabel="Home" onClick={onHomeClick}>
          <Home />
        </IconButton>
        <SearchBar onValueChange={onSearchBarValueChange} />
      </NavbarSection>
      <IconButton ariaLabel="Profile" onClick={onProfileClick}>
        <Avatar />
      </IconButton>
    </nav>
  );
};
