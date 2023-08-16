import { icons } from "@/node_modules/lucide-react";
import { motion, MotionProps } from "framer-motion";

type Props = {
  name: keyof typeof icons;
  color: string | undefined;
  size: string | number | undefined;
} & React.HTMLAttributes<HTMLDivElement> &
  MotionProps;

const Icon: React.FC<Props> = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

const MotionIcon: React.FC<Props> = ({ name, color, size, ...rest }) => {
  return (
    <motion.div {...rest}>
      <Icon {...{ name, color, size }} />
    </motion.div>
  );
};

export { Icon, MotionIcon };
