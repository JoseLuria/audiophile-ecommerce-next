import { db } from ".";
import { CategoryModel } from "../models";

export const getCategoryPaths = async () => {
  await db.connect();

  const categories = await CategoryModel.find();

  await db.disconnect();

  const categoriesPaths = categories.map(({ href }) => {
    return {
      params: {
        href,
      },
    };
  });

  return categoriesPaths;
};

export const getCategoryByHref = async (href: string) => {
  await db.connect();

  const category = await CategoryModel.findOne({ href }).lean().select("-_id");

  await db.disconnect();

  if (!category) {
    return undefined;
  }

  return JSON.parse(JSON.stringify(category));
};
