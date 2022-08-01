import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "./";
import cartSlice from "./cartSlice";

const reducer = combineReducers({
  cart: cartSlice,
});

export const store = configureStore({ reducer });

store.subscribe(() => saveToLocalStorage(store.getState().cart));
