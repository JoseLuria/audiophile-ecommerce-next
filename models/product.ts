import mongoose, { Schema, model, Model } from "mongoose";
import { ProductInterface } from "../interface";

const imageSchema = new Schema(
  {
    src: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
  { _id: false }
);

const responsiveSchema = new Schema(
  {
    mobile: { type: imageSchema, required: true },
    tablet: { type: imageSchema, required: true },
    desktop: { type: imageSchema, required: true },
  },
  { _id: false }
);

const gallerySchema = new Schema(
  {
    first: { type: responsiveSchema, required: true },
    second: { type: responsiveSchema, required: true },
    third: { type: responsiveSchema, required: true },
  },
  { _id: false }
);

const includesSchema = new Schema(
  {
    quantity: { type: Number, required: true },
    item: { type: String, required: true },
  },
  { _id: false }
);

const othersSchema = new Schema(
  {
    slug: { type: String, required: true },
  },
  { _id: false }
);

const productSchema = new Schema({
  slug: { type: String, required: true },
  name: { type: String, required: true },
  otherName: { type: String, required: true },
  image: { type: responsiveSchema, required: true },
  otherImage: { type: responsiveSchema, required: false },
  category: { type: String, required: true },
  categoryImage: { type: responsiveSchema, required: true },
  newProduct: { type: Boolean, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  features: { type: String, required: true },
  includes: { type: [includesSchema], required: true },
  gallery: { type: gallerySchema, required: true },
  others: { type: [othersSchema], required: true },
});

const ProductModel: Model<ProductInterface> =
  mongoose.models?.Product || model("Product", productSchema);

export default ProductModel;
