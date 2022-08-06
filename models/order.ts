import mongoose, { Schema, model, Model } from "mongoose";
import { OrderModelInterface } from "../interface";

const cartProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);

const orderSchema = new Schema({
  user: { type: String, required: true },
  cartList: { type: [cartProductSchema], required: true },
  grandTotal: { type: Number, required: true },
  payMethod: { type: String, required: true },
});

const OrderModel: Model<OrderModelInterface> =
  mongoose.models?.Order || model("Order", orderSchema);

export default OrderModel;
