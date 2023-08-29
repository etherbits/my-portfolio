"use client";
import React, { useMemo, useState } from "react";
import LineWaves from "./LineWaves";
import { FunctionQueue } from "@/app/utils/animation";
import { DictionarySection } from "../[lang]/dictionaries";
import { motion, useAnimate } from "framer-motion";
import OutlinedText from "./OutlineText";
import Button from "./Button";
import JourneyDesktopList from "./JourneyDesktop";
import JourneyMobileList from "./JourneyMobile";

export const journeys = [
  { id: "journey_start", date: "2017" },
  { id: "journey_web_focus", date: "2019" },
  { id: "journey_profession_intro", date: "2021" },
  { id: "journey_start", date: "2017" },
  { id: "journey_web_focus", date: "2019" },
] as const;

type Props = {
  journeyDict: DictionarySection<"journey">;
};

const JourneyPageContent: React.FC<Props> = ({ journeyDict }) => {
  const funcQueue = useMemo(() => new FunctionQueue(), []);
  const [animatedElements, setAnimatedElements] = useState<string[]>([]);
  const [scope, animate] = useAnimate();

  const viewportEnterEnqueue = (
    entry: IntersectionObserverEntry | null,
    animationFunc: Function,
  ) => {
    if (!entry) return;
    const el = entry.target;
    if (animatedElements.includes(el.id)) return;
    setAnimatedElements((els) => [...els, el.id]);

    funcQueue.enqueue(() => animationFunc(el));
  };

  console.log(animatedElements)
  return (
    <>
      <main className="w-full md:w-clamp-card-container" ref={scope}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <OutlinedText>Journey</OutlinedText>
        </motion.div>
        <div className="hidden w-full justify-center md:flex">
          <JourneyDesktopList
            journeyDict={journeyDict}
            viewportEnterEnqueue={viewportEnterEnqueue}
            animate={animate}
          />
        </div>
        <div className="flex w-full justify-center md:hidden">
          <JourneyMobileList
            journeyDict={journeyDict}
            viewportEnterEnqueue={viewportEnterEnqueue}
            animate={animate}
          />
        </div>
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
