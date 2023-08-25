import { getDictionary } from "./dictionaries";
import { Locale } from "@/middleware";
import HomePageContent from "../components/HomePageContent";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="flex basis-full justify-between overflow-hidden">
      <HomePageContent homeDict={dict["home"]} />
    </div>
  );
}
