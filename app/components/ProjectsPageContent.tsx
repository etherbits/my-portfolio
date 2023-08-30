"use client";
import { motion } from "framer-motion";
import { DictionarySection } from "../[lang]/dictionaries";
import { generateTranslator } from "../utils/i18n";
import OutlinedText from "./OutlineText";
import Image from "next/image";
import Button from "./Button";

type Props = {
  projectsDict: DictionarySection<"projects">;
};

const projects = [
  {
    id: "unispace",
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
];

const ProjectsPageContent: React.FC<Props> = ({ projectsDict }) => {
  const t = generateTranslator<"projects">(projectsDict);
  return (
    <>
      <OutlinedText>Projects</OutlinedText>
      <ul className="my-9 flex flex-col items-center gap-8 px-8">
        {projects.map((project) => {
          const projectDict = (t("items") as any)[project.id];
          return (
            <li key={project.id} className="flex w-fit flex-col ">
              <Image
                src="/images/unispace-laptop.png"
                width={1022}
                height={632}
                alt="unispace screen"
                className="mx-auto mb-8 w-[90%]"
              />
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
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProjectsPageContent;
