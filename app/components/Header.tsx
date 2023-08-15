import Image from "next/image";
import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";

const Header = () => {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center px-16 py-6">
      <Link
        href="/"
        className="w-fit whitespace-nowrap bg-gradient-to-br from-blue-200 to-slate-900 bg-clip-text text-center text-[24px] font-extrabold tracking-widest text-black"
        style={{ WebkitTextStroke: "2px transparent" }}
      >
        NQ
      </Link>
      <Navigation />
      <select
        name="language-selector"
        id="language-selector"
        className="ml-auto w-fit bg-black text-slate-300"
      >
        <option value="eng">English</option>
        <option value="geo">ქართული</option>
      </select>
    </header>
  );
};

export default Header;
