import type { NextApiRequest, NextApiResponse } from "next";
import { CategoryInterface } from "@/interface";
import { db } from "@/database";
import { CategoryModel } from "@/models";

type Data =
  | {
      message: string;
    }
  | {
      category: CategoryInterface;
    };

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return await getCategoryByHref(req, res);
    default:
      return res.status(400).json({ message: "That method is not allowed" });
  }
}

const getCategoryByHref = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { href } = req.query;

  await db.connect();
  const category = await CategoryModel.findOne({ href })
    .lean()
    .select("name href otg description -_id");
  await db.disconnect();

  if (!category) {
    return res.status(400).json({ message: "Category not found" });
  }

  return res.status(200).json({ category });
};
