import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { dbCategory, dbProduct } from "@/database";
import { CategoryInterface, CategoryProductInterface } from "@/interface";
import { CategoryLayout, ProductCard } from "@/components";

interface Props {
  category: CategoryInterface;
  products: CategoryProductInterface[];
}

const Category: NextPage<Props> = ({ category, products }) => {
  return (
    <CategoryLayout
      title={category.name}
      description={category.description}
      otg={category.otg}
    >
      {products.map((product, index) => (
        <ProductCard key={product.slug} index={index} product={product} />
      ))}
    </CategoryLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await dbCategory.getCategoryPaths();

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { href } = params as { href: string };

  const category = await dbCategory.getCategoryByHref(href);

  if (!category) {
    return {
      notFound: true,
    };
  }

  const products = await dbProduct.getCategoryProduct(href);

  return {
    props: {
      category,
      products,
    },
    revalidate: 86400,
  };
};

export default Category;
