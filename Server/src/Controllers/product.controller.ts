import { Request, Response } from "express";
import { get } from "lodash";
import logger from "../Utils/logger";
import {
  createProduct,
  findProduct,
  findAllProducts,
  findAllProductsInCatgeory,
  findLastestProduct,
  findAndUpdateProduct,
  deleteProduct,
} from "../Service/product.service";
import {
  CreateProductInput,
  UpdateProductInput,
  GetProductInput,
  getProductSchema,
  // GetAllProducts,
} from "../Schema/product.schema";

export async function createProductHandler(
  req: Request<{}, {}, CreateProductInput["body"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const body = req.body;
  try {
    const product = await createProduct({ ...body, user: userId });
    return res.send(product);
  } catch (error: any) {
    console.log("createProductHandler");
    return res.status(409).send(error.message);
  }
}

export async function updateProductHandler(
  req: Request<UpdateProductInput["params"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const productId = req.params.productId;
  const update = req.body;
  const product = await findProduct({ productId });
  console.log(product)

  if (!product) {
    return res.sendStatus(404);
  }

  if (String(product.user) !== userId) {
    return res.sendStatus(403);
  }

  const updatedProduct = await findAndUpdateProduct({ productId }, update, {
    new: true,
  });

  return res.send(updatedProduct);
}

export async function getProductHandler(
  req: Request<GetProductInput["params"]>,
  res: Response
) {
  try {
    const productId = req.params.productId;
    const product = await findProduct({ _id: productId });
    console.log('product', product)

    if (!product) {
      return res.sendStatus(404).json('Product not found');
    }

    return res.send(product);
  } catch (error: any) {
    console.log("getProductHandler");
    return res.status(409).send(error.message);
  }
}

export async function getAllProductsHandler(
  req: Request,
  res: Response
) {
  const category = req.query.category
  const latestProduct = req.query.new;
  let products;
  if (latestProduct) {
    // wont work
    products = await findLastestProduct({ createdAt: -1 });
    // products = await findLastestProduct();
  }

  if (category) {
    products = await findAllProducts({ categories: { $in: [category] } });
    console.log('products', products)
  } else {
    products = await findAllProducts();
  }

  if (!products) {
    console.log('no product')
    return res.sendStatus(404);
  }
  return res.status(200).json({ products });
}

export async function deleteProductHandler(
  req: Request<UpdateProductInput["params"]>,
  res: Response
) {
  const userId = get(req, "user._id");
  const productId = req.params.productId;
  const product = await findProduct({ productId });

  if (!product) {
    return res.sendStatus(404);
  }

  if (String(product.user) !== userId) {
    return res.sendStatus(403);
  }

  await deleteProduct({ productId });

  return res.status(200).json("Product sucessfully deleted!");
}
