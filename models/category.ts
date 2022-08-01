import mongoose, { Schema, model, Model } from "mongoose";
import { CategoryInterface } from "../interface";

const categorySchema = new Schema({
  name: { type: String, required: true },
  href: { type: String, required: true },
  otg: { type: String, required: true },
  description: { type: String, required: true },
});

const CategoryModel: Model<CategoryInterface> =
  mongoose.models?.Category || model("Category", categorySchema);

export default CategoryModel;
