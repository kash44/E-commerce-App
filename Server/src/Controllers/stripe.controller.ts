import { Request, Response } from "express";
import { createCharge } from "../Service/stripe.service";
import { get } from "lodash";
import Stripe from "stripe";
import { createOrder } from "../Service/order.service";

export async function stripePayment(req: Request, res: Response) {
  const user = get(req, "user._id");
  const { amount, source, products } = req.body;
  const charge = await createCharge(amount, source);

  const newOrder = {
    userId: user as string,
    products,
    amount: charge.amount,
    address: charge.billing_details.address as Stripe.Address,
  };

  const order = await createOrder(newOrder);

  res.status(200).json({
    status: "success",
    order,
  });
}
