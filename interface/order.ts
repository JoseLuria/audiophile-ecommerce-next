import { DirectionInterface } from "./";

export interface OrderBodyInterface {
  direction: DirectionInterface;
  payMethod: "cash" | "paypal";
}
