import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import logger from "../Utils/logger";

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const userIsAdmin = get(req, "user.isAdmin");

  if (!userIsAdmin) {
    logger.info("not an admin");
    return res.status(403).json("You are not authenticated for this action");
  }

  return next();
};

export default isAdmin;
