import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProductInterface } from "../interface";

export interface cartStateInterface {
  cartList: CartProductInterface[];
  totalPrice: number;
}

const initialState: cartStateInterface = {
  cartList: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state: cartStateInterface,
      action: PayloadAction<CartProductInterface>
    ) => {
      const isProductAlreadyInCart = state.cartList.find(
        ({ slug }) => slug === action.payload.slug
      );

      if (!isProductAlreadyInCart) {
        state.cartList.push(action.payload);
      } else {
        isProductAlreadyInCart.quantity += action.payload.quantity;
      }

      state.totalPrice += action.payload.price * action.payload.quantity;
    },

    changeQuantity: (
      state: cartStateInterface,
      action: PayloadAction<{ slug: string; value: number }>
    ) => {
      const productToChange = state.cartList.find(
        ({ slug }) => slug === action.payload.slug
      );

      if (productToChange) {
        productToChange.quantity += action.payload.value;
        state.totalPrice += action.payload.value * productToChange.price;
      }
    },

    removeFromCart: (
      state: cartStateInterface,
      action: PayloadAction<string>
    ) => {
      state.cartList = state.cartList.filter(
        ({ slug }) => slug !== action.payload
      );
    },

    removeAll: (state: cartStateInterface) => {
      state.cartList = [];
      state.totalPrice = 0;
    },

    setCart: (
      state: cartStateInterface,
      action: PayloadAction<cartStateInterface>
    ) => {
      state.cartList = action.payload.cartList;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { addToCart, changeQuantity, removeAll, removeFromCart, setCart } =
  cartSlice.actions;

export default cartSlice.reducer;
