"use client";
import { motion } from "framer-motion";
import { DictionarySection } from "../[lang]/dictionaries";
import { generateTranslator } from "../utils/i18n";
import OutlinedText from "./OutlineText";
import Image from "next/image";
import Button from "./Button";
import { cn } from "@/app/utils/tailwind";
import Link from "next/link";

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
    button: {
      type: "webpage",
      href: "https://tiny-pegasus-d8c812.netlify.app/",
    },
    repoHref: "https://github.com/etherbits/unilab-internal-system",
    disclamer: "* Does not support mobile for now",
  },
  {
    id: "sandro",
    image: "/images/sandro-laptop.png",
    tags: ["React", "Javascript", "SASS", "Framer Motion", "React Router"],
    button: {
      type: "webpage",
      href: "https://quiet-brioche-e9ce8b.netlify.app/",
    },
    repoHref: "https://github.com/etherbits/react-Web-edition-of-Sandro-s-book",
    disclamer: null,
  },
  {
    id: "ebase",
    image: "/images/ebase-laptop.png",
    tags: ["React", "Typescript", "NextJS", "SASS", "PostgreSQL", "Prisma"],
    button: {
      type: "demo",
      href: "https://www.youtube.com/watch?v=yp5Uso8klBg",
    },
    repoHref: "https://github.com/etherbits/ebase",
    disclamer: null,
  },
  {
    id: "octopus",
    image: "/images/octopus-laptop.png",
    tags: ["Tauri", "React", "Typescript", "Zustand", "Tailwind", "Rust"],
    button: {
      type: "none",
    },
    repoHref: "https://github.com/etherbits/octopus",
    disclamer: null,
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
    translateX: (isOdd ? "" : "-") + "5%",
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

const titleVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.25,
    },
  },
  hidden: { opacity: 0 },
};

const descriptionVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.5,
    },
  },
  hidden: { opacity: 0 },
};

const tagVariants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.5 + 0.25 * i,
    },
  }),
  hidden: { opacity: 0 },
};

const buttonContainerVariants = {
  visible: (tagCount: number) => ({
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.75 + 0.25 * tagCount,
    },
  }),
  hidden: { opacity: 0 },
};

const MotionImage = motion(Image);

const ProjectsPageContent: React.FC<Props> = ({ projectsDict }) => {
  const t = generateTranslator<"projects">(projectsDict);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <OutlinedText className="md:text-clamp-3xl">My Projects</OutlinedText>
      </motion.div>
      <ul className="my-9 md:my-[8vh] flex flex-col items-center gap-24 md:gap-[8vh] px-8">
        {projects.map((project, i) => {
          const isOdd = i % 2 !== 0;
          const projectDict = (t("items") as any)[project.id];
          return (
            <motion.li
              id={`project-${i}-item`}
              key={project.id}
              className={cn(
                "flex w-full flex-col  md:flex-row md:items-center md:justify-center md:gap-[5vw] md:px-12",
                { "md:flex-row-reverse": isOdd },
              )}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true, margin: "-22%" }}
            >
              <div className="relative md:h-fit md:basis-[clamp(24rem,44%,44rem)]">
                <MotionImage
                  src={project.image}
                  width={1022}
                  height={632}
                  alt={projectDict.title}
                  className="mx-auto mb-8 w-[90%] md:w-[100%]"
                  variants={imageVariants}
                  custom={isOdd}
                />
                <MotionImage
                  src="/images/laptop-blob.svg"
                  width={70}
                  height={198}
                  alt="blob"
                  className={cn(
                    "absolute top-1/2 z-[-1] h-[56%] w-1/2  translate-y-[-50%] blur-[40px] md:blur-[64px] 2xl:blur-[96px]",
                    { "left-[10%]": !isOdd },
                    { "right-[10%]": isOdd },
                  )}
                  variants={blobVariants}
                />
              </div>
              <div className="flex flex-col md:basis-[clamp(24rem,40%,44rem)] ">
                <motion.h3
                  className="mb-4 text-clamp-xl text-xl font-medium"
                  variants={titleVariants}
                >
                  {projectDict["title"]}
                </motion.h3>
                <motion.p
                  className="mb-4 text-sm md:text-clamp-rg md:leading-[160%]"
                  variants={descriptionVariants}
                >
                  {projectDict["body"]}
                </motion.p>
                <ul className="mb-8 flex max-w-full flex-wrap gap-3 text-[0.75rem] text-slate-300 md:text-clamp-xm">
                  {project.tags.map((tag, j) => (
                    <motion.li
                      key={tag}
                      className="border-1 rounded-[4px] border border-slate-400 px-2 py-1"
                      variants={tagVariants}
                      custom={j}
                    >
                      {tag}
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="flex flex-col"
                  variants={buttonContainerVariants}
                  custom={project.tags.length}
                >
                  {project.disclamer && (
                    <motion.p className="mb-6 text-right text-sm text-slate-400">
                      {project.disclamer}
                    </motion.p>
                  )}
                  <motion.div className="ml-auto flex items-center gap-8">
                    {project.button.type !== "none" && (
                      <div>
                        <Link href={project.button.href}>
                          <Button className="text-sm md:text-clamp-rg">
                            {
                              t(
                                project.button.type === "webpage"
                                  ? "webpage_button"
                                  : "demo_button",
                              ) as string
                            }
                          </Button>
                        </Link>
                      </div>
                    )}
                    <Link href={project.repoHref}>
                      <div className="md:hidden">
                        <Image
                          src="/images/github.webp"
                          width={42}
                          height={42}
                          alt="github link"
                          className="border-1 h-10 w-10 rounded-md border border-slate-600"
                        />
                      </div>
                      <div className="hidden md:block">
                        <Image
                          src="/images/github.webp"
                          width={48}
                          height={48}
                          alt="github link"
                          className="border-1 h-11 w-11 rounded-md border border-slate-600"
                        />
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </>
  );
};

export default ProjectsPageContent;
