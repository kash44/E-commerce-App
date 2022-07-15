import config from "config";
import { get } from "lodash";
import { LeanDocument, FilterQuery, UpdateQuery } from "mongoose";
import Session, { SessionDocument } from "../Models/session.model";
import { UserDocument } from "../Models/user.model";
import { findUser } from "./user.service";
import { verifyJwt, signJwt } from "../Utils/jwt.utils";
import logger from "../Utils/logger";

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({ user: userId, userAgent });
  return session.toJSON();
}

export function createAccessToken({
  user,
  session,
}: {
  user:
    | Omit<UserDocument, "password">
    | LeanDocument<Omit<UserDocument, "password">>;
  session:
    | Omit<SessionDocument, "password">
    | LeanDocument<Omit<SessionDocument, "password">>;
}) {
  // Build and return the new access token
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") } // 15 minutes
  );

  return accessToken;
}

export async function reIssueAccessToken({refreshToken }: {refreshToken: string}) {
  // Decode the refresh token 
  const { decoded } = await verifyJwt(refreshToken);

  // Instead of lodash can do nullish collesion decoded?.id
  if (!decoded || !get(decoded, "session")) return false;

  // Get the session
  const session = await Session.findById(get(decoded, "session"));

  // Make sure the session is still valid 
  if (!session || !session.valid) return false;

  const user = await findUser({ _id: session.user });

  if (!user) return false;

  const accessToken = signJwt(
    {...user, session: session._id},
    {expiresIn: config.get('accessTokenTtl')} // 15 mins
  );

  return accessToken;

}

export async function updateSession(
  query: FilterQuery<SessionDocument>,
  update: UpdateQuery<SessionDocument>
 ) {
  return Session.updateOne(query, update);
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return Session.find(query).lean(); // .lean() returns smaller document without mongoose extras attached to req
}
