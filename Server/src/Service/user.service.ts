import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import { Request, Response, NextFunction } from "express";
import { omit } from "lodash";
import User, { UserDocument } from "../Models/user.model";

export async function createUser(
  input: DocumentDefinition<
    Omit<
      UserDocument,
      "createdAt" | "updatedAt" | "comparePassword" | "isAdmin"
    >
  >
) {
  try {
    const user = await User.create(input);
    return omit(user.toJSON(), "password");
  } catch (error: any) {
    throw new Error(error);
  }
}

export function findAndUpdateUser(
  query: FilterQuery<UserDocument>,
  update: UpdateQuery<UserDocument>,
  options: QueryOptions
) {
  return User.findOneAndUpdate(query, update, options);
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return User.findOne(query).lean();
}

export async function findAllUsers() {
  return User.find().lean();
}

// export async function findAllUsers(req : Request) {
//   const query = req.query.new;
//   try {
//     const users = query ? await User.find().sort({ _id: -1 }).limit(1);
//     return User.find().lean();
//   } catch (error: any) {
//   }
// }

export async function findUserByEmail(query: FilterQuery<UserDocument>) {
  return User.findOne(query).lean();
}

export async function validatePassword({
  email,
  password,
}: {
  email: UserDocument["email"];
  password: string;
}) {
  const user = await User.findOne({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return omit(user.toJSON(), "password");
}

export function deleteUser(query: FilterQuery<UserDocument>) {
  return User.findByIdAndDelete(query);
}

export function getUserStats() {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  return User.aggregate([
    { $match: { createdAt: { $gte: lastYear } } },
    {
      $project: {
        month: { $month: "$createdAt" },
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: 1 },
      },
    },
  ]);
}
