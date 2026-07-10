import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import rateLimit from "express-rate-limit";

import appConfig from "./config/app.config.js";
import errorHandler from "./middlewares/error.middleware.js";
import requestId from "./middlewares/requestId.middleware.js";
import requestLog from "./middlewares/requestLog.middleware.js";

import authRoutes from "./routes/auth.routes.js";
//import applicationRoutes from "./routes/application.routes.js";
import counselingRoutes from "./routes/counseling.routes.js";
import userRoutes from "./routes/user.routes.js";

//import jobPostingRoutes from "./routes/jobPosting.routes.js";
//import internshipPostingRoutes from "./routes/internshipPosting.routes.js";
import jobApplicationRoutes from "./routes/jobApplication.routes.js";
import meetingRoutes from "./routes/meeting.routes.js";
import internalAdminRoutes from "./routes/internalAdmin.routes.js";
import blogRoutes from "./routes/blog.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("trust proxy", 1);

/* SECURITY */

app.use(helmet());
app.use(requestId);

const ALLOWED_ORIGIN_PATTERNS = [
  /^https:\/\/charters-business(-[a-z0-9-]+)?\.vercel\.app$/i,
  /^https:\/\/charters-business-admin(-[a-z0-9-]+)?\.vercel\.app$/i,
  /^https:\/\/chartersbusiness\.com$/i,
];

const corsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (appConfig.corsOrigin.includes(origin)) {
      return callback(null, true);
    }

    const isMatch = ALLOWED_ORIGIN_PATTERNS.some(pattern => pattern.test(origin));
    if (isMatch) {
      return callback(null, true);
    }

    return callback(new Error('Not allowed by CORS'));
  },
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
  // Colorful concise logging for local development.
  app.use(morgan("dev"));
} else {
  // Apache 'combined' format for production: includes IP, method, URL,
  // status code, response size, referrer, and user-agent.
  // Essential for debugging incidents and monitoring in log aggregators.
  app.use(morgan("combined"));
}

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

/* RATE LIMITING */

// Strict limiter for authentication endpoints — prevents brute-force and credential stuffing.
const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,                   // max 10 attempts per IP per window
  standardHeaders: true,     // Return rate-limit info in `RateLimit-*` headers
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests from this IP. Please try again after 15 minutes.",
  },
  skipSuccessfulRequests: false,
});

// Moderate limiter for public form submissions (applications, counseling).
const submissionRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20,                   // max 20 submissions per IP per hour
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many submissions from this IP. Please try again after 1 hour.",
  },
});

// Heartbeat limiter — prevents session-collection flooding.
const heartbeatRateLimiter = rateLimit({
  windowMs: 60 * 1000,  // 1 minute
  max: 60,              // max 60 pings per IP per minute (1 per second)
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many heartbeat requests. Please slow down.",
  },
});

/* API ROUTES */

app.use("/api/v1/auth", authRateLimiter, authRoutes);
//app.use("/api/v1/applications", submissionRateLimiter, applicationRoutes);
app.use("/api/v1/counseling", submissionRateLimiter, counselingRoutes);
app.use("/api/v1/users", heartbeatRateLimiter, userRoutes);

//app.use("/api/v1/jobs", jobPostingRoutes);
//app.use("/api/v1/internships", internshipPostingRoutes);
app.use("/api/v1/job-applications", jobApplicationRoutes);
app.use("/api/v1/meetings", meetingRoutes);
app.use("/api/v1/blogs", blogRoutes);

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
// Trigger restart to load new MONGODB_URI environment variable
