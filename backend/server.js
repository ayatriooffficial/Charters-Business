import "./src/config/loadEnv.js";
import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import {
  startUserSheetExporter,
  stopUserSheetExporter,
} from "./src/scripts/exportUsersToSheet.js";

const PORT = process.env.PORT || 10000;
const SHOULD_START_SHEET_EXPORTER =
  process.env.ENABLE_SHEET_EXPORT !== "false" &&
  Boolean(
    process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  );

// Connect to MongoDB then start server
const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB connected");

    const server = app.listen(PORT, () => {
      console.log(
        `Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`
      );
    });

    if (SHOULD_START_SHEET_EXPORTER) {
      void startUserSheetExporter().catch((error) => {
        console.error("Google Sheets exporter failed to start:", error.message);
      });
    }

    const shutdown = () => {
      console.log("Shutting down server...");

      void stopUserSheetExporter()
        .catch((error) => {
          console.error(
            "Google Sheets exporter shutdown error:",
            error.message
          );
        })
        .finally(() => {
          server.close(() => {
            console.log("Server closed");
            process.exit(0);
          });
        });
    };

    // Graceful shutdown
    process.on("SIGINT", shutdown);
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Charters Business API is running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});


// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:", err);
  process.exit(1);
});

// Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});
