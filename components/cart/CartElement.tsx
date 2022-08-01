import { FC, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { Quantity } from "../";
import { CartProductInterface } from "../../interface";
import { handleFormatProductName, handleFormatPrice } from "../../utils";
import { useDispatch, changeQuantity, removeFromCart } from "../../redux";

interface Props {
  product: CartProductInterface;
  incremental?: boolean;
}

export const CartElement: FC<Props> = ({ product, incremental }) => {
  const { quantity, slug, name, image, price } = product;

  const dispatch = useDispatch();

  const handleChangeQuantity = (slug: string, value: number) => {
    dispatch(changeQuantity({ slug, value }));
  };

  useEffect(() => {
    if (quantity === 0) {
      dispatch(removeFromCart(slug));
      toast.error(`${handleFormatProductName(name)} removed from cart`);
    }
  }, [quantity, dispatch, name, slug]);

  return (
    <div className="w-full flex h-fit items-center gap-4">
      <span className="w-16 flex">
        <Image
          className="w-full rounded-lg"
          width={image.mobile.width}
          height={image.mobile.height}
          src={image.mobile.src}
          alt={name}
        />
      </span>
      <div className="mr-auto">
        <p className="font-bold uppercase">{handleFormatProductName(name)}</p>
        <p className="font-bold text-black text-opacity-50">
          {handleFormatPrice(price)}
        </p>
      </div>
      {incremental ? (
        <Quantity
          className="px-2 w-24"
          removeOne={() => handleChangeQuantity(slug, -1)}
          addOne={() => handleChangeQuantity(slug, 1)}
          quantity={quantity}
        />
      ) : (
        <p className="font-bold text-black text-opacity-50">{`x${quantity}`}</p>
      )}
    </div>
  );
};
