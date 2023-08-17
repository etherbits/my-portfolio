"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { languages } from "./LanguageSelect";
import { Locale } from "@/middleware";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getColorRGBA } from "../utils/tailwind";
const MotionLink = motion(Link);
const LanguageToggle = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] as Locale;
  const currentLanguage = languages[currentLocale];
  return (
    <MotionLink
      className="flex items-center gap-4 rounded-md px-4 py-2"
      style={{ backgroundColor: "rgba(0,0,0,0)" }}
      href={`/${currentLocale === "en" ? "ge" : "en"}`}
      whileHover={{ backgroundColor: getColorRGBA("neutral-800", 0.72) }}
    >
      <Image
        src={currentLanguage.image}
        width={16}
        height={16}
        className="h-4 w-4"
        alt="language flag"
      />
      {currentLanguage.label}
    </MotionLink>
  );
};

export default LanguageToggle;
