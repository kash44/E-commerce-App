import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';
import config from "config";

// Things that we create ourselves
export interface UserDocument extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  isAdmin: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// password hashing presave method
UserSchema.pre("save", async function (next) {
  let user = this as UserDocument;

  // only has the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    return next();
  }

  // Additional data
  const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));

  const hash = bcrypt.hashSync(user.password, salt);

  // Replace the password with the hash
  user.password = hash;

  return next();
});

// Used for logging in
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as UserDocument;

  return await bcrypt
    .compare(candidatePassword, user.password)
    .catch((e) => false);
};

// Export the model and return your IUser interface
const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;


