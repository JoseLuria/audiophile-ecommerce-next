import { FC } from "react";
import { useRouter } from "next/router";
import { ModalContainer, Text, Button, CartElement } from "../";
import { useSelector, useDispatch, getCartState, removeAll } from "../../redux";
import { handleFormatPrice } from "../../utils";
import { toast } from "react-toastify";

interface Props {
  action: () => void;
}

export const NavCart: FC<Props> = ({ action }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { cartList, totalPrice } = useSelector(getCartState);

  const handleRedirect = (redirect: string) => {
    router.push(redirect);
    document.body.classList.remove("no-scroll");
  };

  const handleRemoveAll = () => {
    dispatch(removeAll());
    toast.error("Removed all products");
  };

  return (
    <ModalContainer action={action}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[23.563rem] flex flex-col gap-6 rounded-lg mt-6 ml-auto bg-white px-7 py-8 h-[30.5rem] lg:mt-8"
      >
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold uppercase">{`cart (${cartList.length})`}</p>
          <button
            onClick={handleRemoveAll}
            className="text-black text-opacity-50 text-[0.938rem] underline"
          >
            Remove all
          </button>
        </div>
        <div className="grow flex overflow-auto scrollbar-hide">
          {cartList.length <= 0 ? (
            <Text className="m-auto" color="black">
              Yor cart is empty
            </Text>
          ) : (
            <div className="w-full flex flex-col gap-6">
              {cartList.map((product) => (
                <CartElement product={product} key={product.slug} incremental />
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black text-opacity-50 text-[0.938rem] uppercase">
            Total
          </p>
          <p className="text-lg font-bold">{handleFormatPrice(totalPrice)}</p>
        </div>
        <Button
          action={() => handleRedirect("/checkout")}
          disabled={cartList.length <= 0}
          full
        >
          Checkout
        </Button>
      </div>
    </ModalContainer>
  );
};
