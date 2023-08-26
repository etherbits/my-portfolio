"use client";
import React from "react";
import OutlinedText from "@/app/components/OutlineText";
import { cn } from "@/app/utils/tailwind";
import Button from "@/app/components/Button";
import { generateTranslator } from "../utils/i18n";
import { DictionarySection } from "../[lang]/dictionaries";

const journeys = [
  { id: "journey_start", date: "2017" },
  { id: "journey_web_focus", date: "2019" },
  { id: "journey_profession_intro", date: "2021" },
] as const;

type Props = {
  journeyDict: DictionarySection<"journey">;
};

const JourneyPageContent: React.FC<Props> = ({ journeyDict }) => {
  const t = generateTranslator<"journey">(journeyDict);

  return (
    <>
      <OutlinedText>Journey</OutlinedText>
      <main className="w-clamp-card-container">
        <ul className="mt-[3vh] grid w-[100%] items-center [grid-auto-rows:1fr]">
          {journeys.map((journey, i) => {
            const journeyCardDict = t(journey.id);
            return (
              <li
                key={journey.id}
                className="relative z-[-1] flex h-full flex-col justify-center p-4"
              >
                <section
                  className={cn(
                    "my-auto flex h-fit w-[46%] flex-col rounded-xl bg-gradient-to-r from-neutral-950 to-neutral-900 px-6 py-4",
                    {
                      "ml-auto": i % 2 !== 0,
                      "from-neutral-900 to-neutral-950": i % 2 !== 0,
                    },
                  )}
                >
                  <div className="flex justify-between">
                    <h3 className="text-clamp-xl">{journeyCardDict.title}</h3>
                    <span className="text-clamp-sm">{journey.date}</span>
                  </div>
                  <p className="text-clamp-rg">{journeyCardDict.body}</p>
                </section>
                <div className="absolute left-[50%] top-[50%] h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-blue-300" />
                <div className="absolute left-[50%] top-[50%] z-[-1] flex h-[100%] w-1 translate-x-[-50%] flex-col justify-between">
                  {[...Array(3)].map((_, i) => {
                    return (
                      <div
                        key={i}
                        className="h-[24%] w-full rounded-full bg-slate-600"
                      />
                    );
                  })}
                </div>
              </li>
            );
          })}
          <li className="relative grid h-full grid-rows-[1fr_1fr] justify-center">
            <Button containerClassName="row-start-2 row-end-3 mt-8">
              View My Projects
            </Button>
          </li>
        </ul>
      </main>
    </>
  );
};

export default JourneyPageContent;
