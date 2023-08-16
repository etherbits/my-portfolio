"use client";

import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { getColorRGB } from "../utils/tailwind";
import LanguageSelect from "./LanguageSelect";

const MotionLink = motion(Link);

const Header = () => {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center px-16 py-6">
      <MotionLink
        href="/"
        className="w-fit whitespace-nowrap bg-gradient-to-br from-blue-200 to-slate-900 bg-clip-text text-center text-[24px] font-extrabold tracking-widest text-black"
        style={{ WebkitTextStroke: "2px transparent" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{
          backgroundImage: `linear-gradient(to right bottom, ${getColorRGB(
            "blue-200",
          )}, ${getColorRGB("blue-200")})`,
        }}
      >
        NQ
      </MotionLink>
      <Navigation />
      <LanguageSelect/>
    </header>
  );
};

export default Header;
