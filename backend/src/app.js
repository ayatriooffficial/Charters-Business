import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";
<<<<<<< HEAD

import appConfig from "./config/app.config.js";
import errorHandler from "./middlewares/error.middleware.js";

=======
import appConfig from "./config/app.config.js";
import errorHandler from "./middlewares/error.middleware.js";
>>>>>>> e985f5b1974c94b7d2f971f63a2b6805fc1006d2
import authRoutes from "./routes/auth.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import counselingRoutes from "./routes/counseling.routes.js";
import userRoutes from "./routes/user.routes.js";

<<<<<<< HEAD
=======
// NEW IMPORTS
>>>>>>> e985f5b1974c94b7d2f971f63a2b6805fc1006d2
import jobPostingRoutes from "./routes/jobPosting.routes.js";
import internshipPostingRoutes from "./routes/internshipPosting.routes.js";
import jobApplicationRoutes from "./routes/jobApplication.routes.js";
import meetingRoutes from "./routes/meeting.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

<<<<<<< HEAD
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

=======
// Security middleware
app.use(helmet());

// CORS
app.use(cors({
  origin: [
    "https://charters-business.vercel.app",
    "http://localhost:3000"
    
  ],
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  credentials: true
}));

//preflight request handling
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// Body parser
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Serve static files (Resumes)
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Logging
>>>>>>> e985f5b1974c94b7d2f971f63a2b6805fc1006d2
if (appConfig.env === "development") {
  app.use(morgan("dev"));
}

<<<<<<< HEAD
/* RATE LIMIT */

=======
// Rate limiting
>>>>>>> e985f5b1974c94b7d2f971f63a2b6805fc1006d2
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
<<<<<<< HEAD

app.use("/api", limiter);

/* ROOT ROUTE */

app.get("/", (req, res) => {
  res.send("Charters API running");
});

/* HEALTH CHECK */

=======
app.use("/api", limiter);

// Health check
>>>>>>> e985f5b1974c94b7d2f971f63a2b6805fc1006d2
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

<<<<<<< HEAD
/*API ROUTES */

=======
// API routes
>>>>>>> e985f5b1974c94b7d2f971f63a2b6805fc1006d2
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/applications", applicationRoutes);
app.use("/api/v1/counseling", counselingRoutes);
app.use("/api/v1/users", userRoutes);

<<<<<<< HEAD
=======
// NEW ROUTES
>>>>>>> e985f5b1974c94b7d2f971f63a2b6805fc1006d2
app.use("/api/v1/jobs", jobPostingRoutes);
app.use("/api/v1/internships", internshipPostingRoutes);
app.use("/api/v1/job-applications", jobApplicationRoutes);
app.use("/api/v1/meetings", meetingRoutes);

<<<<<<< HEAD
/*404 HANDLER */

=======
// 404 handler
>>>>>>> e985f5b1974c94b7d2f971f63a2b6805fc1006d2
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

<<<<<<< HEAD
/*ERROR HANDLER*/

=======
// Error handler
>>>>>>> e985f5b1974c94b7d2f971f63a2b6805fc1006d2
app.use(errorHandler);

export default app;