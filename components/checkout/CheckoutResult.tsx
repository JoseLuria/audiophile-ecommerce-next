import { FC } from "react";
import Image from "next/image";
import { Text, Button } from "../";
import { handleFormatPrice, handleFormatProductName } from "../../utils";
import { useDispatch, removeAll } from "../../redux";

interface Props {
  data?: any;
}

export const CheckoutResult: FC<Props> = ({ data }) => {
  const dispatch = useDispatch();

  const handleCloseResult = () => {
    document.body.classList.remove("no-scroll");
    dispatch(removeAll());
  };

  return (
    <div className="bg-black w-full h-full flex bg-opacity-40 fixed z-[2] top-0 left-0 px-6">
      {data ? (
        <div className="m-auto w-full max-w-[33.75rem] bg-white rounded-lg p-8 flex flex-col gap-6 items-start md:p-12">
          {data.message ? (
            <>
              <h2 className="uppercase font-bold text-2xl leading-[1.625rem] md:text-[2rem] md:leading-9">
                Error
              </h2>
              <Text className="text-red text-opacity-100">
                An error occurred while processing your order.
                <br />
                Error message: {data.message}.
              </Text>
              <Button action={handleCloseResult} href="/" type="link" full>
                Back to home
              </Button>
            </>
          ) : (
            <>
              <Image
                src="/assets/shared/desktop/check-icon.svg"
                width={64}
                height={64}
                alt="Check Icon"
              />
              <h2 className="uppercase font-bold text-2xl leading-[1.625rem] md:text-[2rem] md:leading-9">
                Thank you
                <br />
                for your order
              </h2>
              <Text color="black">
                You will receive an email confirmation shortly.
              </Text>

              <div className="w-full md:grid md:grid-cols-2">
                <div className="w-full bg-light-gray p-6 rounded-t-lg md:rounded-r-none md:rounded-l-lg">
                  <div className="flex w-full relative items-center justify-center">
                    <span className="absolute left-0">
                      <Image
                        width={50}
                        height={50}
                        src={data.cartList[0].image}
                        alt={data.cartList[0].name}
                      />
                    </span>
                    <p className="font-bold uppercase">
                      {handleFormatProductName(data.cartList[0].name)}
                      <br />
                      <span className="text-opacity-50 text-black">
                        {handleFormatPrice(data.cartList[0].price)}
                      </span>
                    </p>
                    <p className="absolute right-0 font-bold text-black text-opacity-50">
                      x{data.cartList[0].quantity}
                    </p>
                  </div>
                  {data.cartList.length > 1 && (
                    <div className="w-full text-center border-t-[1px] mt-3 border-opacity-10 border-black">
                      <p className="text-xs mt-3 font-bold text-black text-opacity-50">
                        and {data.cartList.length - 1} other item(s)
                      </p>
                    </div>
                  )}
                </div>
                <div className="bg-black flex flex-col justify-center text-white px-6 py-4 rounded-b-lg md:rounded-l-none md:rounded-r-lg">
                  <p className="mb-2 uppercase text-white text-opacity-50 font-medium">
                    Grand total
                  </p>
                  <p className="font-bold">
                    {handleFormatPrice(data.grandTotal)}
                  </p>
                </div>
              </div>

              <Button action={handleCloseResult} href="/" type="link" full>
                Back to home
              </Button>
            </>
          )}
        </div>
      ) : (
        <div className="w-20 h-20 m-auto border-[0.75rem] border-beige border-t-light-beige rounded-full animate-spin"></div>
      )}
    </div>
  );
};
