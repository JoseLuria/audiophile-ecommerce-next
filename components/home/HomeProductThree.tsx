import { Button, ResponsiveImage } from "@/components";
import { homeEarphonesImagesObject } from "@/images";

export const HomeProductThree = () => {
  return (
    <div className="grid grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-none">
      <span className="flex">
        <ResponsiveImage
          className="rounded-lg"
          image={homeEarphonesImagesObject}
          alt="YX1 Earphones"
        />
      </span>
      <div className="bg-light-gray flex flex-col justify-center px-6 py-4 rounded-lg md:px-10 lg:px-24">
        <h2 className="text-[1.75rem] mb-8 uppercase font-bold">
          YX1 Earphones
        </h2>
        <Button href="/product/yx1-earphones" type="link" variant="outline" />
      </div>
    </div>
  );
};
