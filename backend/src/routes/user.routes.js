import express from "express";
import { getAllUsers, getUserById, updateUser, deleteUser, mergeTracking, getMyViewerScore, getViewerLeaderboard,
} from "../controllers/user.controller.js";

import { protect, authorize, optionalAuth } from "../middlewares/auth.middleware.js";
import { heartbeat, concurrentCount } from "../controllers/user.controller.js";

const router = express.Router();

/* Routes */
router.post("/heartbeat", optionalAuth, heartbeat);
router.get("/concurrent", concurrentCount);
router.use(protect);
router.post("/merge-tracking", mergeTracking);
router.get("/viewer-score", getMyViewerScore);
router.get("/leaderboard/viewers", authorize("admin"), getViewerLeaderboard);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;