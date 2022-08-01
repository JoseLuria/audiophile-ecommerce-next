import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | {
      cart: any;
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
  const { cart } = req.cookies;

  if (!cart) {
    return res.status(400).json({ message: "Invalid Data" });
  }

  const parsedData = JSON.parse(cart);

  res.status(200).json({ cart: parsedData });
};
