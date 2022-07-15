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
    amount: number({
      required_error: "An amount is required",
    }),
    address: string({
      required_error: "An address is required",
    }),
  }),
};

const params = {
  params: object({
    orderId: string({
      required_error: "orderId is required",
    }),
  }),
};

export const createOrderSchema = object({
  ...payload,
});

export const updateOrderSchema = object({
  ...payload,
  ...params,
});

export const deleteOrderSchema = object({
  ...params,
});

export const getOrderSchema = object({
  ...params,
});

export type CreateOrderInput = TypeOf<typeof createOrderSchema>;
export type UpdateOrderInput = TypeOf<typeof updateOrderSchema>;
export type DeleteOrderInput = TypeOf<typeof deleteOrderSchema>;
export type GetOrderInput = TypeOf<typeof getOrderSchema>;
