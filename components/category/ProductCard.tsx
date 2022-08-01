import { FC } from "react";
import { Button, Text, ResponsiveImage } from "../";
import { CategoryProductInterface } from "../../interface";

interface Props {
  product: CategoryProductInterface;
  index: number;
}

export const ProductCard: FC<Props> = ({ product, index }) => {
  return (
    <section
      className={`w-full lg:flex ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } lg:items-center lg:gap-[7.813rem]`}
    >
      <span className="w-full flex mb-6 md:mb-[3.25rem] lg:mb-0">
        <ResponsiveImage image={product.categoryImage} alt={product.name} />
      </span>
      <div className="w-full max-w-[35.75rem] mx-auto flex flex-col items-center text-center gap-6 lg:items-start lg:text-left">
        {product.newProduct && (
          <Text newText color="beige">
            New Product
          </Text>
        )}
        <h2 className="font-bold w-full max-w-[23rem] text-black uppercase text-[1.75rem] leading-[2.375rem] md:text-[2.5rem] md:leading-[2.75rem]">
          {product.name}
        </h2>
        <Text color="black">{product.description}</Text>
        <Button type="link" href={`/product/${product.slug}`} />
      </div>
    </section>
  );
};
