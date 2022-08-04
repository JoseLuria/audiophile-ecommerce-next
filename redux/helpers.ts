import Cookie from "js-cookie";
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";
import { cartStateInterface, store } from "./";

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const saveToLocalStorage = (state: cartStateInterface) => {
  const cartList = JSON.stringify(state.cartList)
  const totalPrice = JSON.stringify(state.totalPrice)

  localStorage.cartList = cartList
  localStorage.totalPrice = totalPrice
  Cookie.set("cartList", cartList);
  Cookie.set("totalPrice", totalPrice)
};

export const getCartState = (state: { cart: cartStateInterface }) => state.cart;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
