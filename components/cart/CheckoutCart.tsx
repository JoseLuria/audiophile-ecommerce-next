import { getCartState, useSelector } from "../../redux";
import { CartElement, CheckoutPrice } from "../";
import { createFetchOptions } from "../../utils";

export const CheckoutCart = () => {
  const { cartList, totalPrice } = useSelector(getCartState);
  const shipping = 50;
  const vat = totalPrice * cartList.length > 0 ? totalPrice * 0.2 : 0;

  const handleCreateOrder = async () => {
    const options = createFetchOptions({ message: "Hello" });
    const response = await fetch("/api/order", options);
    const result = await response.json();

    console.log(result);
  };

  return (
    <div className="w-full py-8 px-6 flex flex-col gap-8 bg-white rounded-lg lg:w-[21.875rem]">
      <p className="text-lg uppercase font-bold">Summary</p>
      <div>
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
      <button
        onClick={handleCreateOrder}
        className="btn-base btn-default w-full"
      >
        Hello
      </button>
    </div>
  );
};
