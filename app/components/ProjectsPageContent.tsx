"use client";
import { motion } from "framer-motion";
import { DictionarySection } from "../[lang]/dictionaries";
import { generateTranslator } from "../utils/i18n";
import OutlinedText from "./OutlineText";
import Image from "next/image";
import Button from "./Button";
import { cn } from "@/app/utils/tailwind";

type Props = {
  projectsDict: DictionarySection<"projects">;
};

const projects = [
  {
    id: "unispace",
    image: "/images/unispace-laptop.png",
    tags: [
      "React",
      "Javascript",
      "Styled Components",
      "Zod",
      "Python",
      "Flask",
    ],
    hasPage: true,
  },
  {
    id: "ebase",
    image: "/images/ebase-laptop.png",
    tags: ["React", "Typescript", "NextJS", "SASS", "PostgreSQL", "Prisma"],
    hasPage: false,
  },
] as const;

const imageVariants = {
  visible: {
    opacity: 1,
    translateX: "0",
    scale: 1,
    transition: { duration: 0.25 },
  },
  hidden: (isOdd: boolean) => ({
    opacity: 0,
    translateX: (isOdd ? "-" : "") + "5%",
    scale: 0.95,
  }),
};

const blobVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    translateY: "-50%",
    transition: { duration: 0.75 },
  },
  hidden: { opacity: 0, scale: 0 },
};

const MotionImage = motion(Image);

const ProjectsPageContent: React.FC<Props> = ({ projectsDict }) => {
  const t = generateTranslator<"projects">(projectsDict);

  return (
    <>
      <OutlinedText>Projects</OutlinedText>
      <ul className="my-9 flex flex-col items-center gap-24 px-8">
        {projects.map((project, i) => {
          const isOdd = i % 2 === 0;
          const projectDict = (t("items") as any)[project.id];
          return (
            <motion.li
              id={`project-${i}-item`}
              key={project.id}
              className="flex w-fit flex-col"
              initial={"hidden"}
              whileInView={"visible"}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative z-[-1]">
                <MotionImage
                  src={project.image}
                  width={1022}
                  height={632}
                  alt={projectDict.title}
                  className="mx-auto mb-8 w-[90%]"
                  variants={imageVariants}
                  custom={isOdd}
                />
                <MotionImage
                  src="/images/laptop-blob.svg"
                  width={70}
                  height={198}
                  alt="blob"
                  className={cn(
                    "absolute top-1/2 z-[-1] h-[56%] w-1/2 translate-y-[-50%] blur-[64px]",
                    { "left-[10%]": isOdd },
                    { "right-[10%]": !isOdd },
                  )}
                  variants={blobVariants}
                />
              </div>
              <h3 className="mb-4 text-xl font-medium">
                {projectDict["title"]}
              </h3>
              <p className="mb-4 text-sm">{projectDict["body"]}</p>
              <ul className="mb-8 flex max-w-full flex-wrap gap-3 text-[12px] text-slate-300">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border-1 rounded-[4px] border border-slate-400 px-2 py-1"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="ml-auto flex items-center gap-8">
                {project.hasPage && (
                  <Button className="text-sm">{projectsDict["button"]}</Button>
                )}
                <Image
                  src="/images/github.webp"
                  width={42}
                  height={42}
                  alt="github link"
                  className="border-1 h-10 w-10 rounded-md border border-slate-600"
                />
              </div>
            </motion.li>
          );
        })}
      </ul>
    </>
  );
};

export default ProjectsPageContent;
