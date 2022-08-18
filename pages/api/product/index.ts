import type { NextApiRequest, NextApiResponse } from "next";
import { ProductInterface } from "@/interface";
import { db } from "@/database";
import { ProductModel } from "@/models";

type Data =
  | {
      message: string;
    }
  | {
      products: ProductInterface[];
    };

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return await getAllProducts(req, res);
    default:
      return res.status(400).json({ message: "That method is not allowed" });
  }
}

const getAllProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { category } = req.query;

  await db.connect();
  if (!category) {
    const products = await ProductModel.find().lean().select("-_id -__v");
    await db.disconnect();
    return res.status(200).json({ products });
  }

  const products = await ProductModel.find({ category })
    .lean()
    .select("-_id -__v");
  await db.disconnect();

  if (products.length < 1) {
    return res.status(400).json({ message: "Invalid category query" });
  }

  return res.status(200).json({ products });
};
