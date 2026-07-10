import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  mergeTracking,
  getMyViewerScore,
  getViewerLeaderboard,
  heartbeat,
  clearHeartbeat,
  concurrentCount,
} from "../controllers/user.controller.js";
import { protect, authorize, optionalAuth } from "../middlewares/auth.middleware.js";

const router = express.Router();

/* Public / optional-auth routes */
router.post("/heartbeat", optionalAuth, heartbeat);
router.post("/heartbeat/clear", optionalAuth, clearHeartbeat);
router.get("/concurrent", concurrentCount);

/* Protected routes — all below require a valid JWT */
router.use(protect);

router.post("/merge-tracking", mergeTracking);
router.get("/viewer-score", getMyViewerScore);

/* Admin-only routes */
router.get("/leaderboard/viewers", authorize("admin"), getViewerLeaderboard);
router.get("/", authorize("admin"), getAllUsers);
router.put("/:id", authorize("admin"), updateUser);
router.delete("/:id", authorize("admin"), deleteUser);

/* Self or admin — user may view their own record; admin may view any */
router.get("/:id", getUserById);

export default router;

