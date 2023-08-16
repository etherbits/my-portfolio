import { motion, MotionProps } from "framer-motion";
import Icon, { IconProps } from "./Icon";
import { HTMLAttributes } from "react";

type Props = IconProps & HTMLAttributes<HTMLDivElement> & MotionProps;

const MotionIcon: React.FC<Props> = ({ name, color, size, ...rest }) => {
  return (
    <motion.div {...rest}>
      <Icon {...{ name, color, size }} />
    </motion.div>
  );
};

export default MotionIcon;
