"use client";

import React from "react";
import { motion } from "framer-motion";
import { getColorRGBA } from "../utils/tailwind";
import LanguageToggle from "./LanguageToggle";
import ResponsiveNavigation, { NavigationProps } from "./Navigation";
import Link from "next/link";

const MotionLink = motion(Link);

type Props = NavigationProps;

const Header: React.FC<Props> = ({ navDict }) => {
  return (
    <header className="sticky top-0 grid grid-cols-[1fr_1fr] items-center justify-between bg-gradient-to-t from-[#000000ff] to-[#00000000] px-6 py-3 backdrop-blur-lg md:grid-cols-[1fr_auto_1fr] md:py-6 md:px-10">
      <MotionLink
        href="/"
        className="w-20% mr-6 w-fit whitespace-nowrap bg-gradient-to-br from-blue-200 to-slate-900 bg-clip-text text-center font-['Montserrat'] text-[24px] font-extrabold tracking-widest text-black"
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
