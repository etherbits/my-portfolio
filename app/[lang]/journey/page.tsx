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
    <div className="mt-[2vh] flex w-full flex-col items-center px-8">
    <JourneyPageContent journeyDict={dict['journey']}/>
    </div>
  );
}
