import Image from "next/image";
import React from "react";
import { cn } from "../utils/tailwind";

type Props = {
  className?: string;
};

const ProfileImage: React.FC<Props> = ({ className }) => {
  return (
    <Image
      src="https://github.com/etherbits.png"
      width={512}
      height={512}
      alt="profile"
      className={cn("h-20 w-20 rounded-full ", className)}
    />
  );
};

export default ProfileImage;
