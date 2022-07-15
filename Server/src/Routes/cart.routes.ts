import { Router } from "express";
import validateRequest from "../Middleware/validateRequest";
import requiresUser from "../Middleware/requiresUser";
import {
  createCartHandler,
  updateCartHandler,
  getAllCartsHandler,
  getCartHandler,
  deleteCartHandler,
} from "../Controllers/cart.controller";
import {
  createCartSchema,
  updateCartSchema,
  getCartSchema,
  deleteCartSchema,
} from "../Schema/cart.schema";

const router: Router = Router();

// Create a cart
router.post(
  "/",
  [requiresUser, validateRequest(createCartSchema)],
  createCartHandler
);

// Update a cart
router.put(
  "/:cartId",
  requiresUser,
  validateRequest(updateCartSchema),
  updateCartHandler
);

// Get a Cart
router.get(
  "/:cartId",
  [requiresUser, validateRequest(getCartSchema)],
  getCartHandler
);

// Get all carts - Admin?
router.get("/", getAllCartsHandler);

// Delete a cart
router.delete(
  "/:cartId",
  [requiresUser, validateRequest(deleteCartSchema)],
  deleteCartHandler
);

module.exports = router;
