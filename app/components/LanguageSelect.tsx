"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getColorRGB } from "../utils/tailwind";
import MotionIcon from "./MotionIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";

const languages = {
  en: { label: "English", image: "/images/eng.png" },
  ge: { label: "ქართული", image: "/images/geo.png" },
};

const MotionLink = motion(Link);

const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] as "ge" | "en";
  const currentLanguage = languages[currentLocale];
  const selectRef = useRef(null);

  useEffect(() => {
    function closeOnOutsideClick(e: MouseEvent) {
      if (!selectRef.current || !e.target) return;
      const targetNode = e.target as Node;

      if (targetNode.contains(selectRef.current)) return;

      setIsOpen(false);
    }
    window.addEventListener("click", closeOnOutsideClick);

    return () => {
      window.removeEventListener("click", closeOnOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      <motion.button
        ref={selectRef}
        className="ml-auto flex w-fit items-center bg-black  text-slate-400"
        whileHover={{ color: getColorRGB("slate-300") }}
        onClick={() => {
          setIsOpen((state) => !state);
        }}
      >
        <Image
          src={currentLanguage.image}
          width={16}
          height={16}
          alt="english flag"
          className="mr-3 h-4 w-4"
        />
        {currentLanguage.label}
        <MotionIcon
          name="ChevronDown"
          size={16}
          color={getColorRGB("slate-600")}
          className="ml-[6px]"
          animate={{ rotateZ: isOpen ? "180deg" : "0deg" }}
        />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute right-0 top-[100%] mt-4 flex flex-col rounded-lg bg-neutral-900 text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Object.entries(languages).map(([key, language]) => (
              <li key={key}>
                <MotionLink
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-[6px]"
                  whileHover={{
                    backgroundColor: getColorRGB("neutral-800"),
                  }}
                  href={`/${key}`}
                >
                  <Image
                    src={language.image}
                    width={16}
                    height={16}
                    alt={`${language.label} flag`}
                    className="h-4 w-4"
                  />
                  {language.label}
                </MotionLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelect;
