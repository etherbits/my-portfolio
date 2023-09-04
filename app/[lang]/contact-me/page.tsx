import { getDictionary } from "../dictionaries";
import { Locale } from "@/middleware";
import ProjectsPageContent from "@/app/components/ProjectsPageContent";
import Input from "@/app/components/Input";
import OutlinedText from "@/app/components/OutlineText";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="flex flex-col items-center gap-8 px-8 py-4">
      <OutlinedText>Get In Touch</OutlinedText>
      <form className="flex flex-col gap-6 w-full">
        <Input
          icon="User"
          className="w-full"
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
            placeholder: "ExampleMail@gmail.com",
          }}
        />
        <label className="w-full">
          Message
          <textarea
            className="w-full rounded-[4px] border border-slate-500 bg-transparent px-4 py-3 text-slate-300 placeholder:text-slate-400"
            placeholder="I would like to get in touch..."
          />
        </label>
      </form>
    </div>
  );
}
