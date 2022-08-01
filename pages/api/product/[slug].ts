import type { NextApiRequest, NextApiResponse } from "next";
import { ProductInterface } from "../../../interface";
import { db } from "../../../database";
import { ProductModel } from "../../../models";

type Data =
  | {
      message: string;
    }
  | {
      product: ProductInterface;
    };

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return await getProductBySlug(req, res);
    default:
      return res.status(400).json({ message: "That method is not allowed" });
  }
}

const getProductBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { slug } = req.query;

  await db.connect();
  const product = await ProductModel.findOne({ slug })
    .lean()
    .select("-_id -__v");
  await db.disconnect();

  if (!product) {
    return res.status(400).json({ message: "Product not found" });
  }

  return res.status(200).json({ product });
};
