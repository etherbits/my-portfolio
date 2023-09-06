import React, { HTMLProps, TextareaHTMLAttributes } from "react";
import { cn } from "../utils/tailwind";
import { motion } from "framer-motion";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ContactMeFormSchema } from "./ContactMePageContent";

type Props = {
  label: string;
  register: UseFormRegister<ContactMeFormSchema>;
  errors: FieldErrors<ContactMeFormSchema>;
  containerClassName?: HTMLDivElement["className"];
  name: keyof ContactMeFormSchema;
} & TextareaHTMLAttributes<HTMLInputElement> &
  HTMLProps<HTMLTextAreaElement>;

const TextArea: React.FC<Props> = ({
  label,
  containerClassName,
  register,
  errors,
  name,
  ...textAreaProps
}) => {
  return (
    <div className={cn("flex w-full flex-col gap-3", containerClassName)}>
      <motion.label className="flex w-full flex-col gap-3">
        Message
      </motion.label>
      <textarea
        {...textAreaProps}
        className={cn(
          `min-h-[20vh] w-full rounded-[4px] border border-slate-500 bg-transparent px-4 py-3 text-sm text-slate-300 outline-none placeholder:text-slate-400 focus:border-slate-300`,
          textAreaProps.className,
        )}
        {...register("message")}
      />
      <p className="text-sm text-red-500">{errors[name]?.message}</p>
    </div>
  );
};

export default TextArea;
