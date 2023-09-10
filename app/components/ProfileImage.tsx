import Image from "next/image";
import React from "react";
import { cn } from "../utils/tailwind";

type Props = {
  className?: string;
};

const ProfileImage: React.FC<Props> = ({ className }) => {
  return (
    <Image
      src="https://github.com/etherbits.png?size=200"
      width={200}
      height={200}
      alt="profile"
      className={cn("h-20 w-20 rounded-full ", className)}
    />
  );
};

export default ProfileImage;
