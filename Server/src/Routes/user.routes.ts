import { Router } from "express";
import requiresUser from "../Middleware/requiresUser";
import validateRequest from "../Middleware/validateRequest";
import isAdmin from "../Middleware/isAdmin";

import {
  createUserHandler,
  updateUserHandler,
  deleteUserAdminHandler,
  getUserAdminHandler,
  getAllUsersAdminHandler,
  getUserStatsAdminHandler,
} from "../Controllers/user.controller";

import {
  createUserSessionHandler,
  getUserSessionHandler,
  deleteUserSessionHandler,
} from "../Controllers/session.controller";

import {
  createUserSchema,
  createUserSessionSchema,
  updateUserSchema,
} from "../Schema/user.schema";

const router: Router = Router();

// Register User
router.post(
  "/users/signup",
  validateRequest(createUserSchema),
  createUserHandler
);

// Login
router.post(
  "/sessions",
  validateRequest(createUserSessionSchema),
  createUserSessionHandler
);

// Get the users sessions
router.get("/sessions", requiresUser, getUserSessionHandler);

// Update user
router.put(
  "/updateMe",
  requiresUser,
  validateRequest(updateUserSchema),
  updateUserHandler
);

// Logout
router.delete("/sessions", requiresUser, deleteUserSessionHandler);

// Change password - by params

// Get User Stats - Admin - NOTE DONE
router.get("/stats", isAdmin, getUserStatsAdminHandler);

// Get all users - Admin
router.get("/getUsers", isAdmin, getAllUsersAdminHandler);

// Get user - Admin
router.get("/:id", isAdmin, getUserAdminHandler);

// Delete a user - Admin
router.delete("/:id", isAdmin, deleteUserAdminHandler);

module.exports = router;
