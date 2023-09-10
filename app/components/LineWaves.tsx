"use client";
import React, { ComponentProps } from "react";
import { MotionProps, Transition, motion } from "framer-motion";
import { waveLines } from "./waves";
import { cn, getColorRGBA } from "../utils/tailwind";

type Props = {
  type: keyof typeof waveLines;
  className?: ComponentProps<"svg">["className"];
  transition?: Transition & { duration?: number };
} & MotionProps;

const LineWaves: React.FC<Props> = ({
  type,
  className,
  transition,
  ...rest
}) => {
  const delay = transition?.delay ?? 0;
  const delayIncrement = 0.05;
  const duration = transition?.duration ?? 1;
  return (
    <motion.svg
      viewBox={waveLines[type].viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none fixed z-[-2] overflow-hidden stroke-slate-700 stroke-[1.5px]",
        className,
      )}
      preserveAspectRatio="none"
    >
      {waveLines[type]?.lines &&
        waveLines[type].lines.map((line, i) => {
          return (
            <motion.path
              key={i}
              d={line.d}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: Math.min(1, (i + 1) / waveLines[type].lines.length),
              }}
              transition={
                {
                  delay: delay + i * delayIncrement,
                  duration: duration,
                } as Transition
              }
              {...rest}
            />
          );
        })}
      {waveLines[type]?.lines &&
        waveLines[type].lines.map((line, i) => {
          return (
            <motion.path
              key={i}
              d={line.d}
              initial={{
                pathLength: 0,
                opacity: 0,
                stroke: getColorRGBA("slate-400"),
              }}
              animate={{
                pathLength: 1,
                stroke: getColorRGBA("blue-400"),
                opacity: [
                  0,
                  Math.min(1, (i + 1) / waveLines[type].lines.length),
                  0,
                ],
              }}
              transition={
                {
                  delay: 1.5 + delay + 1.5 * duration + i * delayIncrement,
                  repeatDelay: duration * 2,
                  duration: duration * 1.5,
                  repeat: Infinity,
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
