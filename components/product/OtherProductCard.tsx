import { FC } from "react";
import { Button, ResponsiveImage } from "@/components";
import { OtherProductPage } from "@/interface";

interface Props {
  product: OtherProductPage;
}

export const OtherProductCard: FC<Props> = ({ product }) => {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <ResponsiveImage
        className="rounded-lg"
        image={product.otherImage!}
        alt={product.otherName}
      />
      <h3 className="text-2xl text-center uppercase font-bold">
        {product.otherName}
      </h3>
      <Button href={`/product/${product.slug}`} type="link" />
    </div>
  );
};
