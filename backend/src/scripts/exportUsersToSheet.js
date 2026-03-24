import dotenv from "dotenv";
dotenv.config();

import path from "path";
import mongoose from "mongoose";
import { google } from "googleapis";
import User from "../models/User.model.js";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const KEY_PATH = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
const MONGO_URI = process.env.MONGODB_URI;

if (!SHEET_ID) throw new Error("Missing GOOGLE_SHEET_ID");
if (!KEY_PATH) throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_JSON");
if (!MONGO_URI) throw new Error("Missing MONGODB_URI");

function toISO(d) {
  if (!d) return "";
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? "" : dt.toISOString();
}

let sheets;
let isRunning = false;

/* =============================
   INITIAL SETUP (node src/scripts/exportUsersToSheet.js)
============================= */

async function init() {
  console.log("Connecting to Mongo...");
  await mongoose.connect(MONGO_URI);
  console.log("Mongo connected");

  console.log("Initializing Google Sheets client...");
  const auth = new google.auth.GoogleAuth({
    keyFile: path.resolve(KEY_PATH),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const authClient = await auth.getClient();

  sheets = google.sheets({
    version: "v4",
    auth: authClient,
  });

  console.log("Google Sheets client ready");
}


async function exportUsers() {
  if (isRunning) {
    console.log("Previous export still running — skipping this cycle.");
    return;
  }

  isRunning = true;

  try {
    console.log("Starting export...");

    const users = await User.find(
      {},
      {
        name: 1,
        email: 1,
        role: 1,
        phoneNumber: 1,
        lastLogin: 1,
        viewerScore: 1,
        "viewerMetrics.visitCount": 1,
        "viewerMetrics.pagesNavigated": 1,
        "viewerMetrics.chatInteractions": 1,
        "viewerMetrics.loggedIn": 1,
        "viewerMetrics.deviceId": 1,
        "viewerMetrics.sessionId": 1,
        updatedAt: 1,
        createdAt: 1,
      }
    ).lean();

    console.log("Users found:", users.length);

    const header = [
      "mongo_id",
      "name",
      "email",
      "role",
      "phoneNumber",
      "lastLogin",
      "viewerScore",
      "visitCount",
      "pagesNavigated",
      "chatInteractions",
      "loggedIn",
      "deviceId",
      "sessionId",
      "createdAt",
      "updatedAt",
    ];

    const rows = users.map((u) => [
      String(u._id || ""),
      u.name || "",
      u.email || "",
      u.role || "",
      u.phoneNumber || "",
      toISO(u.lastLogin),
      typeof u.viewerScore === "number" ? u.viewerScore : "",
      u.viewerMetrics?.visitCount ?? 0,
      u.viewerMetrics?.pagesNavigated ?? 0,
      u.viewerMetrics?.chatInteractions ?? 0,
      u.viewerMetrics?.loggedIn ?? false,
      u.viewerMetrics?.deviceId ?? "",
      u.viewerMetrics?.sessionId ?? "",
      toISO(u.createdAt),
      toISO(u.updatedAt),
    ]);

    await sheets.spreadsheets.values.clear({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A1:Z",
    });

    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      requestBody: {
        values: [header, ...rows],
      },
    });

    console.log(
      `Exported ${rows.length} users to Google Sheet at ${new Date().toLocaleTimeString()}`
    );
  } catch (err) {
    console.error("Export failed:", err.message);
  } finally {
    isRunning = false;
  }
}

/* =============================
   START SCHEDULER
============================= */

async function startScheduler() {
  await init();
  await exportUsers();

  setInterval(async () => {
    await exportUsers();
  }, 10 * 60 * 1000);

  console.log("Scheduler started — exporting every 10 minutes.");
}

startScheduler();

/* =============================
   CLEAN SHUTDOWN
============================= */

process.on("SIGINT", async () => {
  console.log("Shutting down...");
  await mongoose.disconnect();
  process.exit(0);
});