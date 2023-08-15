import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex w-[620px] flex-col justify-center">
        <Image
          src="https://github.com/etherbits.png"
          width={460}
          height={460}
          alt="profile"
          className="h-40 w-40 rounded-full"
        />
        <p className="text-[48px] text-slate-200">
          Hello there! I{"'"}m <span className="text-blue-200">Nika</span> a
        </p>
        <div className="relative">
          <p
            className="bg-gradient-to-br from-blue-200 to-slate-900 bg-clip-text text-center text-[64px] font-extrabold tracking-widest text-black"
            style={{ WebkitTextStroke: "6px transparent" }}
          >
            Web Developer
          </p>
          <p
            className="absolute left-[6px] top-0 z-[-1] translate-y-[12%] bg-gradient-to-br from-blue-200 to-slate-900 bg-clip-text text-center text-[64px] font-extrabold tracking-widest text-black opacity-50"
            style={{ WebkitTextStroke: "6px transparent" }}
          >
            Web Developer
          </p>
        </div>
        <p>
          I build responsive, performant, and inclusive web solutions utilizing
          leading web technologies with the goal of delivering seamless digital
          experiences.
        </p>
      </div>
    </div>
  );
}
