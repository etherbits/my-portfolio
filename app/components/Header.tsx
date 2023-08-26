"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn, getColorRGBA } from "../utils/tailwind";
import LanguageToggle from "./LanguageToggle";
import ResponsiveNavigation, { NavigationProps } from "./Navigation";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const MotionLink = motion(Link);

type Props = NavigationProps;

const Header: React.FC<Props> = ({ navDict }) => {
  return (
    <header className="sticky top-0 grid z-1 grid-cols-[1fr_1fr] items-center justify-between bg-gradient-to-t from-[#00000000] to-[#00000000] px-6 py-3 backdrop-blur-md md:grid-cols-[1fr_auto_1fr] md:px-10 md:py-6">
      <MotionLink
        href="/"
        className={cn(
          "w-20% mr-6 w-fit whitespace-nowrap bg-gradient-to-br from-blue-200 to-slate-900 bg-clip-text text-center  text-[24px] font-extrabold tracking-widest text-black",
          montserrat.className,
        )}
        style={{ WebkitTextStroke: "2px transparent" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{
          backgroundImage: `linear-gradient(to right bottom, ${getColorRGBA(
            "blue-200",
          )}, ${getColorRGBA("blue-200")})`,
        }}
      >
        NQ
      </MotionLink>
      <ResponsiveNavigation navDict={navDict} />
      <div className="ml-auto hidden md:block">
        <div className="xl:hidden">
          <LanguageToggle type="compact" />
        </div>
        <div className="hidden xl:block">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
