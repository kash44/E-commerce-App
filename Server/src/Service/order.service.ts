import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";

import Order, { OrderDocument } from "../Models/order.model";

export function createOrder(
  input: DocumentDefinition<Omit<OrderDocument, "status">>
) {
  return Order.create(input);
}

export function findOrder(
  query: FilterQuery<OrderDocument>,
  options: QueryOptions = { lean: true }
) {
  return Order.findOne(query, {}, options);
}

export function findAndUpdateOrder(
  query: FilterQuery<OrderDocument>,
  update: UpdateQuery<OrderDocument>,
  options: QueryOptions
) {
  return Order.findOneAndUpdate(query, update, options);
}

export function deleteOrder(query: FilterQuery<OrderDocument>) {
  return Order.deleteOne(query);
}

export async function findAllOrders(query?: FilterQuery<OrderDocument>) {
  if (query) {
    return Order.find(query).lean();
  }

  return Order.find().lean();
}

export async function getMonthlyIncome() {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  return Order.aggregate([
    { $match: { createdAt: { $gte: previousMonth } } },
    {
      $project: {
        month: { $month: "$createdAt" },
        sales: "$amount",
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: "$sales" },
      },
    },
  ]);
}
