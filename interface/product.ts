import { ResponsiveImages } from "./";

interface IncludeElement {
  quantity: number;
  item: string;
}

interface OtherProduct {
  slug: string;
}

export interface OtherProductPage {
  otherName: string;
  slug: string;
  otherImage?: ResponsiveImages;
}
export interface ProductGalleryInterface {
  first: ResponsiveImages;
  second: ResponsiveImages;
  third: ResponsiveImages;
}

export interface ProductInterface {
  slug: string;
  name: string;
  otherName: string;
  image: ResponsiveImages;
  otherImage?: ResponsiveImages;
  category: string;
  categoryImage: ResponsiveImages;
  newProduct: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludeElement[];
  gallery: ProductGalleryInterface;
  others: OtherProduct[];
}

type CartProductType = Pick<
  ProductInterface,
  "name" | "slug" | "image" | "price"
>;

export interface CartProductInterface extends CartProductType {
  quantity: number;
}

export interface ProductPageInterface extends ProductInterface {
  others: OtherProductPage[];
}

export type CategoryProductInterface = Pick<
  ProductInterface,
  "slug" | "name" | "categoryImage" | "description" | "newProduct"
>;
