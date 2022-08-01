import type { NextApiRequest, NextApiResponse } from "next";
import { CategoryModel, ProductModel } from "../../models";
import { db, data } from "../../database";

type Data = {
  message: string;
};

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return await addProductsToDatabase(res);
    default:
      return res.status(400).json({ message: "That method is not allowed" });
  }
}

const addProductsToDatabase = async (res: NextApiResponse<Data>) => {
  if (process.env.NODE_ENV === "production") {
    return res
      .status(401)
      .json({ message: "Cannot be accessed from production" });
  }

  await db.connect();

  await CategoryModel.deleteMany();
  await CategoryModel.insertMany(data.categories);
  await ProductModel.deleteMany();
  await ProductModel.insertMany(data.products);

  await db.disconnect();

  return res.status(200).json({ message: "Successfull process" });
};
