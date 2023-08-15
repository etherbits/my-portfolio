import React from "react";

type Props = {
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative flex w-fit rounded-[4px] border border-slate-600 px-5 py-3 text-xl tracking-wider text-red-500 text-transparent">
      {children}
      <button className="absolute left-0 top-[-10px] block w-fit scale-[1.06] whitespace-nowrap rounded-[4px] border border-slate-300 bg-black px-5 py-3 text-xl tracking-wider text-slate-300 ">
        {children}
      </button>
    </div>
  );
};

export default Button;
