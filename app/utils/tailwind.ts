import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";

const tailwindConf = resolveConfig(tailwindConfig);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getColor(color: string) {
  const [label, shade] = color.split("-");
  const colors = tailwindConf.theme?.colors;

  if (!colors) return "";

  const twColor = colors[label];

  if (typeof twColor === "string") return twColor;

  return twColor[shade];
}
