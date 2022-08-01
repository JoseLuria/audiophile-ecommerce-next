import Image from "next/image";
import { Text } from "../";
import { bestSectionImagesObject } from "../../images";
import { useResponsiveImages } from "../../hooks";

export const BestAudio = () => {
  const { src, width, height } = useResponsiveImages(bestSectionImagesObject);

  return (
    <section className="flex flex-col gap-10 items-center md:gap-[3.938rem] lg:flex-row-reverse lg:gap-[7.813rem]">
      <Image
        className="rounded-lg lg:flex-1"
        width={width}
        height={height}
        src={src}
        alt="Best Audio"
      />
      <div className="text-center md:w-[35.813rem] lg:text-left xl:flex-1">
        <h2 className="mb-8 uppercase font-bold text-[1.75rem] leading-[2.391rem] md:text-[2.5rem] md:leading-[2.75rem]">
          Bringing you the <span className="text-beige">best</span> audio gear
        </h2>
        <Text color="black">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </div>
    </section>
  );
};
