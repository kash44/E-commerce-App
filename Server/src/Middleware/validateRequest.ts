import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";
import logger from "../Utils/logger";

// Validate method uses currying
// We want to be able to execute the validate function with our schema with inside of middleware
// We then want that to return another function and it will be passed to the express route call
// We then validate the request object against the schema
const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: any) {
      logger.error(e);
      return res.status(400).send(e.errors);
    }
  };

export default validate;
