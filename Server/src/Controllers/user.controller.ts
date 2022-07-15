import { Request, Response, NextFunction } from "express";
import {
  CreateUserInput,
  UpdateUserInfo,
  GetUser,
  DeleteUser,
} from "../Schema/user.schema";
import {
  createUser,
  findAndUpdateUser,
  findUser,
  findAllUsers,
  getUserStats,
  deleteUser,
} from "../Service/user.service";
import { get } from "lodash";
import logger from "../Utils/logger";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    console.log("new user created", user);
    return res.send(user);
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}

export async function updateUserHandler(
  req: Request<{}, {}, UpdateUserInfo["body"]>,
  res: Response,
  next: NextFunction
) {
  try {
    // @ts-ignore
    const user = req.user._id;
    const update = req.body;

    if (!user) {
      res.status(200).json({
        status: "failed",
        message: "This user does not exist",
      });
      next();
    }

    const updatedUser = await findAndUpdateUser({ user }, update, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}

export async function deleteUserAdminHandler(
  req: Request<DeleteUser["params"]>,
  res: Response
) {
  try {
    const userId = req.params.id;

    // Find User
    const user = await findUser({ _id: userId });

    // User validation - user must exist
    if (!user) {
      res.status(404).json("User does not exist");
    }

    // UserId must match paramsId
    if (String(user?._id) !== userId) {
      return res.sendStatus(403);
    }

    await deleteUser({ _id: user?._id });

    return res.status(200).json("User has been sucessfully deleted!");
  } catch (error: any) {
    return res.status(409).send(error.message);
  }
}

export async function getUserAdminHandler(
  req: Request<GetUser["params"]>,
  res: Response
) {
  try {
    const userId = req.params.id;

    // Find User
    const user = await findUser({ _id: userId });

    // User validation - user must exist
    if (!user) {
      res.status(404).json("User does not exist");
    }

    return res.status(200).json({ user });
  } catch (error: any) {
    return res.status(409).send(error.message);
  }
}

export async function getAllUsersAdminHandler(
  req: Request<GetUser["params"]>,
  res: Response
) {
  try {

    // Get Users
    const users = await findAllUsers();

    // User validation - user must exist
    if (!users) {
      res.status(404).json("Users do not exist");
    }

    return res.status(200).json({ users });
  } catch (error: any) {
    return res.status(409).send(error.message);
  }
}

export async function getUserStatsAdminHandler(
  req: Request,
  res: Response
) {
  try {
    const userStats = await getUserStats()
    return res.status(200).json(userStats);
  } catch (error: any) {
    logger.info('cannot get user stats')
    return res.status(409).send(error.message);
  }
}
