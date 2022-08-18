import { db } from "@/database";
import { ProductModel } from "@/models";

export const getCategoryProduct = async (category: string) => {
  await db.connect();
  const products = await ProductModel.find({ category })
    .lean()
    .select("slug name categoryImage description newProduct -_id");

  await db.disconnect();

  return JSON.parse(JSON.stringify(products));
};

export const getProductPaths = async () => {
  await db.connect();
  const products = await ProductModel.find().lean().select("-_id -__v");
  await db.disconnect();

  const productsPaths = products.map(({ slug }) => {
    return {
      params: {
        slug,
      },
    };
  });

  return JSON.parse(JSON.stringify(productsPaths));
};

export const getProductBySlug = async (slug: string) => {
  await db.connect();
  const findProduct = await ProductModel.findOne({ slug })
    .lean()
    .select("-_id");

  if (!findProduct) {
    await db.disconnect();

    return undefined;
  }

  const slugs = findProduct.others.map(({ slug }) => slug);

  const others = await ProductModel.find({ slug: { $in: slugs } })
    .lean()
    .select("-_id slug otherName otherImage");

  await db.disconnect();

  const product = { ...findProduct, others };

  return JSON.parse(JSON.stringify(product));
};
