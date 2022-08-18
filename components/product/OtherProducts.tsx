import { FC } from "react";
import { OtherProductCard } from "@/components";
import { ProductPageInterface } from "@/interface";

type Props = Pick<ProductPageInterface, "others">;

export const OtherProducts: FC<Props> = ({ others }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase text-center mb-10 md:text-4xl md:gap-14 lg:gap-16">
        You may also like
      </h2>
      <div className="flex flex-col gap-14 md:flex-row md:gap-3 lg:gap-7">
        {others.map((product, index) => (
          <OtherProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};
