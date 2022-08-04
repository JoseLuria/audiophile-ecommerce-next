import Cookie from "js-cookie";
import { FC, useEffect, ReactNode } from "react";
import { setCart } from "../../redux";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

interface AppWrapperInterface {
  children: ReactNode;
}

export const AppWrapper: FC<AppWrapperInterface> = ({ children }) => {
  const dispatch = useDispatch();
  const initialCart = { cartList: [], totalPrice: 0 };

  useEffect(() => {
    if (localStorage.cartList && localStorage.totalPrice) {
      const cartList = JSON.parse(localStorage.cartList)
      const totalPrice = JSON.parse(localStorage.totalPrice)
      
      const cart = {
        cartList,
        totalPrice
      }

      dispatch(setCart(cart));
    } else {
      const cartList = JSON.stringify(initialCart.cartList)
      const totalPrice = JSON.stringify(initialCart.totalPrice)

      localStorage.setItem("cartList", cartList);
      localStorage.setItem("totalPrice", totalPrice)
      Cookie.set("cartList", cartList);
      Cookie.set("totalPrice", totalPrice)
    }
  });

  return (
    <>
      {children}
      <ToastContainer pauseOnHover={false} autoClose={1000} />
    </>
  );
};
