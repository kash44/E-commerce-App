import mongoose, { Schema, Model, Document } from "mongoose";
import { UserDocument } from "./user.model";

// Things that we create ourselves
export interface SessionDocument extends Document {
  // User on session references userId.
  // Value could be just string but doesn't tell developers where it refers to.
  user: UserDocument["_id"];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

const SessionSchema: Schema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
  },
  { timestamps: true }
);

const Session = mongoose.model<SessionDocument>("Session", SessionSchema);

export default Session;
