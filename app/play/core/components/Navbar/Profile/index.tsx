import { SquareArrowOutUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { IconButton } from "~/play/core/components/IconButton";
import { useSpotifyApiContext } from "~/play/core/context";
import { debounce } from "~/play/core/utils";

import { Avatar } from "../Avatar";
import { ProfileItem } from "./ProfileItem";

export const Profile = () => {
  const { t } = useTranslation();
  const { spotifyApi } = useSpotifyApiContext();

  const navigate = useNavigate();

  const menuRef = useRef<HTMLUListElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onAccountClick = () => {
    window.removeEventListener("click", onOutsideClick);

    window.open("http://spotify.com/pt-pt/account/overview/", "_blank");

    setIsMenuOpen(false);
  };

  const onLogout = () => {
    window.removeEventListener("click", onOutsideClick);

    spotifyApi.logOut();

    localStorage.removeItem("spotifyClientId");

    setIsMenuOpen(false);

    navigate("/");
  };

  const onOutsideClick = (ev: MouseEvent) => {
    if (menuRef.current) {
      const { clientX, clientY } = ev;
      const { height, x, width, y } = menuRef.current.getBoundingClientRect();

      if (
        clientX < x ||
        clientX > x + width ||
        clientY < y ||
        clientY > y + height
      ) {
        window.removeEventListener("click", onOutsideClick);
        setIsMenuOpen(false);
      }
    }
  };

  const onProfileClick = debounce(() => {
    setIsMenuOpen((open) => !open);
  }, 200);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Avoid multiple runs
  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        window.addEventListener("click", onOutsideClick);
      }, 300);
    } else {
      window.removeEventListener("click", onOutsideClick);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
    }
  }, [isMenuOpen]);

  return (
    <div className="relative flex w-20 justify-end">
      <IconButton ariaLabel="Profile" onClick={onProfileClick}>
        <Avatar />
      </IconButton>
      {isMenuOpen && (
        <ul
          className="absolute top-12 right-0 z-50 w-50 bg-dark-700 rounded-lg p-2"
          ref={menuRef}
        >
          <ProfileItem
            icon={<SquareArrowOutUpRight size={14} />}
            label={t("profile.menu.items.account")}
            onClick={onAccountClick}
          />
          <ProfileItem
            label={t("profile.menu.items.logout")}
            onClick={onLogout}
          />
        </ul>
      )}
    </div>
  );
};
