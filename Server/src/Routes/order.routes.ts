import { Router } from "express";
import validateRequest from "../Middleware/validateRequest";
import requiresUser from "../Middleware/requiresUser";
import {
  createOrderHandler,
  updateOrderHandler,
  getAllOrdersHandler,
  getOrderHandler,
  deleteOrderHandler,
  getMonthlyIncomeHandler,
} from "../Controllers/order.controller";
import {
  createOrderSchema,
  updateOrderSchema,
  getOrderSchema,
  deleteOrderSchema,
} from "../Schema/order.schema";

const router: Router = Router();

// Create a cart
router.post(
  "/",
  [requiresUser, validateRequest(createOrderSchema)],
  createOrderHandler
);

// Update a product
router.put(
  "/:orderId",
  [requiresUser, validateRequest(updateOrderSchema)],
  updateOrderHandler
);

// Delete a cart
router.delete(
  "/:orderId",
  [requiresUser, validateRequest(deleteOrderSchema)],
  deleteOrderHandler
);

// Get a Cart
router.get(
  "/:orderId",
  [requiresUser, validateRequest(getOrderSchema)],
  getOrderHandler
);

// Get all products
router.get("/", getAllOrdersHandler);

// Get monthly income 
router.get("/income", requiresUser, getMonthlyIncomeHandler)

module.exports = router;
