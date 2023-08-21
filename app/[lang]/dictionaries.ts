import { Locale } from "@/middleware";
import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ge: () => import("./dictionaries/ge.json").then((module) => module.default),
};

type LocaleDictionaries = typeof dictionaries;

export type Dictionary = Awaited<
  ReturnType<LocaleDictionaries[keyof LocaleDictionaries]>
>;
export type SectionKeys = keyof Dictionary;

export type DictionarySection<SectionKey extends SectionKeys> =
  Dictionary[SectionKey];

type test = DictionarySection<"journey">['journey_start']

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
