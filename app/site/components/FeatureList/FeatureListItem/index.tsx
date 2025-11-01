import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface FeatureListItemProps {
  label: string;
}

export const FeatureListItem = ({ label }: FeatureListItemProps) => {
  const { t } = useTranslation();

  return (
    <li className="flex items-center gap-3">
      <span className="text-green-500">
        <CheckCircle2 size={22} />
      </span>
      <span className="font-semibold">{t(label)}</span>
    </li>
  );
};
