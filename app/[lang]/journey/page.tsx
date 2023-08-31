import { getDictionary } from "../dictionaries";
import { Locale } from "@/middleware";
import JourneyPageContent from "@/app/components/JourneyPageContent";

export default async function Journey({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
      <JourneyPageContent journeyDict={dict["journey"]} />
  );
}
