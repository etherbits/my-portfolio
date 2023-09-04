import React, { HTMLProps } from "react";
import Icon, { IconName } from "./Icon";
import { cn } from "../utils/tailwind";

type Props = {
  icon: IconName;
  name?: string;
  inputProps?: HTMLProps<HTMLInputElement>;
  inputContainer?: HTMLProps<HTMLDivElement>;
} & HTMLProps<HTMLLabelElement>;

const Input: React.FC<Props> = ({
  icon,
  name,
  inputProps,
  inputContainer,
  ...rest
}) => {
  return (
    <label
      {...rest}
      className={cn("flex w-fit flex-col gap-3", rest.className)}
    >
      {inputProps?.name}
      <div
        {...inputContainer}
        className={cn(
          "group flex w-full items-center gap-3 overflow-hidden rounded-[4px] border border-slate-500 bg-transparent pl-4 focus-within:border-slate-300",
          inputContainer?.className,
        )}
      >
        <Icon
          name={icon}
          className="stroke-slate-500 group-focus-within:stroke-slate-300"
        />
        <input
          {...inputProps}
          className={cn(
            "w-full bg-transparent py-3 pl-3 pr-4 text-slate-300 outline-none placeholder:text-slate-400 text-ellipsis",
            inputProps?.className,
          )}
        />
      </div>
    </label>
  );
};

export default Input;
