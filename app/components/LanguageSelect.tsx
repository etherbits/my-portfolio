"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { getColorRGB } from "../utils/tailwind";

const languages = {
  eng: { label: "English", image: "/images/eng.png" },
  geo: { label: "ქართული", image: "/images/geo.png" },
};

const MotionImage = motion(Image);

const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<keyof typeof languages>("eng");

  return (
    <div className="relative">
      <motion.button
        id="language-selector"
        className="ml-auto flex w-fit items-center bg-black  text-slate-400"
        whileHover={{ color: getColorRGB("slate-300") }}
        onClick={() => {
          setIsOpen((state) => !state);
        }}
      >
        <Image
          src={languages[currentLang].image}
          width={16}
          height={16}
          alt="english flag"
          className="mr-2 h-4 w-4"
        />
        {languages[currentLang].label}
        <MotionImage
          src="/vectors/caret.svg"
          width={8}
          height={4}
          alt="english flag"
          className="ml-[6px] h-1 w-2"
          animate={{ rotateZ: isOpen ? "180deg" : "0deg" }}
        />
      </motion.button>
      {isOpen && (
        <motion.ul
          className="absolute right-0 top-[100%] mt-4 flex flex-col rounded-lg bg-neutral-900 text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {Object.entries(languages).map(([key, language]) => (
            <li key={key}>
              <motion.button
                className="flex w-full items-center gap-3 rounded-lg px-3 py-[6px]"
                whileHover={{
                  backgroundColor: getColorRGB("neutral-800"),
                }}
                onClick={() => {
                  setCurrentLang(key as keyof typeof languages);
                }}
              >
                <Image
                  src={language.image}
                  width={16}
                  height={16}
                  alt="english flag"
                  className="h-4 w-4"
                />
                {language.label}
              </motion.button>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default LanguageSelect;
