import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";

import Product, { ProductDocument } from "../Models/product.model";

export function createProduct(
  input: DocumentDefinition<Omit<ProductDocument, "createdAt" | "updatedAt" | "productId">>
) {
  return Product.create(input);
}

export function findProduct(
  query: FilterQuery<ProductDocument>,
  options: QueryOptions = { lean: true }
) {
  return Product.findOne(query, {}, options);
}

export async function findAllProducts(query?: FilterQuery<ProductDocument>) {
  if (query) {
    return Product.find(query).lean();
  }

  return Product.find().lean();
}

export async function findLastestProduct(query: FilterQuery<ProductDocument>) {
  // return Product.find().sort({ createdAt: -1 }).limit(1);
  return Product.find().sort(query).limit(1);
}

export async function findAllProductsInCatgeory(
  query: FilterQuery<ProductDocument>
) {
  return Product.find(query).lean();
}

export function findAndUpdateProduct(
  query: FilterQuery<ProductDocument>,
  update: UpdateQuery<ProductDocument>,
  options: QueryOptions
) {
  return Product.findOneAndUpdate(query, update, options);
}

export function deleteProduct(query: FilterQuery<ProductDocument>) {
  return Product.deleteOne(query);
}
