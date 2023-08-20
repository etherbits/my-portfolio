import { HTMLAttributes } from "react";
import { cn } from "../utils/tailwind";

type ProfessionProps = {
  children: string;
  className?: string | undefined;
  dropCount?: number | undefined;
};

const OutlinedText: React.FC<ProfessionProps> = ({
  children,
  className,
  dropCount,
}) => {
  const baseClassName: HTMLAttributes<HTMLParagraphElement>["className"] =
    "bg-gradient-to-br w-full from-blue-200 to-slate-600 bg-clip-text text-center text-[32px] font-extrabold tracking-widest text-black sm:whitespace-nowrap sm:text-clamp-4xl";

  return (
    <div className="relative z-[-1] mb-8 w-full select-none">
      <p
        className={cn(baseClassName, className)}
        style={{ WebkitTextStroke: "4px transparent" }}
      >
        {children}
      </p>

      {dropCount &&
        [...Array(dropCount)].map((_, i) => {
          return (
            <p
              className={cn(
                baseClassName,
                "absolute left-0 top-0 z-[-1]",
                className,
              )}
              key={i}
              style={{
                WebkitTextStroke: "4px transparent",
                transform: `translateY(${12 * (i + 1)}%)`,
                opacity: 1 - (i + 1) * 0.4,
              }}
            >
              {children}
            </p>
          );
        })}
    </div>
  );
};

export default OutlinedText;
