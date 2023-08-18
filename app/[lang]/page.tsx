import Image from "next/image";
import Button from "@/app/components/Button";
import RectLinks from "@/app/components/RectLinks";
import { generateTranslator } from "../utils/i18n";
import { getDictionary } from "./dictionaries";
import { cn } from "../utils/tailwind";
import { HTMLAttributes } from "react";
import HomeWavesRight from "../components/waves/HomeWavesRight";

export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "ge" };
}) {
  const dict = await getDictionary(lang);
  const t = generateTranslator<"home">(dict["home"]);
  return (
    <div className="relative flex basis-full justify-between">
      {t && (
        <div className="flex h-full w-full flex-col items-center justify-between p-6 text-center sm:px-8 sm:pb-16">
          <div className="flex max-w-full flex-col items-center justify-center text-center">
            <Image
              src="https://github.com/etherbits.png"
              width={460}
              height={460}
              alt="profile"
              className="mb-6 h-20 w-20 rounded-full sm:mt-[3vh] sm:h-28 sm:w-28 md:mt-[7vh] md:h-40 md:w-40"
            />
            <p className="mb-4 text-[26px] text-slate-200 sm:text-clamp-3xl">
              {t("intro_first_start")}{" "}
              <span className="text-blue-200">{t("intro_first_name")}</span>{" "}
              {t("intro_first_end")}
            </p>
            <ProfessionText>{t("intro_profession")}</ProfessionText>
            <p className="mb-16 max-w-[320px] text-sm leading-9 text-slate-300  sm:max-w-clamp-xs sm:text-clamp-xl  sm:leading-clamp-xl">
              {t("intro_paragraph")}
            </p>
            <Button className="mb-11 text-[16px] sm:text-xl">
              {t("intro_button")}
            </Button>
          </div>
          <RectLinks size={36} gap={24} className="sm:hidden" />
          <RectLinks className="hidden sm:mt-auto sm:flex" />
        </div>
      )}
      <HomeWavesRight />
    </div>
  );
}

type ProfessionProps = {
  children: string;
  className?: string | undefined;
};

const ProfessionText: React.FC<ProfessionProps> = ({ children, className }) => {
  const baseClassName: HTMLAttributes<HTMLParagraphElement>["className"] =
    "bg-gradient-to-br w-full from-blue-200 to-slate-600 bg-clip-text text-center text-[32px] font-extrabold tracking-widest text-black sm:whitespace-nowrap sm:text-clamp-4xl";

  return (
    <div className="relative z-[-1] mb-8 w-full select-none">
      <p
        className={cn(baseClassName, className)}
        style={{ WebkitTextStroke: "4px transparent" }}
      >
        {children}
      </p>
      <p
        className={cn(
          baseClassName,
          "absolute left-0 top-0 z-[-1] translate-y-[9%] opacity-60",
          className,
        )}
        style={{ WebkitTextStroke: "4px transparent" }}
      >
        {children}
      </p>
    </div>
  );
};
