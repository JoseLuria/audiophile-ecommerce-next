import { FC } from "react";
import { ProductGalleryInterface } from "@/interface";
import { ResponsiveImage } from "@/components";

interface Props {
  galleryImages: ProductGalleryInterface;
}

export const ProductGallery: FC<Props> = ({ galleryImages }) => {
  return (
    <section className=" flex flex-col gap-5 md:flex-row md:gap-4 md:justify-between">
      <div>
        <div className="flex flex-col gap-5 md:gap-0 md:h-full md:justify-between">
          <span className="flex">
            <ResponsiveImage
              className="rounded-lg"
              image={galleryImages.first}
              alt="First Image Gallery"
            />
          </span>
          <span className="flex">
            <ResponsiveImage
              className="rounded-lg"
              image={galleryImages.second}
              alt="Second Image Gallery"
            />
          </span>
        </div>
      </div>
      <span className="flex">
        <ResponsiveImage
          className="rounded-lg"
          image={galleryImages.third}
          alt="Third Image Gallery"
        />
      </span>
    </section>
  );
};
