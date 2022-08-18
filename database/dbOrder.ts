import { db } from "@/database";
import { ProductModel } from "@/models";
import { CartProductInterface } from "@/interface";

export const checkPrice = async (cart: CartProductInterface[]) => {
  if (cart.length <= 0) {
    return undefined;
  }

  const slugs = cart.map(({ slug }) => slug);

  await db.connect();
  const productsResults = await ProductModel.find({ slug: { $in: slugs } })
    .select("-_id price slug")
    .lean();
  await db.disconnect();

  const productsPrices = productsResults.map(({ slug, price }) => {
    const cartProduct = cart.find((product) => product.slug === slug);

    if (!cartProduct) {
      return { slug, total: 0 };
    }

    const total = price * cartProduct.quantity;

    return { slug, total };
  });

  if (productsPrices.length <= 0) {
    return undefined;
  }

  const totalPrices = productsPrices.reduce(
    (prev, curr) => prev + curr.total,
    0
  );

  return totalPrices;
};
