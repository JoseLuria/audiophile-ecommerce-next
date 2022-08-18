import { FC, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { ProductInterface } from "@/interface";
import { Button, Text, Quantity } from "@/components";
import { useResponsiveImages } from "@/hooks";
import { handleFormatPrice, handleFormatProductName } from "@/utils";
import { addToCart, useDispatch } from "@/redux-state";

type Props = Pick<
  ProductInterface,
  "image" | "name" | "newProduct" | "price" | "description" | "slug"
>;

export const ProductHead: FC<Props> = ({
  slug,
  image,
  newProduct,
  name,
  description,
  price,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { width, height, src } = useResponsiveImages(image);
  const dispatch = useDispatch();

  const handleQuantityChange = (value: number) => {
    const newValue = Math.max(quantity + value, 1);
    setQuantity(newValue);
  };

  const addProductToCart = () => {
    const cartProduct = {
      name,
      slug,
      image: image.mobile.src,
      price,
      quantity,
    };
    dispatch(addToCart(cartProduct));
    toast.success(`${handleFormatProductName(name)} added to cart`);
    setQuantity(1);
  };

  return (
    <section className="flex flex-col md:flex-row md:gap-[4.313rem] md:items-center lg:gap-[7.75rem]">
      <span className="flex mb-8 md:mb-0 md:flex-1">
        <Image width={width} height={height} src={src} alt={name} />
      </span>
      <div className="flex flex-col gap-6 max-w-[27.813rem] md:flex-1">
        {newProduct && (
          <Text color="beige" newText>
            New Product
          </Text>
        )}
        <h1 className="uppercase font-bold text-3xl lg:text-[2.5rem] lg:leading-[2.75rem]">
          {name}
        </h1>
        <Text color="black">{description}</Text>
        <p className="text-[1.125] font-bold">{handleFormatPrice(price)}</p>
        <span className="flex flex-wrap gap-4">
          <Quantity
            removeOne={() => handleQuantityChange(-1)}
            addOne={() => handleQuantityChange(1)}
            quantity={quantity}
          />
          <Button action={addProductToCart}>Add to cart</Button>
        </span>
      </div>
    </section>
  );
};
