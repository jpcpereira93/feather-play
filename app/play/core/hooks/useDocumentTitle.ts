import { useLayoutEffect, useRef, useState } from "react";

export const useDocumentTitle = () => {
  const defaultTitle = useRef<string | null>(null);

  const [title, setTitle] = useState<string>();

  useLayoutEffect(() => {
    defaultTitle.current = window.document.title;

    return () => {
      console.log("object");
      if (defaultTitle.current) {
        window.document.title = defaultTitle.current;
      }
    };
  }, []);

  useLayoutEffect(() => {
    window.document.title = title ?? defaultTitle.current ?? "";
  }, [title]);

  return { setTitle };
};
