import Cookie from "js-cookie";
import { cartStateInterface } from "@/redux-state";

export const saveToLocalStorage = (state: cartStateInterface) => {
  const cartList = JSON.stringify(state.cartList);
  const totalPrice = JSON.stringify(state.totalPrice);

  localStorage.cartList = cartList;
  localStorage.totalPrice = totalPrice;
  Cookie.set("cartList", cartList);
  Cookie.set("totalPrice", totalPrice);
};
