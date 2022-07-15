import config from "config";
import { Request, Response } from "express";
import { validatePassword } from "../Service/user.service";
import {
  createSession,
  createAccessToken,
  updateSession,
  findSessions,
} from "../Service/session.service";
import { signJwt } from "../Utils/jwt.utils";
import { get } from "lodash";
import logger from "../Utils/logger";

export async function createUserSessionHandler(req: Request, res: Response) {
  // Validate the email and password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

  // Create a session
  const session = await createSession(user._id, req.get("user-agent") || "");

  // // Create access token
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl")} // 15 minutes,
  );

  // // Create refresh token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("refreshTokenTtl")} // 15 mins
  );


  // Send refresh & access token back
  return res.send({ accessToken, refreshToken });
}

// export async function invalidateUserSessionHandler(
//   req: Request,
//   res: Response
// ) {
//   const sessionId = get(req, "user.session");

//   await updateSession({ _id: sessionId }, { valid: false });

//   return res.sendStatus(200);
// }

export async function getUserSessionHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");

  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions);
}

export async function deleteUserSessionHandler(req: Request, res: Response) {
  const sessionId = get(req, "user.session");

  await updateSession({ _id: sessionId }, { valid: false });

  return res.send({
    accessToken: null,
    refreshToken: null,
  });
}
