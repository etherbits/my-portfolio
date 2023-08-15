import Image from "next/image";
import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex justify-between px-16 py-6">
      <Image src="/vectors/nqLogo.svg" width={41} height={29} alt="logo" />
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
