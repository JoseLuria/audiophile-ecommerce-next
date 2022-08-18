import { DirectionInterface, CartProductInterface } from "@/interface";

export interface OrderInterface extends DirectionInterface {
  payMethod: "cash" | "e-money";
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

export interface OrderModelInterface {
  user: string;
  cartList: CartProductInterface[];
  grandTotal: number;
  payMethod: string;
}

export type OrderData =
  | { message: string }
  | OrderModelInterface
  | { orders: OrderModelInterface[] };
