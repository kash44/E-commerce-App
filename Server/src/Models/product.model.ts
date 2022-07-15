import mongoose, { Schema } from "mongoose";
import { UserDocument } from "./user.model";
import { customAlphabet } from "nanoid";
import { boolean } from "yup";

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

export interface ProductDocument extends mongoose.Document {
  user: UserDocument["_id"];
  title: string;
  description: string;
  image: string;
  categories: Array<string>;
  size: Array<string>;
  colour: Array<string>;
  price: number;
  inStock: boolean;
  productId: string;  
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true},
    image: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    colour: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    productId: { type: String,  required: true, unique: true, default: () => `product_${nanoid()}`}
  },
  { timestamps: true }
);

const Product = mongoose.model<ProductDocument>("Product", ProductSchema);

export default Product;
