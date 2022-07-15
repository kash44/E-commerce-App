import { Request, Response } from "express";
import { get } from "lodash";
import logger from "../Utils/logger";
import {
  createCart,
  findCart,
  findAllCarts,
  findAndUpdateCart,
  deleteCart,
} from "../Service/cart.service";
import {
  CreateCartInput,
  DeleteCartInput,
  GetCartInput,
  UpdateCartInput,
} from "../Schema/cart.schema";

export async function createCartHandler(
  req: Request<{}, {}, CreateCartInput["body"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const { products } = req.body;
  try {
    const product = await createCart({ products, userId: userId });
    return res.send(product);
  } catch (error: any) {
    return res.status(409).send(error.message);
  }
}

export async function updateCartHandler(
  req: Request<UpdateCartInput["params"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const cartId = req.params.cartId;
  const update = req.body;
  const cart = await findCart({ _id: cartId });

  // If cart doesnt exist
  if (!cart) {
    return res.status(403).json("Cart does not exist");
  }

  // User must match owner of cart(cart.userId)
  if (String(cart.userId) !== userId) {
    return res.sendStatus(403);
  }

  // validation cartid must match param id
  if (String(cart._id) !== cartId) {
    return res.status(403).json("CartId and paramId must match");
  }

  const updatedCart = await findAndUpdateCart({ _id: cartId }, update, {
    new: true,
  });

  return res.send(updatedCart);
}

export async function getAllCartsHandler(
  req: Request<GetCartInput["params"]>,
  res: Response
) {
  const carts = await findAllCarts();

  if (!carts) {
    console.log("no cart");
    return res.sendStatus(404);
  }

  return res.status(200).json({ carts });
}

export async function getCartHandler(
  req: Request<GetCartInput["params"]>,
  res: Response
) {
  try {
    console.log("hello");
    const cartId = req.params.cartId;
    const cart = await findCart({ _id: cartId });

    if (!cart) {
      return res.sendStatus(404).json("cart not found");
    }

    return res.send(cart);
  } catch (error: any) {
    return res.status(409).send(error.message);
  }
}

export async function deleteCartHandler(
  req: Request<DeleteCartInput["params"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const cartId = req.params.cartId;
  const cart = await findCart({ _id: cartId });

  if (!cart) {
    return res.sendStatus(404);
  }

  if (String(cart.userId) !== userId) {
    return res.sendStatus(403);
  }

  await deleteCart({ _id: cartId });

  return res.status(200).json("Product sucessfully deleted!");
}
