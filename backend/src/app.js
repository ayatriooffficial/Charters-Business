import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

import appConfig from "./config/app.config.js";
import errorHandler from "./middlewares/error.middleware.js";

import authRoutes from "./routes/auth.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import counselingRoutes from "./routes/counseling.routes.js";
import userRoutes from "./routes/user.routes.js";

import jobPostingRoutes from "./routes/jobPosting.routes.js";
import internshipPostingRoutes from "./routes/internshipPosting.routes.js";
import jobApplicationRoutes from "./routes/jobApplication.routes.js";
import meetingRoutes from "./routes/meeting.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/* SECURITY */

app.use(helmet());

/* ---------------- CORS ---------------- */

const corsOptions = {
  origin: [
    "https://charters-business.vercel.app",
    "http://localhost:3000",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));

/* BODY PARSER */

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

/* STATIC FILES */

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

/*LOGGING */

if (appConfig.env === "development") {
  app.use(morgan("dev"));
}

/* RATE LIMIT */

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});

app.use("/api", limiter);

/* ROOT ROUTE */

app.get("/", (req, res) => {
  res.send("Charters API running");
});

/* HEALTH CHECK */

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

/*API ROUTES */

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/applications", applicationRoutes);
app.use("/api/v1/counseling", counselingRoutes);
app.use("/api/v1/users", userRoutes);

app.use("/api/v1/jobs", jobPostingRoutes);
app.use("/api/v1/internships", internshipPostingRoutes);
app.use("/api/v1/job-applications", jobApplicationRoutes);
app.use("/api/v1/meetings", meetingRoutes);

/*404 HANDLER */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/*ERROR HANDLER*/

app.use(errorHandler);

export default app;