import { DictionarySection, SectionKeys } from "../[lang]/dictionaries";

export function generateTranslator<SectionKey extends SectionKeys>(
  section: DictionarySection<SectionKey>,
) {
  return function translator(key: keyof DictionarySection<SectionKey>) {
    return section[key] ?? "";
  };
}
