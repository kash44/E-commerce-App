import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import logger from "../Utils/logger";

const requiresUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = get(req, "user");
  const userId = get(req, "user._id");
  console.log(userId)
  // console.log(user) // user has hashed password, remove this

  if (!user) {
    logger.info("no user");
    return res.sendStatus(403).json("User does not exist");
  }

  return next();
};

export default requiresUser;
