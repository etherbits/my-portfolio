import Image from "next/image";
import React from "react";

const linkObjs = [
  { img: "/vectors/newspaper.svg", imgSize: 24, url: "#" },
  {
    img: "/images/github.webp",
    imgSize: 48,
    url: "https://github.com/etherbits",
  },
  {
    img: "/images/twitter.jpg",
    imgSize: 48,
    url: "https://twitter.com/etherbito",
  },
  {
    img: "/images/linkedin.jpg",
    imgSize: 48,
    url: "https://www.linkedin.com/in/nika-qvrivishvili-126664203",
  },
];

const RectLinks = () => {
  return (
    <ul className="flex gap-11">
      {linkObjs.map((link) => (
        <li key={link.url}>
          <a
            href={link.url}
            className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-slate-600 bg-neutral-950 hover:border-slate-300"
          >
            <Image
              src={link.img}
              width={link.imgSize}
              height={link.imgSize}
              alt="resume"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RectLinks;
