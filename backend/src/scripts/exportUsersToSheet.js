import dotenv from "dotenv";
dotenv.config();

import path from "path";
import mongoose from "mongoose";
import { google } from "googleapis";
import User from "../models/User.model.js";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const KEY_PATH = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
const MONGO_URI = process.env.MONGODB_URI;
const SHEET_RANGE = "Sheet1!A:ZZ";
const SHEET_TITLE = "Sheet1";

if (!SHEET_ID) throw new Error("Missing GOOGLE_SHEET_ID");
if (!KEY_PATH) throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_JSON");
if (!MONGO_URI) throw new Error("Missing MONGODB_URI");

function toISO(d) {
  if (!d) return "";
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? "" : dt.toISOString();
}

function toDisplayText(value, fallback = "N/A") {
  if (value === null || value === undefined) {
    return fallback;
  }

  const text = String(value).trim();
  return text ? text : fallback;
}

function toDisplayDate(value) {
  const iso = toISO(value);
  if (!iso) {
    return "N/A";
  }

  const date = new Date(iso);
  return date.toLocaleString("en-IN", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });
}

function getProfileStatus(user) {
  const hasName = Boolean(user.name?.trim());
  const hasEmail = Boolean(user.email?.trim());
  const hasPhone = Boolean(user.phoneNumber?.trim());

  if (hasName && hasEmail && hasPhone) {
    return "Complete";
  }

  if (hasName || hasEmail || hasPhone) {
    return "Partial";
  }

  return "Missing";
}

function getTrackingStatus(user) {
  const visits = user.viewerMetrics?.visitCount ?? 0;
  const pages = user.viewerMetrics?.pagesNavigated ?? 0;
  const chats = user.viewerMetrics?.chatInteractions ?? 0;
  const score = typeof user.viewerScore === "number" ? user.viewerScore : 0;

  if (visits > 0 || pages > 0 || chats > 0 || score > 0) {
    return "Tracked";
  }

  return "No analytics yet";
}

function getEngagementBand(score) {
  if (typeof score !== "number" || score <= 0) {
    return "N/A";
  }

  if (score >= 75) {
    return "High";
  }

  if (score >= 35) {
    return "Medium";
  }

  return "Low";
}

async function formatSheet(header) {
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId: SHEET_ID,
  });

  const targetSheet = spreadsheet.data.sheets?.find(
    (sheet) => sheet.properties?.title === SHEET_TITLE,
  );
  const sheetId = targetSheet?.properties?.sheetId;

  if (sheetId === undefined) {
    return;
  }

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SHEET_ID,
    requestBody: {
      requests: [
        {
          updateSheetProperties: {
            properties: {
              sheetId,
              gridProperties: {
                frozenRowCount: 1,
              },
            },
            fields: "gridProperties.frozenRowCount",
          },
        },
        {
          repeatCell: {
            range: {
              sheetId,
              startRowIndex: 0,
              endRowIndex: 1,
            },
            cell: {
              userEnteredFormat: {
                backgroundColor: {
                  red: 0.07,
                  green: 0.2,
                  blue: 0.29,
                },
                textFormat: {
                  bold: true,
                  foregroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1,
                  },
                },
              },
            },
            fields:
              "userEnteredFormat(backgroundColor,textFormat.foregroundColor,textFormat.bold)",
          },
        },
        {
          autoResizeDimensions: {
            dimensions: {
              sheetId,
              dimension: "COLUMNS",
              startIndex: 0,
              endIndex: header.length,
            },
          },
        },
      ],
    },
  });
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
        courseInterestedIn: 1,
        lastLogin: 1,
        viewerScore: 1,
        "viewerMetrics.visitCount": 1,
        "viewerMetrics.pagesNavigated": 1,
        "viewerMetrics.chatInteractions": 1,
        updatedAt: 1,
        createdAt: 1,
      }
    )
      .sort({ createdAt: -1, name: 1 })
      .lean();

    console.log("Users found:", users.length);

    const header = [
      "User ID",
      "Name",
      "Email",
      "Phone Number",
      "Course Interested In",
      "Role",
      "Profile Status",
      "Signed Up On",
      "Last Login",
      "Tracking Status",
      "Viewer Score",
      "Engagement Band",
      "Visits",
      "Unique Pages",
      "Chat Interactions",
      "Last Updated",
    ];

    const rows = users.map((u) => {
      const score = typeof u.viewerScore === "number" ? u.viewerScore : 0;

      return [
        String(u._id || ""),
        toDisplayText(u.name),
        toDisplayText(u.email),
        toDisplayText(u.phoneNumber),
        toDisplayText(u.courseInterestedIn),
        toDisplayText(u.role),
        getProfileStatus(u),
        toDisplayDate(u.createdAt),
        toDisplayDate(u.lastLogin),
        getTrackingStatus(u),
        score || "N/A",
        getEngagementBand(score),
        u.viewerMetrics?.visitCount ?? 0,
        u.viewerMetrics?.pagesNavigated ?? 0,
        u.viewerMetrics?.chatInteractions ?? 0,
        toDisplayDate(u.updatedAt),
      ];
    });

    await sheets.spreadsheets.values.clear({
      spreadsheetId: SHEET_ID,
      range: SHEET_RANGE,
    });

    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_TITLE}!A1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [header, ...rows],
      },
    });

    await formatSheet(header);

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
