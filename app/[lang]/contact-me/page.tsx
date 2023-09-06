import { getDictionary } from "../dictionaries";
import { Locale } from "@/middleware";
import ContactMePageContent from "@/app/components/ContactMePageContent";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
  <ContactMePageContent contactDict={dict['contact']}/>
  );
}
