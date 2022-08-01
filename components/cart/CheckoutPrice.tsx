import { handleFormatPrice } from "../../utils";
import { FC } from "react";

interface Props {
  className?: string;
  title: string;
  price: number;
}

export const CheckoutPrice: FC<Props> = ({ className, title, price }) => {
  return (
    <div className="w-full flex justify-between">
      <p className="uppercase text-black text-opacity-50">{title}</p>
      <p className={`font-bold ${className}`}>{handleFormatPrice(price)}</p>
    </div>
  );
};
