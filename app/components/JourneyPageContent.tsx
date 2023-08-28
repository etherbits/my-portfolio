"use client";
import React, { useEffect, useRef, useState } from "react";
import OutlinedText from "@/app/components/OutlineText";
import { cn, getColorRGBA } from "@/app/utils/tailwind";
import Button from "@/app/components/Button";
import { generateTranslator } from "../utils/i18n";
import { DictionarySection } from "../[lang]/dictionaries";
import { motion, useAnimate } from "framer-motion";
import LineWaves from "./LineWaves";
import { useInView } from "react-intersection-observer";

const journeys = [
  { id: "journey_start", date: "2017" },
  { id: "journey_web_focus", date: "2019" },
  { id: "journey_profession_intro", date: "2021" },
  { id: "journey_start", date: "2017" },
  { id: "journey_web_focus", date: "2019" },
  { id: "journey_profession_intro", date: "2021" },
  { id: "journey_start", date: "2017" },
  { id: "journey_web_focus", date: "2019" },
  { id: "journey_profession_intro", date: "2021" },
  { id: "journey_start", date: "2017" },
  { id: "journey_web_focus", date: "2019" },
  { id: "journey_profession_intro", date: "2021" },
] as const;

type Props = {
  journeyDict: DictionarySection<"journey">;
};

const JourneyPageContent: React.FC<Props> = ({ journeyDict }) => {
  const t = generateTranslator<"journey">(journeyDict);
  const itemRefs = useRef<HTMLLIElement[]>([]);
  const [scope, animate] = useAnimate();
  const [visibleAmount, setVisibleAmount] = useState(0);

  useEffect(() => {
      const tempItems = itemRefs.current.slice(0, visibleAmount)
      tempItems.forEach(el => {
        animate(el, {opacity: .5}, {duration: 1, delay: 1})
          })

    console.log(visibleAmount)
  }, [scope, animate, itemRefs, visibleAmount]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <OutlinedText>Journey</OutlinedText>
      </motion.div>
      <main className="w-full md:w-clamp-card-container" ref={scope}>
        <ul className="mb-14 mt-[4vh] flex w-[100%] flex-col items-center gap-6 md:grid md:gap-0 md:[grid-auto-rows:1fr]">
          {journeys.map((journey, i) => {
            const journeyCardDict = t(journey.id);
            const isOdd = i % 2 !== 0;
            return (
              <motion.li
                key={journey.id}
                className="relative z-[-1] flex h-full flex-col justify-center md:py-2"
                ref={(el) => el && (itemRefs.current[i] = el)}
                    onViewportEnter={() => {
                      setVisibleAmount((currAmount) =>
                        Math.max(currAmount, i + 1),
                      );
                    }}
              >
                <motion.div
                  initial={{
                    opacity: 0,

                    translateX: (isOdd ? "-" : "") + "16px",
                  }}
                  animate={{
                    opacity: 1,
                    translateX: "0",
                  }}
                  transition={{ delay: 0.25, duration: 0.25 }}
                >
                  <motion.section
                    className={cn(
                      "my-auto flex h-fit w-full flex-col rounded-xl bg-gradient-to-r px-6 py-4 backdrop-blur-md md:w-[46%] md:backdrop-blur-lg",
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
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, translateX: "0" }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <h3 className="text-clamp-xl">{journeyCardDict.title}</h3>
                      <span className="text-clamp-sm">{journey.date}</span>
                    </div>
                    <p className="text-clamp-rg">{journeyCardDict.body}</p>
                  </motion.section>
                </motion.div>
                <motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      transform: "scale(0) translateX(-50%) translateY(-50%)",
                    }}
                    animate={{
                      opacity: 1,
                      transform: "scale(1) translateX(-50%) translateY(-50%)",
                    }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-[50%] top-[50%] hidden h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-blue-300 [transform-origin:0_0] md:block"
                  />
                  <motion.div
                    className={cn(
                      "absolute left-[50%] top-[50%] z-[-1] hidden h-[100%] w-1 translate-x-[-50%] flex-col justify-between md:left-[50%] md:flex",
                    )}
                  >
                    {[...Array(3)].map((_, j) => {
                      return (
                        <motion.div
                          key={j}
                          className="h-[24%] w-full rounded-full bg-slate-600 [transform-origin:-100%_0]"
                          initial={{ opacity: 0, scaleY: "0%" }}
                          whileInView={{ opacity: 1, scaleY: "100%" }}
                          transition={{
                            delay: (0.25 / 3) * j,
                            duration: 0.25 / 3,
                          }}
                        />
                      );
                    })}
                  </motion.div>
                </motion.div>
              </motion.li>
            );
          })}
          <div className="relative grid h-full justify-center md:grid-rows-[1fr_1fr]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 md:row-start-2 md:row-end-3"
            >
              <Button className="sm:clamp-xl text-[16px]">
                View My Projects
              </Button>
            </motion.div>
          </div>
        </ul>
      </main>
      <LineWaves
        type="journeyLeft"
        className="bottom-0 left-0 max-h-[200%] w-[140%] translate-x-[-61%] translate-y-[24%]"
      />
      <LineWaves
        type="journeyRight"
        className="bottom-0 right-0 max-h-[100%] w-[69%] translate-x-[34%] translate-y-[10%]"
      />
    </>
  );
};

export default JourneyPageContent;
