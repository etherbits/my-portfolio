import Image from "next/image";
import Button from "@/app/components/Button";
import RectLinks from "@/app/components/RectLinks";
import { generateTranslator } from "../utils/i18n";
import { getDictionary } from "./dictionaries";
import LineWaves from "../components/LineWaves";
import OutlinedText from "../components/OutlineText";
import ProfileImage from "../components/ProfileImage";
import { Locale } from "@/middleware";
import Link from "next/link";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const t = generateTranslator<"home">(dict["home"]);
  return (
    <div className="flex basis-full justify-between overflow-hidden">
      {t && (
        <div className="flex h-full w-full flex-col items-center justify-between p-6 text-center sm:px-8 sm:pb-16">
          <div className="flex max-w-full flex-col items-center justify-center text-center sm:mt-[3vh] md:mt-[7vh]">
            <ProfileImage className="mb-8 sm:h-28 sm:w-28 md:h-40 md:w-40" />
            <p className="mb-4 text-[26px] text-slate-200 sm:text-clamp-3xl">
              {t("intro_first_start")}{" "}
              <span className="text-blue-200">{t("intro_first_name")}</span>{" "}
              {t("intro_first_end")}
            </p>
            <OutlinedText dropCount={1}>{t("intro_profession")}</OutlinedText>
            <p className="mb-16 mt-8 max-w-[320px] text-sm leading-9 text-slate-300  sm:max-w-clamp-xs sm:text-clamp-xl  sm:leading-clamp-xl">
              {t("intro_paragraph")}
            </p>
            <Link href="/journey" className="mb-11">
              <Button className="sm:clamp-xl text-[16px]">
                {t("intro_button")}
              </Button>
            </Link>
          </div>
          <RectLinks size={36} gap={24} className="sm:hidden" />
          <RectLinks className="hidden sm:mt-auto sm:flex" />
        </div>
      )}
      <LineWaves
        type="homeRight"
        className="bottom-0 right-0 h-[38%] w-[100%] translate-x-[52%] translate-y-[28%] md:h-[104%] 2xl:h-[132%]"
      />
      <LineWaves
        type="homeLeft"
        className="bottom-0 left-0 h-[30%] w-[60%] translate-x-[-46%] translate-y-[36%] md:h-[70%] 2xl:h-[96%]"
        transition={{ delay: 1.3 }}
      />
    </div>
  );
}
