import "./src/config/loadEnv.js";
import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import {
  startUserSheetExporter,
  stopUserSheetExporter,
} from "./src/scripts/exportUsersToSheet.js";
import {
  startBlogScheduler,
  stopBlogScheduler,
} from "./src/scripts/blogScheduler.js";

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

    // Auto-seed default Admin user if not present.
    // SECURITY: Never use hardcoded fallback credentials.
    // In production, SEED_ADMIN_PHONE and SEED_ADMIN_PASSWORD MUST be set explicitly.
    try {
      const adminPhone = process.env.SEED_ADMIN_PHONE;
      const adminPassword = process.env.SEED_ADMIN_PASSWORD;

      if (!adminPhone || !adminPassword) {
        if (process.env.NODE_ENV === "production") {
          // Hard-fail in production — do not start with unknown credentials.
          throw new Error(
            "[Auto-Seed] SEED_ADMIN_PHONE and SEED_ADMIN_PASSWORD must be set in production. " +
            "Refusing to start without explicit admin credentials."
          );
        } else {
          console.warn(
            "[Auto-Seed] SEED_ADMIN_PHONE or SEED_ADMIN_PASSWORD not set. " +
            "Skipping admin auto-seed in development mode."
          );
        }
      } else {
        const User = (await import("./src/models/User.model.js")).default;
        const adminExists = await User.findOne({ phoneNumber: adminPhone });
        if (!adminExists) {
          console.log(`[Auto-Seed] Seeding default Admin user for number: ${adminPhone}...`);
          await User.create({
            name: "System Admin",
            email: "admin@chartersbusiness.com",
            phoneNumber: adminPhone,
            password: adminPassword,
            role: "admin",
            isFirstLogin: false,
            status: "active",
          });
          console.log("[Auto-Seed] Default Admin user seeded successfully!");
        } else {
          console.log(`[Auto-Seed] Admin user (${adminPhone}) already exists in database.`);
        }
      }
    } catch (err) {
      console.error("[Auto-Seed] Failed to seed default Admin user:", err);
      if (process.env.NODE_ENV === "production") {
        // Re-throw so the server does not silently start with a broken admin state.
        throw err;
      }
    }

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

    // Start Blog Scheduler
    try {
      startBlogScheduler();
    } catch (error) {
      console.error("Blog scheduler failed to start:", error.message);
    }

    const shutdown = () => {
      console.log("Shutting down server...");

      // Stop Blog Scheduler
      try {
        stopBlogScheduler();
      } catch (error) {
        console.error("Blog scheduler shutdown error:", error.message);
      }

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

    // Graceful shutdown on SIGINT (Ctrl+C in dev) and SIGTERM (cloud platform stop).
    // SIGTERM is sent by Render, Railway, Kubernetes, Docker when stopping a container.
    // Without SIGTERM handling the process is killed immediately, dropping in-flight
    // requests and skipping background process cleanup.
    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);

  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();



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
