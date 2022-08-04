import type { NextApiRequest, NextApiResponse } from "next";
import { yupCart, yupBody } from "../../../validations";
import { OrderBodyInterface, CartProductInterface } from "../../../interface";
import { dbOrder } from "../../../database";
import { parseCookies } from "../../../utils";
import { Email } from "../../../email";

type Data =
  | {
      message: string;
    }
  | {
      user: string;
      cartList: CartProductInterface[];
      grandTotal: number;
    };

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return await createOrder(req, res);
    default:
      return res.status(400).json({ message: "That method is not allowed" });
  }
}

const createOrder = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    await yupCart.validate(req.cookies);
    await yupBody.validate(req.body);

    const { direction, payMethod } = req.body as OrderBodyInterface;
    const { cartList, totalPrice } = parseCookies(req.cookies);

    const dbTotalPrices = await dbOrder.checkPrice(cartList);

    if (dbTotalPrices !== totalPrice) {
      return res.status(400).json({ message: "Invalid price validation" });
    }

    const shipping = Number(process.env.NEXT_SHIPING) || 50;
    const grandTotal = totalPrice + shipping;

    if (payMethod === "paypal") {
      console.log("Using Paypal");
    }

    await new Email(direction.email).send(cartList, grandTotal);

    res.status(200).json({
      user: direction.name,
      cartList,
      grandTotal,
    });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ message: "Invalid Data" });
  }
};
