import { getDictionary } from "../dictionaries";
import { Locale } from "@/middleware";
import ProjectsPageContent from "@/app/components/ProjectsPageContent";
import Input from "@/app/components/Input";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="flex flex-col items-center p-8">
      <form className="flex flex-col gap-4">
        <Input
          icon="User"
          inputProps={{
            name: "Name",
            type: "text",
            placeholder: "Andrew Smith",
          }}
        />
        <Input
          icon="Mail"
          inputProps={{
            name: "E-Mail",
            type: "email",
            placeholder: "Andrew Smith",
          }}
        />
      </form>
    </div>
  );
}
