import React, { HTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/tailwind";
import { FieldErrors } from "react-hook-form";
import { ContactMeFormSchema } from "./ContactMePageContent";

export type InputWrapperProps = {
  label: string;
  errors: FieldErrors<ContactMeFormSchema>;
  containerClassName?: HTMLDivElement["className"];
  name: keyof ContactMeFormSchema;
  children: ReactNode;
} & HTMLProps<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement>;

const InputWrapper: React.FC<InputWrapperProps> = ({
  label,
  errors,
  containerClassName,
  children,
  name,
}) => {
  return (
    <div className="w-full">
      <label className={cn("flex w-full flex-col gap-3", containerClassName)}>
        <span className="md:text-lg">{label}</span>
        {children}
      </label>
      <p className="text-sm text-red-500">{errors[name]?.message}</p>
    </div>
  );
};

export default InputWrapper;
