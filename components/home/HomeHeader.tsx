import { heroImagesObject } from "@/images";
import { Button, Text, ResponsiveImage } from "@/components";

export const HomeHeader = () => {
  return (
    <header className="bg-black relative flex justify-center">
      <ResponsiveImage
        className="w-full max-w-size"
        image={heroImagesObject}
        alt="Hero Image"
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center pt-[5.625rem] px-6 md:px-10 lg:pt-24">
        <div className="w-full max-w-size flex h-full">
          <div className="m-auto w-[17rem] flex flex-col items-center gap-4 text-center md:w-[25rem] lg:gap-6 lg:items-start lg:text-left lg:ml-0 lg:mr-auto">
            <Text newText>New Product</Text>
            <h1 className="text-white uppercase font-bold text-4xl md:text-[3.5rem] md:leading-[3.625rem]">
              XX99 Mark II Headphones
            </h1>
            <Text className="lg:w-[21.875rem]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Text>
            <Button type="link" href="/product/xx99-mark-two-headphones" />
          </div>
        </div>
      </div>
    </header>
  );
};
