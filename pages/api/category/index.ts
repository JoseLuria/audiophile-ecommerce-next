import type { NextApiRequest, NextApiResponse } from "next";
import { CategoryInterface } from "@/interface";
import { db } from "@/database";
import { CategoryModel } from "@/models";

type Data =
  | {
      message: string;
    }
  | {
      categories: CategoryInterface[];
    };

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return await getAllCategories(res);
    default:
      return res.status(400).json({ message: "That method is not allowed" });
  }
}

const getAllCategories = async (res: NextApiResponse<Data>) => {
  await db.connect();
  const categories = await CategoryModel.find()
    .lean()
    .select("name href otg description -_id");
  await db.disconnect();

  return res.status(200).json({ categories });
};
