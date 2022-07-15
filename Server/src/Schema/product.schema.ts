import { object, number, string, TypeOf } from "zod";

const newPayload = {
  body: object({
    title: string({
      required_error: "Title is required",
    }),
    description: string({
      required_error: "Description is required",
    }).min(20, "Description should be at least 120 characters long"),
    price: number({
      required_error: "Price is required",
    }).min(0.01, "Price should be more than 1p"),
    image: string({
      required_error: "Image is required",
    }),
    size: string({
      required_error: "Size is required",
    }),
    colour: string({
      required_error: "Colour is required",
    }),
    categories: string({
      required_error: "Categories are required",
    }).array(),
  }),
};

const payload = {
  body: object({
    title: string({
      required_error: "Title is required",
    }),
    description: string({
      required_error: "Description is required",
    }).min(120, "Description should be at least 120 characters long"),
    price: number({
      required_error: "Price is required",
    }),
    image: string({
      required_error: "Image is required",
    }),
  }),
};

const newParams = {
  params: object({
    productId: string({
      required_error: "ProductId is required",
    }),
  }),
};

const params = {
  params: object({
    productId: string({
      required_error: "ProductId is required",
    }),
  }),
};

const query = {
  query: object({
    productQuery: string({
      required_error: "Product Query is required",
    }),
  }),
};

export const createProductSchema = object({
  ...newPayload,
});

export const updateProductSchema = object({
  ...newPayload,
  ...newParams,
});

export const deleteProductSchema = object({
  ...newParams,
});

export const getProductSchema = object({
  ...params,
});

// export const getAllProductsSchema = object({
//   ...query,
// });

export type CreateProductInput = TypeOf<typeof createProductSchema>
export type UpdateProductInput = TypeOf<typeof updateProductSchema>
export type GetProductInput = TypeOf<typeof getProductSchema>
// export type GetAllProducts = TypeOf<typeof getAllProductsSchema>
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>
