import type { NextApiRequest, NextApiResponse } from "next";
import { yupCart, yupOrder } from "@/validations";
import { OrderInterface, OrderData } from "@/interface";
import { dbOrder, db } from "@/database";
import { parseCookies } from "@/utils";
import { Email } from "@/email";
import { OrderModel } from "@/models";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<OrderData>
) {
  switch (req.method) {
    case "GET":
      return await getAllOrders(res);
    case "POST":
      return await createOrder(req, res);
    default:
      return res.status(400).json({ message: "That method is not allowed" });
  }
}

const getAllOrders = async (res: NextApiResponse<OrderData>) => {
  await db.connect();
  const orders = await OrderModel.find().select("-_id -__v").lean();
  await db.disconnect();

  res.status(200).json({ orders });
};

const createOrder = async (
  req: NextApiRequest,
  res: NextApiResponse<OrderData>
) => {
  try {
    await yupCart.validate(req.cookies);
    await yupOrder.validate(req.body);

    const { email, name, payMethod } = req.body as OrderInterface;
    const { cartList, totalPrice } = parseCookies(req.cookies);

    const dbTotalPrices = await dbOrder.checkPrice(cartList);
    if (dbTotalPrices !== totalPrice) {
      return res.status(400).json({ message: "Invalid price validation" });
    }

    const shipping = Number(process.env.NEXT_SHIPING) || 50;
    const grandTotal = totalPrice + shipping;
    await new Email(email).send(cartList, grandTotal);

    await db.connect();
    const newOrder = new OrderModel({
      user: name,
      cartList,
      grandTotal,
      payMethod,
    });

    const order = await newOrder.save({ validateBeforeSave: true });
    await db.disconnect();
    res.status(200).json(order);
  } catch (error) {
    await db.disconnect();
    res.status(400).json({ message: "Invalid request data" });
  }
};
