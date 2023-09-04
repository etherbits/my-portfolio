import React, { HTMLProps } from "react";
import Icon, { IconName } from "./Icon";

type Props = {
  icon: IconName;
  name?: string;
  inputProps?: HTMLProps<HTMLInputElement>;
} & HTMLProps<HTMLDivElement>;

const Input: React.FC<Props> = ({ icon, name, inputProps, ...rest }) => {
  return (
    <label className="flex flex-col gap-3 w-fit">
      {inputProps?.name}
      <div
        className="group flex w-fit items-center gap-3 overflow-hidden rounded-[4px] border border-slate-500 bg-transparent pl-4 focus-within:border-slate-300"
        {...rest}
      >
        <Icon
          name={icon}
          className="stroke-slate-500 group-focus-within:stroke-slate-300"
        />
        <input
          className="w-full bg-transparent py-3 pl-3 pr-4 text-slate-300 outline-none placeholder:text-slate-400"
          {...inputProps}
        />
      </div>
    </label>
  );
};

export default Input;