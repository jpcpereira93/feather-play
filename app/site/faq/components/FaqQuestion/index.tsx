/** biome-ignore-all lint/a11y/noStaticElementInteractions: a11y */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: a11y */
import { ChevronDown, ChevronUp } from "lucide-react";
import { type PropsWithChildren, useState } from "react";

import { SiteBox } from "~/site/components";

interface FaqQuestionProps {
  title: string;
}

export const FaqQuestion = ({
  children,
  title,
}: FaqQuestionProps & PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggleClick = () => setIsOpen((open) => !open);

  return (
    <article className="w-9/10 sm:w-3/4 lg:w-2/3 xl:w-1/2">
      <SiteBox rounded>
        <div className="h-fit w-full flex flex-col gap-6">
          <div
            className="w-full flex items-center justify-between hover:cursor-pointer hover:text-dark-300"
            onClick={onToggleClick}
          >
            <h1 className="font-bold">{title}</h1>
            <button className="cursor-pointer" type="button">
              {isOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>
          {isOpen && (
            <p className="text-wrap whitespace-pre-line">{children}</p>
          )}
        </div>
      </SiteBox>
    </article>
  );
};
