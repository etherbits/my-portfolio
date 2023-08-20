import React, { HTMLAttributes } from "react";
import { cn } from "../utils/tailwind";

type Props = {
  children: React.ReactNode;
  className?: HTMLAttributes<HTMLButtonElement>["className"];
};

const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex w-fit rounded-[4px] border border-slate-600 px-5 py-3 text-xl tracking-wider text-red-500 text-transparent",
        className,
      )}
    >
      {children}
      <button
        className={cn(
          "absolute left-0 top-[-10px] block w-fit scale-[1.06] whitespace-nowrap rounded-[4px] border border-slate-300 bg-black px-5 py-3 text-xl tracking-wider text-slate-300 ",
          className,
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
