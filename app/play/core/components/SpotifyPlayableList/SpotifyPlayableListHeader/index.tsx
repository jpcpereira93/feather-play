import type { Image } from "@spotify/web-api-ts-sdk";
import { Play } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { usePlaySpotifyItemMutation } from "~/play/core/hooks";
import { getSpotifyItemImageUrl } from "~/play/core/utils";

interface SpotifyPlayableListHeaderProps {
  description: string;
  images: Image[];
  name: string;
  owner: string;
  uri: string;
  total: number;
  type: string;
}

export const SpotifyPlayableListHeader = React.memo(
  ({
    description,
    images,
    name,
    owner,
    uri,
    total,
    type,
  }: SpotifyPlayableListHeaderProps) => {
    const { t } = useTranslation();

    const { mutate: mutatePlaySpotifyItem } = usePlaySpotifyItemMutation();

    const [backgroundColor, setBackgroundColor] = useState<string>();

    const getImgSrc = useCallback(
      () => getSpotifyItemImageUrl(images),
      [images],
    );

    const onPlayClick = () => mutatePlaySpotifyItem({ uri });

    useEffect(() => {
      const context = document.createElement("canvas").getContext("2d");

      const imgObj = new Image();
      imgObj.src = getImgSrc();
      imgObj.setAttribute("crossOrigin", "");

      imgObj.onload = () => {
        if (context) {
          context.drawImage(imgObj, 0, 0, 1, 1);
          const i = context.getImageData(0, 0, 1, 1).data;

          const rgba = `rgba(${i[0]},${i[1]},${i[2]},0.5)`;

          setBackgroundColor(rgba);
        }
      };
    }, [getImgSrc]);

    return (
      <div
        className="flex pt-4 px-4 box-border"
        style={{
          background: `linear-gradient(180deg, ${backgroundColor}, transparent)`,
        }}
      >
        <div className="flex h-full w-full items-center justify-between">
          <div className="h-full w-full grid grid-cols-[200px_1fr] gap-6">
            <div className="rounded-lg overflow-hidden">
              <img src={getImgSrc()} alt={name}></img>
            </div>
            <div className="flex flex-col justify-end gap-4 py-1 overflow-hidden">
              <h2 className="font-semibold">
                {t(`playable_list.header.list_type.${type}`)}
              </h2>
              <div className="flex flex-col">
                <h1 className="text-7xl font-black text-dark-300 pb-3 truncate overflow-hidden">
                  {name}
                </h1>
                <p className="text-sm -mt-1 truncate overflow-hidden">
                  {description}
                </p>
              </div>
              <p className="flex items-center gap-1 text-sm">
                <span className="font-semibold text-dark-300">{owner}</span>•
                <span>
                  {t("playable_list.header.tracks", { tracks: total })}
                </span>
              </p>
            </div>
          </div>
          <div className="flex h-full w-50 items-center justify-center py-1">
            <button
              className="bg-dark-400 text-dark-600 rounded-full p-6 hover:cursor-pointer hover:bg-dark-300"
              onClick={onPlayClick}
              type="button"
            >
              <Play fill="currentColor" size={40} />
            </button>
          </div>
        </div>
      </div>
    );
  },
);

export const SpotifyPlayableListHeaderSkeleton = React.memo(() => (
  <div className="flex pt-4 px-4 box-border">
    <div className="flex h-full w-full items-center justify-between">
      <div className="h-full w-full grid grid-cols-[200px_1fr] gap-6">
        <div className="rounded-lg overflow-hidden h-[200px] bg-dark-600"></div>
        <div className="flex flex-col justify-end gap-4 py-1 overflow-hidden">
          <h2 className="font-semibold bg-dark-600 text-transparent h-fit w-fit rounded-lg">
            Placeholder
          </h2>
          <div className="flex flex-col">
            <h1 className="text-7xl font-black truncate overflow-hidden bg-dark-600 text-transparent h-fit w-fit rounded-lg pb-3">
              Music name
            </h1>
          </div>
          <p className="flex items-center gap-1 text-sm bg-dark-600 text-transparent h-fit w-fit rounded-lg">
            <span className="font-semibold">Owner name</span>•
            <span>xx tracks</span>
          </p>
        </div>
      </div>
    </div>
  </div>
));
