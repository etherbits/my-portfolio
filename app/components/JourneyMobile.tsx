import React from "react";
import { cn, getColorRGBA } from "@/app/utils/tailwind";
import { generateTranslator } from "../utils/i18n";
import { DictionarySection } from "../[lang]/dictionaries";
import { animate, motion } from "framer-motion";
import { journeys } from "./JourneyPageContent";

type Props = {
  journeyDict: DictionarySection<"journey">;
  animate: typeof animate;
  viewportEnterEnqueue: (
    entry: IntersectionObserverEntry | null,
    animationFunc: Function,
  ) => void;
};

const JourneyMobile: React.FC<Props> = ({
  journeyDict,
  viewportEnterEnqueue,
  animate,
}) => {
  const t = generateTranslator<"journey">(journeyDict);

  const generateItemAnimationFunc = () => {
    return (el: Element) => {
      return animate([
        [
          `#${el.id}-card`,
          { opacity: 1, transform: "translateX(0)" },
          {
            duration: 0.25,
          },
        ],
      ]);
    };
  };
  return (
    <ul className="mb-14 mt-[4vh] flex w-[100%] flex-col items-center gap-6">
      {journeys.map((journey, i) => {
        const journeyCardDict = t(journey.id);
        const isOdd = i % 2 !== 0;
        return (
          <motion.li
            id={`journey-card-${i}`}
            key={journey.id}
            className="relative z-[-1] flex h-full flex-col justify-center"
            ref={(el) => el && (el = el)}
            onViewportEnter={(entry) => {
              viewportEnterEnqueue(entry, generateItemAnimationFunc());
            }}
          >
            <motion.section
              id={`journey-card-${i}-card`}
              className={cn(
                "my-auto flex h-fit w-full flex-col rounded-xl bg-gradient-to-r px-6 py-4 backdrop-blur-md",
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
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="text-clamp-xl">{journeyCardDict.title}</h3>
                <span className="text-clamp-sm">{journey.date}</span>
              </div>
              <p className="text-clamp-rg">{journeyCardDict.body}</p>
            </motion.section>
            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  transform: "scale(0) translateX(-50%) translateY(-50%)",
                }}
                id={`journey-card-${i}-dot`}
                className="absolute left-[50%] top-[50%] hidden h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-blue-300 [transform-origin:0_0] "
              />
              <div
                className={cn(
                  "absolute left-[50%] top-[50%] z-[-1] hidden h-[100%] w-1 translate-x-[-50%] flex-col justify-between ",
                )}
              >
                {[...Array(3)].map((_, j) => {
                  return (
                    <motion.div
                      id={`journey-card-${i}-path-${j}`}
                      key={j}
                      className="h-[24%] w-full rounded-full bg-slate-600 [transform-origin:-100%_0]"
                      initial={{ opacity: 0, scaleY: "0%" }}
                    />
                  );
                })}
              </div>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default JourneyMobile;
