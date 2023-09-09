import React, {
  HTMLProps,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";
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

const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
  function InputWrapper(
    { label, errors, containerClassName, children, name },
    ref,
  ) {
    return (
      <div className="w-full" ref={ref}>
        <label className={cn("flex w-full flex-col gap-3", containerClassName)}>
          <span className="md:text-lg">{label}</span>
          {children}
        </label>
        <p className="text-sm text-red-500">{errors[name]?.message}</p>
      </div>
    );
  },
);

export default InputWrapper;
