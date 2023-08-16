import { icons } from "@/node_modules/lucide-react";

export type IconName = keyof typeof icons;

export type IconProps = {
  name: IconName;
  color: string | undefined;
  size: string | number | undefined;
};

const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
