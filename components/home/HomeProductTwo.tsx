import { Button, ResponsiveImage } from "@/components";
import { homeSpeakerZ7ImagesObject } from "@/images";

export const HomeProductTwo = () => {
  return (
    <div className="flex relative">
      <span className="flex w-full">
        <ResponsiveImage
          className="rounded-lg"
          image={homeSpeakerZ7ImagesObject}
          alt="ZX7 Speaker"
        />
      </span>
      <div className="absolute top-0 left-0 w-full h-full px-6 flex flex-col justify-center md:px-[3.875rem] lg:px-24">
        <h2 className="text-[1.75rem] mb-8 uppercase font-bold">ZX7 Speaker</h2>
        <Button href="/product/zx7-speaker" type="link" variant="outline" />
      </div>
    </div>
  );
};
