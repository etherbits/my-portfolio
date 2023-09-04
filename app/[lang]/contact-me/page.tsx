import { getDictionary } from "../dictionaries";
import { Locale } from "@/middleware";
import Input from "@/app/components/Input";
import OutlinedText from "@/app/components/OutlineText";
import Button from "@/app/components/Button";
import Icon from "@/app/components/Icon";
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
