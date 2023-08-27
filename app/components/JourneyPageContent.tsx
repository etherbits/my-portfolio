"use client";
import React from "react";
import OutlinedText from "@/app/components/OutlineText";
import { cn, getColorRGBA } from "@/app/utils/tailwind";
import Button from "@/app/components/Button";
import { generateTranslator } from "../utils/i18n";
import { DictionarySection } from "../[lang]/dictionaries";
import { motion } from "framer-motion";
import LineWaves from "./LineWaves";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <OutlinedText>Journey</OutlinedText>
      </motion.div>
      <main className="w-full md:w-clamp-card-container">
        <ul className="mt-[3vh] grid w-[100%] items-center [grid-auto-rows:1fr]">
          {journeys.map((journey, i) => {
            const journeyCardDict = t(journey.id);
            const isOdd = i % 2 !== 0;
            return (
              <li
                key={journey.id}
                className="relative z-[-1] flex h-full flex-col justify-center py-2"
              >
                <motion.section
                  className={cn(
                    "my-auto flex h-fit w-full flex-col rounded-xl bg-gradient-to-r px-6 py-4 backdrop-blur-sm md:backdrop-blur-lg md:w-[46%]",
                    {
                      "md:ml-auto": isOdd,
                    },
                  )}
                  style={{
                    background: `linear-gradient(${
                      isOdd ? "to left" : "to right"
                    },${getColorRGBA("neutral-900", 0.3)},${getColorRGBA(
                      "neutral-700",
                      0.3,
                    )} )`,
                  }}
                  initial={{
                    opacity: 0,
                    translateX: (isOdd ? "-" : "") + "16px",
                  }}
                  animate={{ opacity: 1, translateX: "0" }}
                  transition={{ delay: 0.25 * (i + 1), duration: 0.25 }}
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="text-clamp-xl">{journeyCardDict.title}</h3>
                    <span className="text-clamp-sm">{journey.date}</span>
                  </div>
                  <p className="text-clamp-rg">{journeyCardDict.body}</p>
                </motion.section>
                <div className="absolute left-[0] top-[50%] hidden h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-blue-300 md:left-[50%] md:block" />
                <div
                  className={cn(
                    "absolute left-[50%] top-[50%] z-[-1] hidden h-[100%] w-1 translate-x-[-50%] flex-col justify-between md:left-[50%] md:flex",
                  )}
                >
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.25 }}
              className="mt-8 md:row-start-2 md:row-end-3"
            >
              <Button>View My Projects</Button>
            </motion.div>
          </li>
        </ul>
      </main>
      <LineWaves
        type="journeyLeft"
        className="bottom-0 left-0 w-[140%] translate-x-[-61%] translate-y-[24%] max-h-[200%]"
      />
      <LineWaves
        type="journeyRight"
        className="bottom-0 right-0 max-h-[100%] w-[69%] translate-x-[34%] translate-y-[10%]"
      />
    </>
  );
};

export default JourneyPageContent;
