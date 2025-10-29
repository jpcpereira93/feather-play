import { useCallback } from "react";

import { useGetCurrentSpotifyUserProfileQuery } from "~/core/hooks";

export const Avatar = () => {
  const { data } = useGetCurrentSpotifyUserProfileQuery();

  const getDisplayLetters = useCallback(() => {
    if (!data) {
      return null;
    }

    const slugs = data.display_name.split(" ");

    let letters = slugs[0][0];

    if (slugs.length > 1) {
      letters += slugs[1][0];
    }

    return letters;
  }, [data]);

  const getImage = useCallback(() => {
    if (!data || data.images.length === 0) {
      return "";
    }

    return data.images[0].url;
  }, [data]);

  return (
    <div className="w-6 h-6 rounded-full bg-slate-400 text-slate-800 overflow-hidden">
      {data &&
        (getImage() ? (
          <img src={getImage()} alt="profile" fetchPriority="high" />
        ) : (
          <span className="uppercase">{getDisplayLetters()}</span>
        ))}
    </div>
  );
};
