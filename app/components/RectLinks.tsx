import Image from "next/image";
import React from "react";
import Icon, { IconName } from "./Icon";
import { cn, getColorRGBA } from "../utils/tailwind";
import {  motion } from "framer-motion";

type BaseLinkObj = {
  url: string;
};

type VectorLinkObj = {
  imgType: "vector";
  vectorName: IconName;
} & BaseLinkObj;

type ImageLinkObj = {
  imgType: "image";
  imageSrc: string;
} & BaseLinkObj;

type LinkObj = VectorLinkObj | ImageLinkObj;

const linkObjs: LinkObj[] = [
  { vectorName: "Newspaper", imgType: "vector", url: "#" },
  {
    imageSrc: "/images/github.webp",
    imgType: "image",
    url: "https://github.com/etherbits",
  },
  {
    imageSrc: "/images/twitter.jpg",
    imgType: "image",
    url: "https://twitter.com/etherbito",
  },
  {
    imageSrc: "/images/linkedin.jpg",
    imgType: "image",
    url: "https://www.linkedin.com/in/nika-qvrivishvili-126664203",
  },
];

type Props = {
  size?: number;
  gap?: number;
  className?: string;
  itemDelayIncrement?: number;
};

const RectLinks: React.FC<Props> = ({
  size = 48,
  gap = 44,
  className,
  itemDelayIncrement,
}) => {
  return (
    <motion.ul className={cn("flex w-fit", className)} style={{ gap: `${gap}px` }}>
      {linkObjs.map((link, i) => (
        <motion.li
          key={link.url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 + (itemDelayIncrement ?? 0.25 )* i }}
        >
          <a
            href={link.url}
            className={cn(
              "flex items-center justify-center overflow-hidden rounded-lg border border-slate-600 bg-neutral-950 hover:border-slate-300",
            )}
            style={{ width: `${size}px`, height: `${size}px` }}
            target="_blank"
          >
            {link.imgType === "vector" ? (
              <Icon
                name={link.vectorName}
                size={~~(size / 2)}
                color={getColorRGBA("slate-500")}
                strokeWidth={1.5}
              />
            ) : (
              <Image
                src={link.imageSrc}
                width={size}
                height={size}
                alt="resume"
              />
            )}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default RectLinks;
