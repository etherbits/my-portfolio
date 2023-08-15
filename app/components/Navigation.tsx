"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "../utils/tailwind";
import Link from "next/link";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-8 text-lg text-slate-400">
        <li>
          <Link href="/" className={cn({ "text-slate-200": pathname === "/" })}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-me"
            className={cn({ "text-slate-200": pathname === "/about-me" })}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="/journey"
            className={cn({ "text-slate-200": pathname === "/journey" })}
          >
            Journey
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={cn({ "text-slate-200": pathname === "/projects" })}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact-me"
            className={cn({ "text-slate-200": pathname === "/contact-me" })}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
