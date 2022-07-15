import { object, number, string, TypeOf } from "zod";

const payload = {
  body: object({
    products: object({
      productId: string({
        required_error: "Products are required",
      }),
      quantity: number({
        required_error: "A quantity is required",
      }),
    }).array(),
  }),
};

const params = {
  params: object({
    cartId: string({
      required_error: "CartId is required",
    }),
  }),
};

export const createCartSchema = object({
  ...payload,
});

export const updateCartSchema = object({
  ...payload,
  ...params,
});

export const getCartSchema = object({
  ...params,
});

export const deleteCartSchema = object({
  ...params,
});

export type CreateCartInput = TypeOf<typeof createCartSchema>;
export type UpdateCartInput = TypeOf<typeof updateCartSchema>;
export type GetCartInput = TypeOf<typeof getCartSchema>;
export type DeleteCartInput = TypeOf<typeof deleteCartSchema>;
