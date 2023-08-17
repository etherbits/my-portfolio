"use client";

import React from "react";
import Navigation, { NavigationProps } from "./Navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { getColorRGBA } from "../utils/tailwind";
import LanguageSelect from "./LanguageSelect";
import LanguageToggle from "./LanguageToggle";

const MotionLink = motion(Link);

type Props = NavigationProps;

const Header: React.FC<Props> = ({ navDict }) => {
  return (
    <header className="sticky top-0 flex items-center justify-between bg-gradient-to-t from-[#000000ff] to-[#00000000] px-6 py-3 backdrop-blur-lg md:grid-cols-[1fr_auto_1fr] md:px-16 md:py-6">
      <MotionLink
        href="/"
        className="mr-6 w-fit whitespace-nowrap bg-gradient-to-br from-blue-200 to-slate-900 bg-clip-text text-center font-['Montserrat'] text-[24px] font-extrabold tracking-widest text-black"
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
      <Navigation navDict={navDict} />
      <LanguageToggle />
    </header>
  );
};

export default Header;
