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
    if (localStorage.cart) {
      const cart = localStorage.cart;
      dispatch(setCart(JSON.parse(cart)));
    } else {
      localStorage.setItem("cart", JSON.stringify(initialCart));
      Cookie.set("cart", JSON.stringify(initialCart));
    }
  });

  return (
    <>
      {children}
      <ToastContainer pauseOnHover={false} autoClose={1000} />
    </>
  );
};
