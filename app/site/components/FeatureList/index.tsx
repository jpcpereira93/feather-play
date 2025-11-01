import type { IFeatureItem } from "~/site/models";

import { FeatureListItem } from "./FeatureListItem";

interface FeatureListProps {
  items: IFeatureItem[];
}

export const FeatureList = ({ items }: FeatureListProps) => {
  return (
    <ul className="grid grid-cols-3 gap-6">
      {items.map(({ label }) => (
        <FeatureListItem key={label} label={label} />
      ))}
    </ul>
  );
};
