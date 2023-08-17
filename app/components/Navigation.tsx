"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { cn, getColorRGB } from "../utils/tailwind";
import Link from "next/link";
import { generateTranslator } from "../utils/i18n";
import { DictionarySection } from "../[lang]/dictionaries";
import Icon from "./Icon";

export const navigationLinks = [
  { name: "home", icon: "Home", href: "/" },
  { name: "about", icon: "User", href: "/about-me" },
  { name: "journey", icon: "Milestone", href: "/journey" },
  { name: "projects", icon: "Folder", href: "/projects" },
  { name: "contact", icon: "Mail", href: "/contact-me" },
] as const;

export type NavigationProps = {
  navDict: DictionarySection<"navigation">;
};

const DesktopNavigation: React.FC<NavigationProps> = ({ navDict }) => {
  const pathname = "/" + usePathname().split("/").slice(2).join("/");
  const t = generateTranslator<"navigation">(navDict);
  return (
    <nav className="hidden  md:block">
      <ul className="flex items-center gap-4 whitespace-nowrap text-lg  text-slate-400 lg:gap-8">
        {navigationLinks.map((link, i) => (
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.025 * i }}
            whileHover={{ color: getColorRGB("slate-300") }}
            key={link.href}
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
  return (
    <div className="relative">
      <button className="rounded-md bg-neutral-950 p-3">
        <Icon name="Menu" color={getColorRGB("slate-300")} />
      </button>
      <nav className="absolute right-0 top-[100%] z-20 mt-4 h-64 w-40 rounded-md bg-neutral-950 text-slate-300">
        <ul>
          <li className=""></li>
        </ul>
      </nav>
    </div>
  );
  {
    /* <nav className={cn("fixed bottom-0 right-0 w-full", className)}> */
  }
  {
    /*   <ul className="m-4 flex h-16 basis-[100%] items-center whitespace-nowrap rounded-lg bg-neutral-950 text-[12px] text-slate-400"> */
  }
  {
    /*     {navigationLinks.map((link, i) => { */
  }
  {
    /*       const isActive = pathname === link.href; */
  }
  {
    /*       return ( */
  }
  {
    /*         <motion.li */
  }
  {
    /*           initial={{ opacity: 0 }} */
  }
  {
    /*           animate={{ opacity: 1 }} */
  }
  {
    /*           transition={{ delay: 0.025 * i }} */
  }
  {
    /*           whileHover={{ color: getColorRGB("slate-300") }} */
  }
  {
    /*           key={link.href} */
  }
  {
    /*           className="h-full w-[20%] rounded-lg" */
  }
  {
    /*         > */
  }
  {
    /*           <Link */
  }
  {
    /*             href={link.href} */
  }
  {
    /*             className={cn( */
  }
  {
    /*               "flex h-full w-full flex-col items-center justify-center gap-1", */
  }
  {
    /*               { */
  }
  {
    /*                 "text-slate-200": isActive, */
  }
  {
    /*               }, */
  }
  {
    /*             )} */
  }
  {
    /*           > */
  }
  {
    /*             <Icon */
  }
  {
    /*               name={link.icon} */
  }
  {
    /*               color={getColorRGB(isActive ? "slate-300" : "slate-500")} */
  }
  {
    /*             /> */
  }
  {
    /*             {t(link.name)} */
  }
  {
    /*           </Link> */
  }
  {
    /*         </motion.li> */
  }
  {
    /*       ); */
  }
  {
    /*     })} */
  }
  {
    /*   </ul> */
  }
  {
    /* </nav> */
  }
};

const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNavigation {...props} />
      </div>
      <div className="md:hidden">
        <MobileNavigation {...props} />
      </div>
    </>
  );
};

export default Navigation;
