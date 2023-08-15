import Image from "next/image";
import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between px-16 py-6">
      <Link href="/">
        <Image src="/vectors/nqLogo.svg" width={41} height={29} alt="logo" />
      </Link>
      <Navigation />
      <select
        name="language-selector"
        id="language-selector"
        className="bg-black text-slate-300"
      >
        <option value="eng">English</option>
        <option value="geo">ქართული</option>
      </select>
    </header>
  );
};

export default Header;
