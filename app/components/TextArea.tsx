import React, { HTMLProps, TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/tailwind";
import { UseFormRegister } from "react-hook-form";
import { ContactMeFormSchema } from "./ContactMePageContent";
import InputWrapper, { InputWrapperProps } from "./InputWrapper";

type Props = {
  register: UseFormRegister<ContactMeFormSchema>;
} & TextareaHTMLAttributes<HTMLInputElement> &
  HTMLProps<HTMLTextAreaElement> &
  Omit<InputWrapperProps, "children">;

const TextArea = forwardRef<HTMLDivElement, Props>(function TextArea(
  {
    label,
    containerClassName,
    register,
    errors,
    name,
    style,
    ...textAreaProps
  },
  ref,
) {
  console.log(textAreaProps);
  return (
    <InputWrapper
      label={label}
      name={name}
      errors={errors}
      containerClassName={containerClassName}
      ref={ref}
    >
      <textarea
        {...textAreaProps}
        className={cn(
          `-full min-h-[20vh] rounded-[4px] border border-slate-500 bg-transparent px-4 py-3 text-sm text-slate-300 outline-none placeholder:text-slate-400 focus:border-slate-300 md:text-base`,
          textAreaProps.className,
        )}
        {...register("message")}
      />
    </InputWrapper>
  );
});

export default TextArea;
