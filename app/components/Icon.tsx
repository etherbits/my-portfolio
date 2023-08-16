import { icons } from "lucide-react";

type Props = {
  name: keyof typeof icons;
  color: string | undefined;
  size: string | number | undefined;
};

const Icon: React.FC<Props> = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
