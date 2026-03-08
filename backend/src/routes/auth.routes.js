import express from "express";
import * as authController from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Public routes
router.post("/login", authController.login);
router.post("/firebase-login", authController.firebaseLogin);
router.post("/firebase-signup", authController.firebaseSignup);

// Protected routes
router.get("/me", protect, authController.getMe);
router.put("/profile", protect, authController.updateProfile);
router.put("/change-password", protect, authController.changePassword);

// First login password change
router.put(
  "/change-password-first-login",
  protect,
  authController.changePasswordFirstLogin,
);

router.post("/logout", protect, authController.logout);

export default router;
