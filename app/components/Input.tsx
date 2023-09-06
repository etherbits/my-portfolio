import React, { HTMLProps, InputHTMLAttributes } from "react";
import Icon, { IconName } from "./Icon";
import { cn } from "../utils/tailwind";
import { motion } from "framer-motion";

type Props = {
  icon: IconName;
  label: string;
  className?: HTMLLabelElement["className"];
  containerClassName?: HTMLDivElement;
} & InputHTMLAttributes<HTMLInputElement> & HTMLProps<HTMLInputElement>

const Input: React.FC<Props> = ({
  icon,
  label,
  containerClassName,
  ...inputProps
}) => {
  return (
    <div
      className={cn("flex w-full flex-col gap-3", containerClassName)}
    >
      <motion.label>{label}</motion.label>
      <div
        className={cn(
          "group flex w-full items-center gap-3 overflow-hidden rounded-[4px] border border-slate-500 bg-transparent pl-4 focus-within:border-slate-300",
        )}
      >
        <Icon
          name={icon}
          className="stroke-slate-500 group-focus-within:stroke-slate-300"
        />
        <input
          {...inputProps}
          className={cn(
            "w-full text-ellipsis bg-transparent py-3 pl-3 pr-4 text-slate-300 outline-none placeholder:text-slate-400",
            inputProps.className,
          )}
        />
      </div>
    </div>
  );
};

export default Input;
