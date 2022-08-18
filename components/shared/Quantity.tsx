import { FC } from "react";
import Image from "next/image";
import { ComponentProps } from "@/interface";

type quantityFunction = () => void;

interface Props extends ComponentProps {
  quantity: number;
  addOne: quantityFunction;
  removeOne: quantityFunction;
}

export const Quantity: FC<Props> = ({
  addOne,
  quantity,
  removeOne,
  className,
  style,
}) => {
  return (
    <span
      style={style}
      className={`min-h-[3rem] font-bold flex items-center px-4 w-[7.5rem] bg-light-gray justify-between ${className}`}
    >
      <button onClick={removeOne} className="w-4 h-4 grid place-content-center">
        <Image
          width={5}
          height={2}
          src="/assets/shared/desktop/minus-icon.svg"
          alt="Minus Icon"
        />
      </button>
      {quantity}
      <button onClick={addOne} className="w-4 h-4 grid place-content-center">
        <Image
          width={7}
          height={7}
          src="/assets/shared/desktop/plus-icon.svg"
          alt="Minus Icon"
        />
      </button>
    </span>
  );
};
