import OutlinedText from "@/app/components/OutlineText";
import { getDictionary } from "../dictionaries";
import { generateTranslator } from "@/app/utils/i18n";
import { Locale } from "@/middleware";

const journeys = [
  { id: "journey_start", date: "2017" },
  { id: "journey_web_focus", date: "2019" },
  { id: "journey_profession_intro", date: "2021" },
] as const;

export default async function Journey({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const t = generateTranslator<"journey">(dict["journey"]);
  return (
    <div className="flex w-full flex-col items-center">
      <OutlinedText>Journey</OutlinedText>
      <main>
        <ul>
          {journeys.map((journey) => {
            const journeyDict = t(journey.id);
            return (
              <li key={journey.id}>
                <h3>{journeyDict.title}</h3>
                <p>{journeyDict.body}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
