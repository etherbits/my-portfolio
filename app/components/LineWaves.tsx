"use client";
import React, { ComponentProps } from "react";
import { AnimationProps, MotionProps, Transition, motion } from "framer-motion";
import { waveLines } from "./waves";
import { cn } from "../utils/tailwind";

type Props = {
  type: keyof typeof waveLines;
  className?: ComponentProps<"svg">["className"];
  transition?: Transition;
} & MotionProps;

const LineWaves: React.FC<Props> = ({
  type,
  className,
  transition,
  ...rest
}) => {
  return (
    <motion.svg
      viewBox={waveLines[type].viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none fixed z-[-2] overflow-hidden stroke-slate-600 stroke-[1.5px]",
        className,
      )}
    >
      {waveLines[type]?.lines &&
        waveLines[type].lines.map((line, i) => {
          return (
            <motion.path
              key={i}
              d={line.d}
              initial={{ pathLength: 0.1, opacity: 0 }}
              animate={{ pathLength: 1, opacity: +(line.opacity ?? 1) }}
              transition={
                {
                  delay: 0 + i * 0.01,
                  duration: 1.5 + i * 0.05,
                  ...transition,
                } as Transition
              }
              {...rest}
            />
          );
        })}
    </motion.svg>
  );
};

export default LineWaves;
