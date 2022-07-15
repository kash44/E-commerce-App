import mongoose from "mongoose";
import { Schema, Document } from "mongoose";
import { UserDocument } from "./user.model";

export interface OrderDocument extends Document {
  userId: UserDocument["_id"];
  products: Array<{ productId: string; quantity: number }>;
  amount: number;
  address: Object;
  status: string;
}

const OrderSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const Order = mongoose.model<OrderDocument>("Order", OrderSchema);
export default Order;
