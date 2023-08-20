import OutlinedText from "@/app/components/OutlineText";
import ProfileImage from "@/app/components/ProfileImage";
import React from "react";

export default function AboutMe() {
  return (
    <div className="flex basis-full  justify-center overflow-hidden">
      <main className="mt-[7vh] flex w-fit gap-10">
        <ProfileImage className="mt-6 sm:h-28 sm:w-28 md:h-40 md:w-40" />
        <div>
          <OutlinedText className="pl-1 text-left mb-6">About Me</OutlinedText>
          <p className="max-w-clamp-2xl whitespace-pre-line text-clamp-lg">
            Lorem ipsum dolor sit amet consectetur. Amet penatibus habitant quam
            ac aliquam. Pharetra ipsum quis eu diam in. Aliquam sit morbi sit
            blandit arcu viverra volutpat nulla sollicitudin.{"\n"}
            {"\n"} Tristique sed consequat gravida amet egestas nibh. Cursus sed
            facilisis nisl aliquam consectetur diam pharetra. Ullamcorper
            convallis feugiat phasellus egestas etiam et purus quam. Nulla
            rutrum imperdiet urna arcu eget diam viverra lacus et. {"\n"}
            {"\n"}Eros semper pulvinar tellus urna eu massa placerat interdum.
            Vel eu viverra et in vel dui fermentum fermentum elit. Etiam elit
            lorem accumsan vulputate ultrices sed condimentum maecenas. Mauris
            convallis sit ut viverra. Nibh scelerisque magna enim arcu sodales
            quis mauris tortor blandit. Ipsum magna aliquet nisi laoreet eu.{" "}
            {"\n"}
            {"\n"}Velit leo amet at ut viverra vestibulum magna aliquam. Sit
            massa vestibulum turpis venenatis. Habitant dictum scelerisque
            tellus adipiscing id eu. Et volutpat ac neque sit cursus tempus
            hendrerit nec nam. Viverra ipsum odio a tellus.
          </p>
        </div>
      </main>
    </div>
  );
}
