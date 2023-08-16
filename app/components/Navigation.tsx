"use client";
import { motion } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";
import { cn, getColorRGB } from "../utils/tailwind";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about-me" },
  { name: "Journey", href: "/journey" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Me", href: "/contact-me" },
];

const Navigation = () => {
  const pathname = "/" + usePathname().split("/").slice(2).join("/");
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
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
