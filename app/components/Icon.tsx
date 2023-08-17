import { icons } from "@/node_modules/lucide-react";

export type IconName = keyof typeof icons;

export type IconProps = {
  name: IconName;
  color: string | undefined;
  size?: string | number | undefined;
  strokeWidth?: string | number | undefined;
};

const Icon: React.FC<IconProps> = ({ name, color, size, strokeWidth }) => {
  const LucideIcon = icons[name];

  return <LucideIcon strokeWidth={strokeWidth} color={color} size={size} />;
};

export default Icon;
