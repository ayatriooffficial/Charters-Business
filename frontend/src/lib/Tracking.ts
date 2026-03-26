import { v4 as uuidv4 } from "uuid";

export const CONSENT_KEY = "cookie_consent_v1";
const DEVICE_KEY = "device_id_v1";
const SESSION_KEY = "anon_session_v1";

export type ConsentChoice = "accepted" | "necessary" | "rejected";

export type AnonSession = {
  sessionId: string;
  deviceId: string;
  pageViewsTotal: number;
  uniquePages: string[];
  chatInteractions: number;
  startedAt: number;
  lastSeenAt: number;
};

export function getConsentChoice(): ConsentChoice | null {
  const storedConsent = localStorage.getItem(CONSENT_KEY);

  if (
    storedConsent === "accepted" ||
    storedConsent === "necessary" ||
    storedConsent === "rejected"
  ) {
    return storedConsent;
  }

  return null;
}

export function setConsentChoice(choice: ConsentChoice) {
  localStorage.setItem(CONSENT_KEY, choice);
}

export function hasTrackingConsent(): boolean {
  return getConsentChoice() === "accepted";
}

function getOrCreateDeviceId(): string {
  let id = localStorage.getItem(DEVICE_KEY);
  if (!id) {
    id = uuidv4();
    localStorage.setItem(DEVICE_KEY, id);
  }
  return id;
}

export function clearAnonSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function clearTrackingData() {
  clearAnonSession();
  localStorage.removeItem(DEVICE_KEY);
}

function getStoredAnonSession(): AnonSession | null {
  const raw = localStorage.getItem(SESSION_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as AnonSession;
  } catch {
    clearAnonSession();
    return null;
  }
}

export function getOrCreateAnonSession(): AnonSession | null {
  if (!hasTrackingConsent()) return null;

  const deviceId = getOrCreateDeviceId();
  const existingSession = getStoredAnonSession();

  if (existingSession) {
    return existingSession;
  }

  const fresh: AnonSession = {
    sessionId: uuidv4(),
    deviceId,
    pageViewsTotal: 0,
    uniquePages: [],
    chatInteractions: 0,
    startedAt: Date.now(),
    lastSeenAt: Date.now(),
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(fresh));
  return fresh;
}

function save(session: AnonSession) {
  session.lastSeenAt = Date.now();
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function trackPage(pathname: string) {
  const session = getOrCreateAnonSession();
  if (!session) return;

  session.pageViewsTotal += 1;
  if (!session.uniquePages.includes(pathname)) session.uniquePages.push(pathname);
  save(session);
}

export function trackChatInteraction() {
  const session = getOrCreateAnonSession();
  if (!session) return;

  session.chatInteractions += 1;
  save(session);
}

/*
 Call this after the user is logged in successfully.
 It sends the anon session to backend and clears local data.
 */
export async function flushTrackingToBackend(apiBaseUrl: string, authToken: string) {
  const payload = getStoredAnonSession();
  if (!payload) return;

  await fetch(`${apiBaseUrl}/api/v1/users/merge-tracking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(payload),
  });

  clearAnonSession();
}

export async function sendHeartbeat(apiBaseUrl: string) {
  const session = getOrCreateAnonSession();

  if (!session) {
    return;
  }

  await fetch(`${apiBaseUrl}/api/v1/users/heartbeat`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sessionId: session.sessionId,
      deviceId: session.deviceId,
    }),
  });
}

export async function clearHeartbeatSession(apiBaseUrl: string) {
  const session = getStoredAnonSession();

  if (!session?.sessionId) {
    clearTrackingData();
    return;
  }

  try {
    await fetch(`${apiBaseUrl}/api/v1/users/heartbeat/clear`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: session.sessionId,
      }),
    });
  } finally {
    clearTrackingData();
  }
}
