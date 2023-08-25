import OutlinedText from "@/app/components/OutlineText";
import { getDictionary } from "../dictionaries";
import { generateTranslator } from "@/app/utils/i18n";
import { Locale } from "@/middleware";
import { cn } from "@/app/utils/tailwind";

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
    <div className="mt-[2vh] flex w-full flex-col items-center px-8">
      <OutlinedText>Journey</OutlinedText>
      <main className="w-clamp-card-container">
        <ul className="mt-[4vh] flex w-[100%] flex-col">
          {journeys.map((journey, i) => {
            const journeyDict = t(journey.id);
            return (
              <li key={journey.id} className="relative">
                <section
                  className={cn(
                    "flex w-[46%] flex-col rounded-xl bg-gradient-to-r from-neutral-950 to-neutral-900 px-6 py-4",
                    {
                      "ml-auto": i % 2 !== 0,
                      "from-neutral-900 to-neutral-950": i % 2 !== 0,
                    },
                  )}
                >
                  <div className="flex justify-between  ">
                    <h3 className="text-clamp-xl">{journeyDict.title}</h3>
                    <span className="text-clamp-sm">{journey.date}</span>
                  </div>
                  <p className="text-clamp-rg">{journeyDict.body}</p>
                </section>
                <div className="absolute left-[50%] top-[50%] h-[25%] w-[4px] translate-x-[-50%] rounded-full bg-slate-700" />
                <div className="absolute left-[50%] top-[87.5%] h-[25%] w-[4px] translate-x-[-50%] rounded-full bg-slate-700" />
                <div className="absolute left-[50%] top-[125%] h-[25%] w-[4px] translate-x-[-50%] rounded-full bg-slate-700" />
                <div className="absolute left-[50%] top-[50%] h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-blue-300" />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
