import { Request, Response } from "express";
import { get } from "lodash";
import logger from "../Utils/logger";
import {
  createOrder,
  findOrder,
  findAllOrders,
  findAndUpdateOrder,
  deleteOrder,
  getMonthlyIncome,
} from "../Service/order.service";
import {
  CreateOrderInput,
  UpdateOrderInput,
  DeleteOrderInput,
  GetOrderInput,
} from "../Schema/order.schema";

export async function createOrderHandler(
  req: Request<{}, {}, CreateOrderInput["body"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const { products, amount, address } = req.body;
  try {
    const order = await createOrder({
      products,
      amount,
      address,
      userId: userId,
    });

    return res.send(order);
  } catch (error: any) {
    return res.status(409).send(error.message);
  }
}

export async function updateOrderHandler(
  req: Request<UpdateOrderInput["params"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const orderId = req.params.orderId;
  const update = req.body;
  const order = await findOrder({ _id: orderId });

  // If cart doesnt exist
  if (!order) {
    return res.status(403).json("Cart does not exist");
  }

  // User must match owner of cart(cart.userId)
  if (String(order.userId) !== userId) {
    return res.sendStatus(403);
  }

  // validation cartid must match param id
  if (String(order._id) !== orderId) {
    return res.status(403).json("orderId and paramId must match");
  }

  const updatedCart = await findAndUpdateOrder({ _id: orderId }, update, {
    new: true,
  });

  return res.send(updatedCart);
}

export async function deleteOrderHandler(
  req: Request<DeleteOrderInput["params"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const orderId = req.params.orderId;
  const order = await findOrder({ _id: orderId });
  console.log("order", order);

  if (!order) {
    return res.sendStatus(404);
  }

  // User must match owner of cart(cart.userId)
  if (String(order.userId) !== userId) {
    return res.sendStatus(403);
  }

  // validation cartid must match param id
  if (String(order._id) !== orderId) {
    return res.status(403).json("orderId and paramId must match");
  }

  await deleteOrder({ _id: orderId });

  return res.status(200).json("Product sucessfully deleted!");
}

export async function getOrderHandler(
  req: Request<GetOrderInput["params"]>,
  res: Response
) {
  try {
    const orderId = req.params.orderId;
    const order = await findOrder({ _id: orderId });

    if (!order) {
      return res.sendStatus(404).json("Product not found");
    }

    return res.send(order);
  } catch (error: any) {
    return res.status(409).send(error.message);
  }
}

export async function getAllOrdersHandler(req: Request, res: Response) {
  const carts = await findAllOrders();

  if (!carts) {
    console.log("no cart");
    return res.sendStatus(404);
  }

  return res.status(200).json({ carts });
}

// Doesn't work
export async function getMonthlyIncomeHandler(req: Request, res: Response) {
  try {
    const income = await getMonthlyIncome();
    console.log(income);
    return res.send(income);
  } catch (error: any) {
    return res.status(409).send(error.message);
  }
}
