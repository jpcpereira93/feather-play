import { useLayoutEffect, useRef, useState } from "react";
import { usePlayingContext } from "../context";

export const useDocumentTitle = () => {
  const { currentTrackArtists, currentTrackName, isPlaying } =
    usePlayingContext();

  const defaultTitle = useRef<string | null>(null);

  const [title, setTitle] = useState<string>();

  useLayoutEffect(() => {
    defaultTitle.current = window.document.title;

    return () => {
      if (defaultTitle.current) {
        window.document.title = defaultTitle.current;
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (isPlaying && currentTrackName && currentTrackArtists) {
      window.document.title = `${currentTrackName} · ${currentTrackArtists}`;
    } else {
      window.document.title = title ?? defaultTitle.current ?? "";
    }
  }, [currentTrackArtists, currentTrackName, isPlaying, title]);

  return { setTitle };
};
