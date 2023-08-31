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
      <ProjectsPageContent projectsDict={dict["projects"]} />
  );
}
