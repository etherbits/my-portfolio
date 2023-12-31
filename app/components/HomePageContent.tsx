"use client";
import React, { useMemo } from "react";
import LineWaves from "./LineWaves";
import RectLinks from "./RectLinks";
import Link from "next/link";
import Button from "./Button";
import OutlinedText from "./OutlineText";
import { generateTranslator } from "../utils/i18n";
import { DictionarySection } from "../[lang]/dictionaries";
import ProfileImage from "./ProfileImage";
import { motion } from "framer-motion";
import { AnimationOrchestrator } from "../utils/animation";

const MotionLink = motion(Link);

type Props = {
  homeDict: DictionarySection<"home">;
};

const HomePageContent: React.FC<Props> = ({ homeDict }) => {
  const t = generateTranslator<"home">(homeDict);

  const orchestrator = useMemo(() => new AnimationOrchestrator(0), []);
  const orchestrate = (duration: number) => orchestrator.orchestrate(duration);

  const animationDuration = 0.5

  return (
    <>
      <div className="flex h-full w-full flex-grow flex-col items-center justify-between p-6 sm:px-8 sm:pb-16">
        <div className="flex  max-w-full flex-col items-center justify-center text-center sm:mt-[3vh] md:mt-[7vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={orchestrate(animationDuration)}
          >
            <ProfileImage className="mb-8 sm:h-28 sm:w-28 md:h-40 md:w-40" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={orchestrate(animationDuration)}
            className="mb-4 text-[26px] text-slate-200 sm:text-clamp-3xl"
          >
            {t("intro_first_start")}{" "}
            <span className="text-blue-200">{t("intro_first_name")}</span>{" "}
            {t("intro_first_end")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={orchestrate(animationDuration)}
          >
            <OutlinedText dropCount={1}>{t("intro_profession")}</OutlinedText>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={orchestrate(animationDuration)}
            className="mb-16 mt-8 max-w-[320px] text-sm leading-9 text-slate-300  sm:max-w-clamp-xs sm:text-clamp-xl  sm:leading-clamp-xl"
          >
            {t("intro_paragraph")}
          </motion.p>
          <MotionLink
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={orchestrate(animationDuration)}
            href="/projects"
            className="mb-11"
          >
            <Button className="sm:clamp-xl text-base">
              {t("intro_button")}
            </Button>
          </MotionLink>
        </div>
        <RectLinks
          animationDelay={orchestrator.getCurrentDelay()}
          size={36}
          className="gap-6 sm:hidden"
        />
        <RectLinks
          animationDelay={orchestrator.getCurrentDelay()}
          className="hidden sm:flex"
        />
      </div>

      <LineWaves
        type="homeRight"
        className="bottom-0 right-0 h-[38%] w-[100%] translate-x-[52%] translate-y-[28%] md:h-[104%] 2xl:h-[132%]"
      />
      <LineWaves
        type="homeLeft"
        className="bottom-0 left-0 h-[30%] w-[60%] translate-x-[-46%] translate-y-[36%] md:h-[70%] 2xl:h-[96%]"
        transition={{ delay: 1 }}
      />
    </>
  );
};

export default HomePageContent;
