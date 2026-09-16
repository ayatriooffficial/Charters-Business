import crypto from "crypto";

const META_PIXEL_ID = process.env.META_PIXEL_ID;
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const META_TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;

function sha256(value) {
  if (!value) return undefined;
  return crypto
    .createHash("sha256")
    .update(String(value).trim().toLowerCase())
    .digest("hex");
}

export async function sendMetaConversionEvent({
  eventName,
  eventId,
  eventSourceUrl,
  req,
  userData = {},
  customData = {},
}) {
  if (!META_PIXEL_ID || !META_ACCESS_TOKEN) {
    console.warn("[MetaCAPI] Pixel ID/Access Token missing. Skipping CAPI call.");
    return;
  }

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        event_source_url: eventSourceUrl,
        user_data: {
          em: sha256(userData.email),
          ph: sha256(userData.phone),
          client_ip_address: req?.ip,
          client_user_agent: req?.headers?.["user-agent"],
          fbp: req?.cookies?._fbp,
          fbc: req?.cookies?._fbc,
        },
        custom_data: customData,
      },
    ],
    ...(META_TEST_EVENT_CODE && { test_event_code: META_TEST_EVENT_CODE }),
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    if (!response.ok) {
      console.error("[MetaCAPI] Error:", result);
    } else {
      console.log("[MetaCAPI] Event sent:", JSON.stringify(result));
    }
  } catch (error) {
    console.error("[MetaCAPI] Request failed:", error.message);
  }
}