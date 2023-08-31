import { getDictionary } from "../dictionaries";
import { Locale } from "@/middleware";
import ProjectsPageContent from "@/app/components/ProjectsPageContent";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="flex flex-col items-center basis-full justify-between overflow-auto">
      <ProjectsPageContent projectsDict={dict["projects"]} />
    </div>
  );
}
