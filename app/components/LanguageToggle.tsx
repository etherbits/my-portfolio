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

type Props = {
  type?: "compact" | "regular";
};

const LanguageToggle: React.FC<Props> = ({ type }) => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] as Locale;
  const currentLanguage = languages[currentLocale];
  const currentLabel =
    type === "compact" ? currentLocale : currentLanguage.label;
  return (
    <MotionLink
      className="flex items-center gap-4 rounded-md px-4 py-2"
      style={{ backgroundColor: "rgba(0,0,0,0)" }}
      href={`/${currentLocale === "en" ? "ge" : "en"}`}
      whileHover={{ backgroundColor: getColorRGBA("neutral-800", 0.72) }}
      title="Toggle Language Eng/Geo"
    >
      <Image
        src={currentLanguage.image}
        width={16}
        height={16}
        className="h-4 w-4"
        alt="language flag"
      />
      {currentLabel}
    </MotionLink>
  );
};

export default LanguageToggle;
