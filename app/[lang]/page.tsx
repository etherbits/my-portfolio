import Image from "next/image";
import Button from "@/app/components/Button";
import RectLinks from "@/app/components/RectLinks";
import { generateTranslator } from "../utils/i18n";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "ge" };
}) {
  const dict = await getDictionary(lang);
  const t = generateTranslator<"home">(dict["home"]);
  return (
    <div className="flex basis-full justify-between">
      {t && (
        <div className="flex h-full w-full flex-col items-center justify-between p-6 text-center md:p-16">
          <div className="flex max-w-full flex-col items-center justify-center text-center">
            <Image
              src="https://github.com/etherbits.png"
              width={460}
              height={460}
              alt="profile"
              className="mb-6 h-20 w-20 rounded-full md:h-40 md:w-40"
            />
            <p className="mb-4 text-[26px] text-slate-200 md:text-[48px] ">
              {t("intro_first_start")}{" "}
              <span className="text-blue-200">{t("intro_first_name")}</span>{" "}
              {t("intro_first_end")}
            </p>
            <div className="relative z-[-1] mb-8 w-full select-none">
              <p
                className="bg-gradient-to-br from-blue-200 to-slate-600 bg-clip-text text-center text-[32px] font-extrabold tracking-widest text-black md:whitespace-nowrap md:text-[64px]"
                style={{ WebkitTextStroke: "4px transparent" }}
              >
                {t("intro_profession")}
              </p>
              <p
                className="absolute left-0 top-0 z-[-1] w-full translate-y-[12%] overflow-hidden bg-gradient-to-br from-blue-200 to-slate-600 bg-clip-text text-center text-[32px] font-extrabold tracking-widest text-black opacity-[60%] md:whitespace-nowrap md:text-[64px]"
                style={{ WebkitTextStroke: "4px transparent" }}
              >
                {t("intro_profession")}
              </p>
            </div>
            <p className="mb-16 max-w-[320px] text-sm leading-9 text-slate-300 md:max-w-[600px] md:text-xl">
              {t("intro_paragraph")}
            </p>
            <Button className="mb-11 text-[16px] md:text-xl">
              {t("intro_button")}
            </Button>
          </div>
          <RectLinks size={36} gap={24} className="md:hidden" />
          <RectLinks className="hidden md:flex" />
        </div>
      )}
    </div>
  );
}
