import { CartProductInterface } from "@/interface";

export type cookiesType = Partial<{ [key: string]: string }>;

export const parseCookies = (cookies: cookiesType) => {
  const { cartList: cart, totalPrice: total } = cookies;

  const cartList: CartProductInterface[] = JSON.parse(cart!);
  const totalPrice: number = JSON.parse(total!);

  return {
    cartList,
    totalPrice,
  };
};
