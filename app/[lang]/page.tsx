import Image from "next/image";
import Button from "@/app/components/Button";
import RectLinks from "@/app/components/RectLinks";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "ge" };
}) {
  const dict = await getDictionary(lang);
  const d = dict["home"];
  return (
    <div className="flex basis-full justify-between">
      <div className="flex h-full w-full flex-col items-center justify-between p-16 text-center">
        <div className="-w-full mt-32 flex flex-col items-center justify-center text-center">
          <Image
            src="https://github.com/etherbits.png"
            width={460}
            height={460}
            alt="profile"
            className="mb-12 h-40 w-40 rounded-full"
          />
          <p className="mb-4 text-[48px] text-slate-200 ">
            {d["intro_first_start"]}{" "}
            <span className="text-blue-200">{d["intro_first_name"]}</span>{" "}
            {d["intro_first_end"]}
          </p>
          <div className="relative mb-8 w-full select-none">
            <p
              className="whitespace-nowrap bg-gradient-to-br from-blue-200 to-slate-600 bg-clip-text text-center text-[64px] font-extrabold tracking-widest text-black"
              style={{ WebkitTextStroke: "4px transparent" }}
            >
              {d["intro_profession"]}
            </p>
            <p
              className="absolute left-[50%] top-0 z-[-1] translate-x-[-50%] translate-y-[9%] whitespace-nowrap bg-gradient-to-br from-blue-200 to-slate-600 bg-clip-text text-center text-[64px] font-extrabold tracking-widest text-black opacity-50"
              style={{ WebkitTextStroke: "4px transparent" }}
            >
              {d["intro_profession"]}
            </p>
          </div>
          <p className="mb-16 w-[600px] text-xl leading-9 text-slate-300">
            {d["intro_paragraph"]}
          </p>
          <Button>{d["intro_button"]}</Button>
        </div>
        <RectLinks />
      </div>
    </div>
  );
}
