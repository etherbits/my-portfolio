"use client";
import { motion } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";
import { cn, getColorRGB } from "../utils/tailwind";
import Link from "next/link";
import { generateTranslator } from "../utils/i18n";

const links = [
  { name: "home", href: "/" },
  { name: "about", href: "/about-me" },
  { name: "journey", href: "/journey" },
  { name: "projects", href: "/projects" },
  { name: "contact", href: "/contact-me" },
] as const;

const Navigation = ({ navDict }: any) => {
  const pathname = "/" + usePathname().split("/").slice(2).join("/");
  const t = generateTranslator<"navigation">(navDict);
  return (
    <nav>
      <ul className="flex gap-8 text-lg text-slate-400">
        {links.map((link, i) => (
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

export default Navigation;
