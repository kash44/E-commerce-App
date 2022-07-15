import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";

import Cart, { CartDocument } from "../Models/cart.model";

export function createCart(input: DocumentDefinition<CartDocument>) {
  return Cart.create(input);
}

export function findCart(
  query: FilterQuery<CartDocument>,
  options: QueryOptions = { lean: true }
) {
  return Cart.findOne(query, {}, options);
}

export function findAndUpdateCart(
  query: FilterQuery<CartDocument>,
  update: UpdateQuery<CartDocument>,
  options: QueryOptions
) {
  return Cart.findOneAndUpdate(query, update, options);
}

export async function findAllCarts(query?: FilterQuery<CartDocument>) {
  if (query) {
    return Cart.find(query).lean();
  }

  return Cart.find().lean();
}

export function deleteCart(query: FilterQuery<CartDocument>) {
  return Cart.deleteOne(query);
}
