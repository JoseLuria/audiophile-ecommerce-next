import { Text, Button, ResponsiveImage } from "@/components";
import { homeSpeakerZ9ImagesObject } from "@/images";

export const HomeProductOne = () => {
  return (
    <div className="bg-beige bg-pattern-circles relative overflow-hidden py-[3.438rem] px-6 rounded-lg md:py-16 lg:py-[8.875rem] lg:px-24">
      <span className="mx-auto flex w-[10.813rem] mb-8 md:w-[12.313rem] md:mb-16 lg:absolute lg:w-[18rem] xl:bottom-[-5rem] xl:w-[25.625rem]">
        <ResponsiveImage image={homeSpeakerZ9ImagesObject} alt="ZX9 Speaker" />
      </span>

      <div className="text-center mx-auto w-full max-w-[21.875rem] flex flex-col items-center gap-6 lg:mr-0 lg:text-left lg:items-start">
        <h2 className="uppercase text-white text-4xl font-bold whitespace-pre-wrap md:text-[3.5rem] md:leading-[3.625rem]">
          {"ZX9\nSpeaker"}
        </h2>
        <Text>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Text>
        <Button href="/product/zx9-speaker" type="link" variant="black" />
      </div>
    </div>
  );
};
