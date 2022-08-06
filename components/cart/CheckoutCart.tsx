import { FC, ReactNode } from "react";
import { getCartState, useSelector } from "../../redux";
import { CartElement, CheckoutPrice } from "../";

interface Props {
  children: ReactNode;
}

export const CheckoutCart: FC<Props> = ({ children }) => {
  const { cartList, totalPrice } = useSelector(getCartState);
  const shipping = 50;
  const vat = totalPrice * cartList.length > 0 ? totalPrice * 0.2 : 0;

  return (
    <div className="w-full h-fit py-8 px-6 flex flex-col gap-8 bg-white rounded-lg lg:w-[21.875rem]">
      <p className="text-lg uppercase font-bold">Summary</p>
      <div className="flex flex-col gap-6">
        {cartList.map((product) => (
          <CartElement key={product.slug} product={product} />
        ))}
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <CheckoutPrice title="Total" price={totalPrice} />
          <CheckoutPrice title="Shipping" price={shipping} />
          <CheckoutPrice title="Vat (Included)" price={vat} />
          <span className="mt-4">
            <CheckoutPrice
              className="text-beige"
              title="Grand total"
              price={shipping + totalPrice}
            />
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};
