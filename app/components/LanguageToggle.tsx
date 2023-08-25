"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Locale } from "@/middleware";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getColorRGBA } from "../utils/tailwind";
const MotionLink = motion(Link);

type Props = {
  type?: "compact" | "regular";
};

export const languages = {
  en: { label: "English", image: "/images/eng.png" },
  ge: { label: "ქართული", image: "/images/geo.png" },
};

const LanguageToggle: React.FC<Props> = ({ type }) => {
  const splitPathname = usePathname().split("/");
  const currentLocale = splitPathname[1] as Locale;
  const currentLanguage = languages[currentLocale];

  const generateURL = () =>{
    splitPathname[1] = currentLocale === "en" ? "ge" : "en";
    return splitPathname.join('/')
  }

  return (
    <MotionLink
      className="flex items-center gap-4 rounded-md px-4 py-2 backdrop-blur-md"
      style={{ backgroundColor: "rgba(0,0,0,0)" }}
      href={generateURL()}
      whileHover={{ backgroundColor: getColorRGBA("neutral-800", 0.72) }}
      title="Toggle Language Eng/Geo"
      prefetch={false}
    >
      <Image
        src={currentLanguage.image}
        width={16}
        height={16}
        className="h-4 w-4"
        alt="language flag"
      />
      {type === "compact" ? currentLocale : currentLanguage.label}
    </MotionLink>
  );
};

export default LanguageToggle;
