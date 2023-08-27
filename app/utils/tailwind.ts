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

  if (!colors) return null;

  const twColor = colors[label];

  if (typeof twColor === "string") return twColor;
  return twColor[shade] as string;
}

export function getColorRGBA(color: string, alpha = 1) {
  const twColor = getColor(color);

  if (!twColor) return "";

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(twColor);

  return result
    ? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
      result[3],
      16,
    )},${alpha})`
    : "";
}
