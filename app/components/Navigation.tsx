"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn, getColorRGBA } from "../utils/tailwind";
import Link from "next/link";
import { generateTranslator } from "../utils/i18n";
import { DictionarySection } from "../[lang]/dictionaries";
import Icon from "./Icon";
import LanguageToggle from "./LanguageToggle";

export const navigationLinks = [
  { name: "home", icon: "Home", href: "/" },
  { name: "projects", icon: "Folder", href: "/projects" },
  { name: "journey", icon: "Milestone", href: "/journey" },
  { name: "contact", icon: "Mail", href: "/contact-me" },
] as const;

export type NavigationProps = {
  navDict: DictionarySection<"navigation">;
};

const MotionLink = motion(Link);

const DesktopNavigation: React.FC<NavigationProps> = ({ navDict }) => {
  const pathname = "/" + usePathname().split("/").slice(2).join("/");
  const t = generateTranslator<"navigation">(navDict);
  return (
    <nav className="hidden  md:block">
      <ul className="flex items-center gap-4 whitespace-nowrap  text-slate-400  md:text-clamp-lg lg:gap-8">
        {navigationLinks.map((link, i) => (
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.025 * i }}
            whileHover={{ color: getColorRGBA("slate-300") }}
            key={link.name}
          >
            <Link
              href={link.href}
              className={cn({ "text-slate-200": pathname === link.href })}
            >
              {t(link.name)}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

const MobileNavigation: React.FC<NavigationProps> = ({ navDict }) => {
  const pathname = "/" + usePathname().split("/").slice(2).join("/");
  const t = generateTranslator<"navigation">(navDict);
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    function closeOnOutsideClick(e: MouseEvent) {
      if (!navRef.current || !e.target) return;
      const targetNode = e.target as Node;
      const parentNode = navRef.current as Node;

      if (parentNode.contains(targetNode)) return;

      setIsOpen(false);
    }
    window.addEventListener("click", closeOnOutsideClick);

    return () => {
      window.removeEventListener("click", closeOnOutsideClick);
    };
  }, []);

  return (
    <div className="relative" ref={navRef}>
      <motion.button
        className={"rounded-md p-3  backdrop-blur-md"}
        onClick={() => setIsOpen((state) => !state)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ backgroundColor: getColorRGBA("neutral-900", 0.72) }}
        style={{ backgroundColor: getColorRGBA("neutral-950", 0.72) }}
      >
        <Icon name="Menu" color={getColorRGBA("slate-300")} />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 top-[100%] z-20 mt-4  w-40 rounded-md text-slate-200  backdrop-blur-md"
            initial={{ opacity: 0, translateY: "-16px" }}
            animate={{ opacity: 1, translateY: "0" }}
            exit={{ opacity: 0, translateX: "16px" }}
            style={{ backgroundColor: getColorRGBA("neutral-950", 0.72) }}
          >
            <nav>
              <ul>
                {navigationLinks.map((link) => {
                  return (
                    <li key={link.name} className="flex w-full">
                      <MotionLink
                        href={link.href}
                        className={"w-full rounded-md px-4 py-2"}
                        onClick={() => setIsOpen((state) => !state)}
                        initial={{
                          backgroundColor: getColorRGBA("neutral-900", 0),
                        }}
                        animate={{
                          backgroundColor:
                            pathname === link.href
                              ? getColorRGBA("neutral-900", 0.72)
                              : getColorRGBA("neutral-900", 0),
                        }}
                        whileHover={{
                          backgroundColor: getColorRGBA("neutral-800", 0.72),
                        }}
                      >
                        {t(link.name)}
                      </MotionLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mx-4 my-2 h-[2px] basis-[100%] rounded-full bg-white bg-gradient-to-r from-slate-400 to-slate-600" />
            <LanguageToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ResponsiveNavigation: React.FC<NavigationProps> = (props) => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNavigation {...props} />
      </div>
      <div className="ml-auto md:hidden">
        <MobileNavigation {...props} />
      </div>
    </>
  );
};

export default ResponsiveNavigation;
