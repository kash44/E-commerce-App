import mongoose, { Schema, Document } from "mongoose";
import { UserDocument } from "./user.model";

export interface CartDocument extends Document {
  userId: UserDocument["_id"];
  products: Array<{ productId: string; quantity: number }>;
}

const CartSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model<CartDocument>("Cart", CartSchema);

export default Cart;
