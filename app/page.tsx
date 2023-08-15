import Image from "next/image";

export default function Home() {
  return (
    <div className="flex basis-full justify-center">
      <div className="flex h-full w-full flex-col items-center text-center">
        <div className="-w-full mt-32 flex flex-col items-center justify-center text-center">
          <Image
            src="https://github.com/etherbits.png"
            width={460}
            height={460}
            alt="profile"
            className="mb-12 h-40 w-40 rounded-full"
          />
          <p className="mb-4 text-[48px] text-slate-200 ">
            Hello there! I{"'"}m <span className="text-blue-200">Nika</span> a
          </p>
          <div className="relative mb-8 w-full">
            <p
              className="whitespace-nowrap bg-gradient-to-br from-blue-200 to-slate-900 bg-clip-text text-center text-[64px] font-extrabold tracking-widest text-black"
              style={{ WebkitTextStroke: "4px transparent" }}
            >
              Web Developer
            </p>
            <p
              className="absolute left-[50%] top-0 z-[-1] translate-x-[-50%] translate-y-[9%] whitespace-nowrap bg-gradient-to-br from-blue-200 to-slate-900 bg-clip-text text-center text-[64px] font-extrabold tracking-widest text-black opacity-50"
              style={{ WebkitTextStroke: "4px transparent" }}
            >
              Web Developer
            </p>
          </div>
          <p className="w-[600px] text-xl leading-9 text-slate-300">
            I build responsive, performant, and inclusive web solutions
            utilizing leading web technologies with the goal of delivering
            seamless digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
