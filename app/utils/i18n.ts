import { Locale } from "@/middleware";
import { getDictionary } from "../[lang]/dictionaries";

export async function generateTranslator(locale: Locale, section: string) {
  const dictionary = await getDictionary(locale);
  if (!Object.keys(dictionary).includes(section)) return "";

  const sectionDictionary = dictionary[section as keyof typeof dictionary];

  return function translator(key: keyof typeof sectionDictionary) {
    return sectionDictionary[key] ?? "";
  };
}
