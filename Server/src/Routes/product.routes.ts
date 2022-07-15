import { Router } from "express";
import validateRequest from "../Middleware/validateRequest";
import requiresUser from "../Middleware/requiresUser";

import {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  deleteProductSchema,
} from "../Schema/product.schema";

import {
  createProductHandler,
  updateProductHandler,
  getProductHandler,
  getAllProductsHandler,
  deleteProductHandler,
} from "../Controllers/product.controller";

const router: Router = Router();

// Create a product
router.post(
  "/",
  [requiresUser, validateRequest(createProductSchema)],
  createProductHandler
);

// Update a product
router.put(
  "/:productId",
  [requiresUser, validateRequest(updateProductSchema)],
  updateProductHandler 
);

// Get all products
router.get("/", getAllProductsHandler);

// Get a product
router.get("/:productId", validateRequest(getProductSchema), getProductHandler);


// Delete a post
router.delete(
  "/:productId",
  [requiresUser, validateRequest(deleteProductSchema)],
  deleteProductHandler
);

module.exports = router;
