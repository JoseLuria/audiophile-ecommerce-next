import Image from "next/image";
import { Button } from "../";
import { data } from "../../database";

export const CategoriesList = () => {
  return (
    <section className="w-full flex flex-col gap-4 md:flex-row md:gap-2 lg:gap-[1.875rem]">
      {data.categoriesList.map(({ name, href, image }) => (
        <div className="w-full relative" key={href}>
          <span className="absolute bottom-[6.25rem] w-[5.938rem] left-[50%] translate-x-[-50%]">
            <Image
              width={image.width}
              height={image.height}
              src={image.src}
              alt={name}
            />
          </span>
          <div className="mt-[3.25rem] pt-[5.5rem] flex flex-col gap-4 items-center rounded-lg pb-[1.375rem] bg-light-gray">
            <p className="text-[0.938rem] uppercase font-bold">{name}</p>
            <Button variant="text" type="link" href={href}>
              Shop
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};
