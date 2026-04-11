import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import appConfig from "./config/app.config.js";
import errorHandler from "./middlewares/error.middleware.js";
import requestId from "./middlewares/requestId.middleware.js";
import requestLog from "./middlewares/requestLog.middleware.js";

import authRoutes from "./routes/auth.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import counselingRoutes from "./routes/counseling.routes.js";
import userRoutes from "./routes/user.routes.js";

import jobPostingRoutes from "./routes/jobPosting.routes.js";
import internshipPostingRoutes from "./routes/internshipPosting.routes.js";
import jobApplicationRoutes from "./routes/jobApplication.routes.js";
import meetingRoutes from "./routes/meeting.routes.js";
import internalAdminRoutes from "./routes/internalAdmin.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/* SECURITY */

app.use(helmet());
app.use(requestId);

/* ---------------- CORS ---------------- */

const corsOptions = {
  origin: [
    "https://charters-business.vercel.app",
    "http://localhost:3000",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

/* BODY PARSER */

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

/* STATIC FILES */

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

/* LOGGING */

if (appConfig.env === "development") {
  app.use(morgan("dev"));
}

/* RATE LIMIT */

const publicApiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});

app.use("/api/v1", publicApiLimiter);

/* ROOT ROUTE */

app.get("/", (req, res) => {
  res.send("Charters API running");
});

/* HEALTH CHECK */

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    requestId: req.requestId,
    timestamp: new Date().toISOString(),
  });
});

/* API ROUTES */

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/applications", applicationRoutes);
app.use("/api/v1/counseling", counselingRoutes);
app.use("/api/v1/users", userRoutes);

app.use("/api/v1/jobs", jobPostingRoutes);
app.use("/api/v1/internships", internshipPostingRoutes);
app.use("/api/v1/job-applications", jobApplicationRoutes);
app.use("/api/v1/meetings", meetingRoutes);

// Internal server-to-server admin surface.
app.use("/api/internal/admin", requestLog, internalAdminRoutes);

/* 404 HANDLER */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    requestId: req.requestId,
    message: "Route not found",
  });
});

/* ERROR HANDLER */

app.use(errorHandler);

export default app;
