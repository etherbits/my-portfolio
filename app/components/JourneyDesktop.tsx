import React from "react";
import { cn, getColorRGBA } from "@/app/utils/tailwind";
import Button from "@/app/components/Button";
import { generateTranslator } from "../utils/i18n";
import { Segment, motion } from "framer-motion";
import { journeys } from "./JourneyPageContent";
import { JourneyCardListProps } from "./JourneyMobile";

const JourneyDesktopList: React.FC<JourneyCardListProps> = ({
  journeyDict,
  viewportEnterEnqueue,
  animate,
}) => {
  const t = generateTranslator<"journey">(journeyDict);

  const generateItemAnimationFunc = () => {
    return (el: Element) => {
      const pathAnims: Segment[] = [...Array(3)].map((_, j) => [
        `#${el.id}-path-${j}`,
        { opacity: 1, scaleY: "100%" },
        {
          duration: 0.25 / 3,
        },
      ]);
      return animate([
        [
          `#${el.id}-dot`,
          {
            opacity: 1,
            transform: "scale(1) translateX(-50%) translateY(-50%)",
          },
          {
            duration: 0.25,
          },
        ],
        [
          `#${el.id}-card`,
          { opacity: 1, transform: "translateX(0)" },
          {
            duration: 0.25,
          },
        ],
        ...pathAnims,
      ]);
    };
  };
  return (
    <>
      <ul className="mb-14 mt-[4vh]  grid w-[100%]  items-center gap-0 [grid-auto-rows:1fr]">
        {journeys.map((journey, i) => {
          const journeyCardDict = t(journey.id);
          const isOdd = i % 2 !== 0;
          return (
            <motion.li
              id={`desktop-journey-card-${i}`}
              key={journey.id}
              className="relative z-[-1] flex h-full flex-col justify-center py-2"
              ref={(el) => el && (el = el)}
              onViewportEnter={(entry) => {
                viewportEnterEnqueue(entry, generateItemAnimationFunc());
              }}
            >
              <motion.section
                id={`desktop-journey-card-${i}-card`}
                className={cn(
                  "my-auto flex h-fit w-[46%] flex-col rounded-xl bg-gradient-to-r px-6 py-4 backdrop-blur-lg",
                  {
                    "ml-auto": isOdd,
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
                  id={`desktop-journey-card-${i}-dot`}
                  className="absolute left-[50%] top-[50%] block h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-blue-300 [transform-origin:0_0]"
                />
                <div
                  className={cn(
                    "absolute left-[50%] top-[50%] z-[-1] flex  h-[100%] w-1 translate-x-[-50%] flex-col  justify-between",
                  )}
                >
                  {[...Array(3)].map((_, j) => {
                    return (
                      <motion.div
                        id={`desktop-journey-card-${i}-path-${j}`}
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
        <div className="relative grid h-full grid-rows-[1fr_1fr] justify-center">
          <motion.div
            id="desktop-journey-button"
            initial={{ opacity: 0 }}
            className="row-start-2 row-end-3 mt-8"
            onViewportEnter={(entry) => {
              viewportEnterEnqueue(entry, (el: Element) =>
                animate(el, { opacity: 1 }, { duration: 1 }),
              );
            }}
          >
            <Button className="text-clamp-lg">View My Projects</Button>
          </motion.div>
        </div>
      </ul>
    </>
  );
};

export default JourneyDesktopList;
