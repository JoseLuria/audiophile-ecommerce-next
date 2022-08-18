import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";
import { cartStateInterface, store } from "@/redux-state";

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const getCartState = (state: { cart: cartStateInterface }) => state.cart;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
