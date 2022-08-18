import { FC } from "react";
import { Text } from "@/components";
import { ProductInterface } from "@/interface";

type Props = Pick<ProductInterface, "features" | "includes">;

export const ProductFeatures: FC<Props> = ({ features, includes }) => {
  return (
    <section className="flex flex-col gap-[7.5rem] lg:flex-row">
      <div>
        <h2 className="mb-6 uppercase font-bold text-2xl md:text-[2rem] md:mb-8">
          Features
        </h2>
        <Text color="black">{features}</Text>
      </div>
      <div className="md:flex md:gap-[10.188rem] lg:block">
        <h2 className="mb-6 uppercase font-bold text-2xl md:text-[2rem] md:mb-8 lg:w-[21.875rem]">
          In the box
        </h2>
        <ul className="flex flex-col gap-2">
          {includes.map(({ item, quantity }) => (
            <li className="flex gap-5" key={item}>
              <span className="text-[0.938rem] text-beige font-bold">
                {quantity}x
              </span>
              <Text color="black">{item}</Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
