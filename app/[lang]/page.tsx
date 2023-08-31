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
      <HomePageContent homeDict={dict["home"]} />
  );
}
