"use client";

import React, { HTMLAttributes } from "react";
import { cn, getColorRGBA } from "../utils/tailwind";
import { MotionProps, motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: HTMLAttributes<HTMLButtonElement>["className"];
  containerClassName?: HTMLAttributes<HTMLButtonElement>["className"];
} & HTMLAttributes<HTMLButtonElement> &
  MotionProps;

const variants = {
  rest: {
    translateY: "0%",
    scale: "1",
    borderColor: getColorRGBA("slate-400"),
  },
  hover: {
    translateY: "-5%",
    scale: "1.02",
    borderColor: getColorRGBA("slate-200"),
  },
  tap: {
    translateY: "20%",
    scale: ".95",
    borderColor: getColorRGBA("blue-200"),
  },
};

const Button: React.FC<Props> = ({
  children,
  className,
  containerClassName,
  ...rest
}) => {
  return (
    <motion.div
      className={cn("relative", containerClassName)}
      whileTap={"tap"}
      whileHover={"hover"}
      initial="rest"
      animate="rest"
    >
      <motion.button
        className={cn(
          `block  w-fit whitespace-nowrap rounded-[4px] border 
          bg-black px-5 py-3 text-xl tracking-wider text-slate-300`,
          className,
        )}
        variants={variants}
        transition={{ duration: 0.1 }}
        {...rest}
      >
        {children}
      </motion.button>
      <div
        className={`absolute left-0 top-[20%] z-[-1] h-full
          w-full  scale-95 rounded-[4px] border opacity-30`}
      />
    </motion.div>
  );
};

export default Button;
