import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../Utils/jwt.utils";
import { reIssueAccessToken } from "../Service/session.service";
import logger from "../Utils/logger";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );

  if (!accessToken) {
    logger.info('No access token')
    return next();
  }

  const refreshToken = get(req, "headers.x-refresh");

  const { decoded, expired } = await verifyJwt(accessToken);

  if (decoded) {
    // @ts-ignore
    req.user = decoded;
    return next();
  }

  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });

    if (newAccessToken) {
      // Add the new access token to the response header
      res.setHeader("x-access-token", newAccessToken);

      const result = verifyJwt(newAccessToken);

      // @ts-ignore
      req.user = (await result).decoded;
    }
    return next();
  }

  return next();
};

export default deserializeUser;
