import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import {
  ProductLayout,
  ProductHead,
  ProductFeatures,
  ProductGallery,
  OtherProducts,
} from "../../components";
import { dbProduct } from "../../database";
import { ProductPageInterface } from "../../interface";

interface Props {
  product: ProductPageInterface;
}

const Product: NextPage<Props> = ({ product }) => {
  return (
    <ProductLayout
      title={product.name}
      description={product.description}
      otg={product.image.mobile.src}
    >
      <ProductHead
        slug={product.slug}
        image={product.image}
        newProduct={product.newProduct}
        name={product.name}
        description={product.description}
        price={product.price}
      />
      <ProductFeatures
        features={product.features}
        includes={product.includes}
      />
      <ProductGallery galleryImages={product.gallery} />
      <OtherProducts others={product.others} />
    </ProductLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await dbProduct.getProductPaths();

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const product = await dbProduct.getProductBySlug(slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 86400,
  };
};

export default Product;
