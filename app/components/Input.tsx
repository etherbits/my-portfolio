import React, { HTMLProps, InputHTMLAttributes, forwardRef } from "react";
import Icon, { IconName } from "./Icon";
import { cn } from "../utils/tailwind";
import { UseFormRegister } from "react-hook-form";
import { ContactMeFormSchema } from "./ContactMePageContent";
import InputWrapper, { InputWrapperProps } from "./InputWrapper";

type Props = {
  icon: IconName;
  register: UseFormRegister<ContactMeFormSchema>;
  className?: HTMLLabelElement["className"];
} & HTMLProps<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> &
  Omit<InputWrapperProps, "children">;

const Input = forwardRef<HTMLDivElement, Props>(function Input(
  { icon, label, register, errors, containerClassName, name, ...inputProps },
  ref,
) {
  return (
    <InputWrapper
      label={label}
      errors={errors}
      name={name}
      containerClassName={containerClassName}
      ref={ref}
    >
      <div
        className={cn(
          "group flex  w-full items-center gap-4 overflow-hidden  rounded-[4px] border border-slate-500 bg-transparent px-4 py-3 focus-within:border-slate-300 md:gap-5 md:px-5",
        )}
      >
        <Icon
          name={icon}
          className="stroke-slate-500 group-focus-within:stroke-slate-300"
        />
        <input
          {...inputProps}
          className={cn(
            "w-full text-ellipsis bg-transparent text-slate-300 outline-none placeholder:text-slate-400 md:text-lg",
            inputProps.className,
          )}
          {...register(name)}
        />
      </div>
    </InputWrapper>
  );
});

export default Input;
