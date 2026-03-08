const cron = require("node-cron");
const User = require("../models/User.model");
const { exportUsersToSheet } = require("../services/google.service");

// Runs every 15 minutes
const startUserExportCron = () => {
  cron.schedule("*/15 * * * *", async () => {
    try {
      console.log("⏳ Running user export cron job...");

      const users = await User.find({})
        .select("name email role createdAt")
        .lean();

      if (!users.length) {
        console.log("⚠ No users found to export.");
        return;
      }

      await exportUsersToSheet(users);

      console.log("✅ User data exported successfully.");
    } catch (error) {
      console.error("❌ Error exporting users:", error.message);
    }
  });

  console.log("🟢 User export cron job started (every 15 min)");
};

module.exports = startUserExportCron;