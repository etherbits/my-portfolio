import Image from "next/image";
import React from "react";
import Icon, { IconName } from "./Icon";
import { cn, getColorRGBA } from "../utils/tailwind";
import { motion } from "framer-motion";

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
    imageSrc: "/images/twitter.webp",
    imgType: "image",
    url: "https://twitter.com/etherbito",
  },
  {
    imageSrc: "/images/linkedin.webp",
    imgType: "image",
    url: "https://www.linkedin.com/in/nika-qvrivishvili-126664203",
  },
];

type Props = {
  size?: number;
  className?: string;
  animationDelay: number;
  itemDelayIncrement?: number;
};

const RectLinks: React.FC<Props> = ({
  size = 48,
  className,
  animationDelay,
  itemDelayIncrement = 0.25,
}) => {
  return (
    <motion.ul className={cn("flex w-fit gap-11", className)}>
      {linkObjs.map((link, i) => (
        <motion.li
          key={link.url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: animationDelay + itemDelayIncrement * i,
            duration: 0.25,
          }}
        >
          <a
            href={link.url}
            className={cn(
              "flex items-center justify-center overflow-hidden rounded-lg border border-slate-600 bg-neutral-950 hover:border-slate-300",
            )}
            style={{ width: `${size}px`, height: `${size}px` }}
            target="_blank"
            aria-label="Resume/CV"
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
