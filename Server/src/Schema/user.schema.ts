import { object, string, TypeOf } from "zod";

const payload = {
  body: object({
    username: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: "Name is required",
    }).min(6, "Password too short - should be 6 chars minimum"),
    passwordConfirmation: string({
      required_error: "passwordConfirmation is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
};

const params = {
  params: object({
    id: string({
      required_error: "UserId is required",
    }),
  }),
};


export const createUserSchema = object({
  ...payload,
});

export const updateUserSchema = object({
  body: object({
    username: string({
      required_error: "Name is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  })
});

export const createUserSessionSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }),
    password: string({
      required_error: "Password is required",
    }),
  }),
});

export const getUserSchema = object({
  ...params,
});

export const deleteUserSchema = object({
  ...params,
});


export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;

export type UpdateUserInfo = Omit<
  TypeOf<typeof updateUserSchema>,
  "body.passworConfirmation"
>;

export type GetUser =
  TypeOf<typeof getUserSchema>
;

export type DeleteUser =
  TypeOf<typeof deleteUserSchema>
;
